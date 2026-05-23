import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { getCanonicalMembershipPlan } from "../../../lib/pricing";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const BASE_URL = process.env.NEXT_PUBLIC_URL ?? "https://itsjustafriendly.com";

const SUPABASE_URL = "https://nbwftvqjablkactntjmr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_I4LZj-lvWHON8N4kORNG3g_vWqKH3sv";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "").trim();
    if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 });

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) return Response.json({ error: "Unauthorized" }, { status: 401 });

    const { plan } = await req.json();
    const membership = getCanonicalMembershipPlan(String(plan));
    if (!membership) return Response.json({ error: "Invalid plan" }, { status: 400 });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aed",
            product_data: {
              name: `Friendly ${membership.name} Membership`,
              description: "Monthly subscription · cancel anytime.",
            },
            unit_amount: membership.amount,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      metadata: { user_id: user.id, membership: membership.id },
      success_url: `${BASE_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/membership/upgrade`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("create-membership-checkout error:", err);
    return Response.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
