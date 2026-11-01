const menu=document.getElementById('menu'),pages=document.getElementById('pages');
for(const t of TOOLS){const btn=document.createElement('button');btn.className='tile';btn.innerHTML=`<b>${t.icon}</b>${t.name}<small>${t.description}</small>`;btn.onclick=()=>openTool(t.id);menu.appendChild(btn)}
function openTool(id){const t=TOOLS.find(x=>x.id===id);if(!t)return;menu.style.display='none';pages.innerHTML=`<button class="back" id="back">← ツール一覧</button><section class="active"><h2>${t.name}</h2>${t.render()}</section>`;document.getElementById('back').onclick=()=>{pages.innerHTML='';menu.style.display='grid';history.replaceState(null,'',location.pathname)};history.replaceState(null,'','#'+id);t.init()}
const initial=location.hash.slice(1);if(TOOLS.some(t=>t.id===initial))openTool(initial);
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
