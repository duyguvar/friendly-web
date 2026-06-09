import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { createAdminClient } from "../../../lib/supabase";

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

    const admin = createAdminClient();
    const { data: profile } = await admin
      .from("users")
      .select("stripe_customer_id")
      .eq("id", user.id)
      .single();

    if (!profile?.stripe_customer_id) {
      return Response.json({ error: "No subscription found" }, { status: 404 });
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${BASE_URL}/membership`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("create-portal-session error:", err);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
