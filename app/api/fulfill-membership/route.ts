import Stripe from "stripe";
import { createAdminClient } from "../../../lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { session_id } = await req.json();
    if (!session_id) return Response.json({ error: "Missing session_id" }, { status: 400 });

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["subscription"],
    });

    const sub = session.subscription as Stripe.Subscription | null;
    if (!sub || (sub.status !== "active" && sub.status !== "trialing")) {
      return Response.json({ error: "Subscription not active" }, { status: 400 });
    }

    const userId = session.metadata?.user_id;
    const membership = session.metadata?.membership;
    if (!userId || !membership) return Response.json({ error: "Missing metadata" }, { status: 400 });

    const admin = createAdminClient();
    const { error } = await admin
      .from("users")
      .update({
        host_membership: membership,
        stripe_customer_id: typeof sub.customer === "string" ? sub.customer : sub.customer?.id ?? null,
        stripe_subscription_id: sub.id,
      })
      .eq("id", userId);

    if (error) {
      console.error("fulfill-membership DB error:", error);
      return Response.json({ error: "DB update failed" }, { status: 500 });
    }

    return Response.json({ ok: true, membership });
  } catch (err) {
    console.error("fulfill-membership error:", err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
