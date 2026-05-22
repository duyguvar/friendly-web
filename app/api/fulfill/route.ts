import Stripe from "stripe";
import { createAdminClient } from "../../../lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { session_id } = await req.json();
    if (!session_id) return Response.json({ error: "Missing session_id" }, { status: 400 });

    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid") {
      return Response.json({ error: "Payment not completed" }, { status: 402 });
    }

    if (session.metadata?.fulfilled === "true") {
      return Response.json({ ok: true, already: true, credits: Number(session.metadata.credits) });
    }

    const userId = session.metadata?.user_id;
    const credits = Number(session.metadata?.credits);

    if (!userId || !credits) {
      return Response.json({ error: "Invalid session metadata" }, { status: 400 });
    }

    // Mark fulfilled before adding credits to prevent double-processing
    await stripe.checkout.sessions.update(session_id, {
      metadata: { ...session.metadata, fulfilled: "true" },
    } as Parameters<typeof stripe.checkout.sessions.update>[1]);

    const supabase = createAdminClient();
    const { error } = await supabase.rpc("add_credits", { user_id: userId, amount: credits });

    if (error) {
      console.error("add_credits error:", error);
      return Response.json({ error: "Failed to add credits" }, { status: 500 });
    }

    return Response.json({ ok: true, credits });
  } catch (err) {
    console.error("fulfill error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
