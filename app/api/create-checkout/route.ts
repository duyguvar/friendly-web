import Stripe from "stripe";
import { stripeAmount } from "../../../lib/pricing";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const BASE_URL =
  process.env.NEXT_PUBLIC_URL ?? "https://itsjustafriendly.com";

export async function POST(req: Request) {
  try {
    const { credits, price, currency, userId } = await req.json();

    const pkg = { credits, price, currency, symbol: "" };
    const amount = stripeAmount(pkg);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: `${credits} Friendly Credits`,
              description: "Credits appear instantly in the app after payment.",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: { user_id: userId, credits: String(credits) },
      success_url: `${BASE_URL}/credits/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/credits`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("create-checkout error:", err);
    return Response.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
