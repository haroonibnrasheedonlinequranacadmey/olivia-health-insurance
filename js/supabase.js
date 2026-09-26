window.SUPABASE_URL="https://fsuogolbyygnlslfselq.supabase.co";
window.SUPABASE_ANON_KEY="sb_publishable_-SH51qF2OgK-tmefLRUjNQ_a3BfWgGX";
window.supabaseClient=null;
async function initSupabase(){
  if(!window.SUPABASE_URL || window.SUPABASE_URL.startsWith("YOUR_")) return null;
  if(!window.supabaseClient){
    const {createClient}=window.supabase;
    window.supabaseClient=createClient(window.SUPABASE_URL,window.SUPABASE_ANON_KEY);
  }
  return window.supabaseClient;
}
