document.documentElement.classList.add('auth-pending');
const AUTO_APPROVED_DOMAINS=['axis-company.jp','shibuya-ad.com'];
const isAutoApproved=email=>{const normalized=(email||'').trim().toLowerCase();return AUTO_APPROVED_DOMAINS.some(domain=>normalized.endsWith('@'+domain));};
const cfg=window.APP_CONFIG||{};const configured=cfg.supabaseUrl&&cfg.supabaseAnonKey&&!cfg.supabaseUrl.includes('YOUR-');
if(!configured){location.replace('access.html?setup=1');}
else{
  const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';script.onload=async()=>{const sb=window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey);const {data:{session}}=await sb.auth.getSession();if(!session){location.replace('access.html');return}if(isAutoApproved(session.user.email)){document.documentElement.classList.remove('auth-pending');return}const {data,error}=await sb.from('access_requests').select('status').eq('email',session.user.email).maybeSingle();if(error||!data||data.status!=='approved'){location.replace('access.html');return}document.documentElement.classList.remove('auth-pending');};document.head.appendChild(script);
}
