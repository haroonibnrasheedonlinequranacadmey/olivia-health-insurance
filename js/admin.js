async function requireAdmin(){const sb=await initSupabase();if(!sb)return null;const {data}=await sb.auth.getSession();if(!data.session){location.href="login.html";return null}return sb}
async function logoutAdmin(){const sb=await initSupabase();if(sb)await sb.auth.signOut();location.href="login.html"}
