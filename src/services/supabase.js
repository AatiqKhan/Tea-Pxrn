import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nbxgeekxkelpbudaxoma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ieGdlZWt4a2VscGJ1ZGF4b21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MjAxMTEsImV4cCI6MjA0ODI5NjExMX0.YoPNz75jBcQqqsB0fsEEkMVsiH6ZoUpIul19QGRTEXI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
