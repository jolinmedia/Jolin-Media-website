import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Public, read-only client — safe to use in Server Components. All content tables are public-read via RLS. */
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
