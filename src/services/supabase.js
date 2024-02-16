import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zsohrkvvrvnxwxbhedoj.supabase.co";
const supabaseKey = import.meta.env.VITE_supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
