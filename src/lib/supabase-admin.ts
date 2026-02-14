import { createClient } from "@supabase/supabase-js";

// Service-role client bypasses RLS — use ONLY on server-side admin routes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Create client with placeholders during build, will work at runtime with proper env vars
export const supabaseAdmin = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseServiceKey || "placeholder-key"
);
