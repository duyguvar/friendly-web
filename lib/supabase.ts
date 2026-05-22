import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nbwftvqjablkactntjmr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_I4LZj-lvWHON8N4kORNG3g_vWqKH3sv";

export function createClient() {
  return createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export function createAdminClient() {
  return createSupabaseClient(
    SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
