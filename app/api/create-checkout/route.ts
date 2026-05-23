import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { getCanonicalPackage, stripeAmount } from "../../../lib/pricing";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const BASE_URL = process.env.NEXT_PUBLIC_URL ?? "https://itsjustafriendly.com";

const SUPABASE_URL = "https://nbwftvqjablkactntjmr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_I4LZj-lvWHON8N4kORNG3g_vWqKH3sv";

export async function POST(req: Request) {
  try {
    // 1. Verify the caller's auth token
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "").trim();
    if (!token) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse and validate inputs — never trust client price
    const { credits, currency } = await req.json();

    const validCredits = [50, 100, 200, 500];
    if (!validCredits.includes(Number(credits))) {
      return Response.json({ error: "Invalid credits amount" }, { status: 400 });
    }

    // 3. Look up canonical price server-side — client cannot manipulate this
    const pkg = getCanonicalPackage(Number(credits), String(currency));
    if (!pkg) {
      return Response.json({ error: "Invalid package" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: pkg.currency.toLowerCase(),
            product_data: {
              name: `${pkg.credits} Friendly Credits`,
              description: "Credits appear instantly in the app after payment.",
            },
            unit_amount: stripeAmount(pkg),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      // user.id comes from verified JWT — not from client body
      metadata: { user_id: user.id, credits: String(pkg.credits) },
      success_url: `${BASE_URL}/credits/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/credits`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("create-checkout error:", err);
    return Response.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
