
(function(){
const A=window.__A||{av:{},full:{}};
const $=s=>document.querySelector(s), root=$("#root");
const esc=x=>String(x==null?"":x).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const LOGIN=st=>"https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=2012262802&redirect_uri="+encodeURIComponent(BASE+"line-admin-login-cb")+"&state="+encodeURIComponent(st+Math.random().toString(36).slice(2,9))+"&scope=profile%20openid";

/* ===== 登入 ===== */
const AVS=["tr","cs","fb","rp","al","vd","gc"];
const cluster=()=>`<div class="clu"><div class="clr">${[["tr",70],["cs",96],["fb",70]].map(([k,s],i)=>`<img src="${A.av[k]||""}" style="width:${s}px;height:${s}px;animation-delay:${i*.4}s" alt="">`).join("")}</div><div class="clr">${[["rp",50],["gc",50],["ly",50],["al",50],["vd",50]].map(([k,s],i)=>`<img src="${A.av[k]||""}" style="width:${s}px;height:${s}px;animation-delay:${i*.3+.2}s" alt="">`).join("")}</div></div>`;
const SPLASH=false;
if(!D.user||SPLASH){
  const L=window.__L||{sq:{}};
  const PARTY=[["cs","客服專員","#1f9e98"],["tr","情報員","#3b7fd9"],["fb","文案小編","#e2604c"],["rp","報告助理","#c9962f"],["al","通報專員","#d4513f"],["kb","庫存小妹","#7b63e0"],["vd","影音小編","#6a73b8"],["gc","遺傳師預約","#2f8f57"],["ly","領用小幫手","#b5677a"]];
  const POSE={m:{kb:[14,51.5,17],gc:[38,50.5,17],ly:[62,50.5,17],vd:[86,51.5,17],tr:[14,62,21],al:[50,61,21],rp:[81,62,21],fb:[34,74,25],cs:[69,74,25]},d:{kb:[10,66,25],gc:[27,65,25],ly:[73,65,25],vd:[90,66,25],tr:[17,77,30],al:[50,75,30],rp:[83,77,30],fb:[33,91,35],cs:[67,91,35]}};
  const poster=`<div class="lg-poster" aria-hidden="true">${PARTY.map(([k,n,c],i)=>{const m=POSE.m[k],d=POSE.d[k];return `<div class="hero h-${k}" style="--mx:${m[0]}%;--my:${m[1]}%;--mh:${m[2]}vh;--dx:${d[0]}%;--dy:${d[1]}%;--dh:${d[2]}vh;--c:${c};--i:${i};--z:${Math.round(m[1])}"><img src="${L.sq[k]||""}" alt=""><span class="tag">${esc(n)}</span></div>`;}).join("")}</div>`;
  const LINE_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s6-3.5 8.2-6.1C21.6 14.2 22 12.7 22 11c0-4.4-4.5-8-10-8Z"/></svg>';
  const lg=document.createElement("section");lg.id="login";lg.className="game s1";
  lg.style.cssText=`--scd:url(${L.scd||""});--scm:url(${L.scm||""});--hlg:url(${L.hlg||""})`;
  lg.innerHTML=`<div class="lg-key" aria-hidden="true"></div>${poster}
  <div class="lg-fx" aria-hidden="true">${Array.from({length:14},(_,i)=>`<i style="--x:${(i*37)%100}%;--d:${(i%7)*-1.3}s;--s:${4+(i%4)*2}px"></i>`).join("")}</div>
  <div class="lg-wrap"><div class="lg-col"><div class="lg-hero"><div class="lg-title"><span class="lg-halo"><img src="${L.hlg||""}" alt="華聯"></span><div class="lg-name"><b>華聯</b><span>A I　辦 公 室</span></div></div>
  <p class="lg-tag">華聯小隊　出動！</p><p class="lg-copy">九位 AI 助理 一起上工<br>你只要下指令 事情自動做完</p><div class="lg-live"><i></i><b>9/9</b>全員到齊　等你下指令</div></div>
  <div class="lg-card" id="lgCard"></div></div></div>`;
  root.appendChild(lg);
  const COL=["#1f9e98","#c9962f","#7b63e0","#3b7fd9","#e2604c","#2f8f57","#b5677a","#6a73b8"];
  const S=(D.sales||[]).map(n=>({full:n,en:n.split(" ").pop()}));
  const setStep=n=>{lg.classList.remove("s1","s2","s3");lg.classList.add("s"+n);};
  const topbar=(n,back)=>`<div class="lg-top">${back?`<button class="lg-bk" id="lgBk" aria-label="返回">‹</button>`:"<span></span>"}<div class="lg-prog">${[1,2,3].map(i=>`<i class="${i<=n?"on":""}"></i>`).join("")}</div><span class="lg-pn">${n}/3</span></div>`;
  function step1(){setStep(1);$("#lgCard").innerHTML=`<div class="lg-c1"><p class="lg-kick">歡迎回來</p><h2>登入辦公室</h2></div>
    <div class="lg-cta">${D.lerr?`<p class="lg-err">${esc(D.lerr)}</p>`:""}<a class="lg-line" href="${LOGIN("app..")}">${LINE_SVG}<span>LINE 登入　加入小隊</span></a>
    </div>`;
    const f=$("#lgFirst");if(f)f.onclick=step2;}
  function step2(){setStep(2);let pick=null;$("#lgCard").innerHTML=`${topbar(2,true)}<div class="lg-c2"><h2 class="c">你是哪一位</h2>
    <div class="lg-names"><p class="lg-g">1F 業務</p><div class="lg-list">${S.map((s,i)=>`<button data-i="${i}"><span class="ini" style="--h:${COL[i%8]}">${esc(s.en[0])}</span><b>${esc(s.en)}</b><small>1F 業務</small><i class="rd"></i></button>`).join("")}</div></div></div>
    <div class="lg-cta"><a class="lg-go" id="lgGo" aria-disabled="true">先選自己的名字</a><button class="lg-back" id="lgBack">回上一步</button></div>`;
    $("#lgCard").querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{$("#lgCard").querySelectorAll("[data-i]").forEach(x=>x.classList.toggle("on",x===b));const s=S[+b.dataset.i];const g=$("#lgGo");g.removeAttribute("aria-disabled");g.textContent="我是 "+s.en+" 用 LINE 進辦公室";g.href=LOGIN("app."+s.full+".");});
    $("#lgBack").onclick=step1;$("#lgBk").onclick=step1;}
  step1();
  if(SPLASH){document.body.appendChild(lg);lg.style.position="fixed";lg.style.inset="0";lg.style.zIndex="200";lg.style.transition="opacity .45s";const card=$("#lgCard");card.innerHTML=`<div class="lg-cta"><button class="lg-line lg-enter" id="lgEnter"><span>進入辦公室</span></button></div>`;
    const t0=Date.now();let done=0;const bye=()=>{if(done)return;done=1;lg.style.opacity="0";lg.style.pointerEvents="none";setTimeout(()=>lg.remove(),500);};
    $("#lgEnter").onclick=bye;(window.__spP||Promise.resolve()).then(()=>setTimeout(bye,Math.max(0,2600-(Date.now()-t0))));setTimeout(bye,7000);}
  else return;
}
/* 歡迎畫面 */
if(D.welcome){const nm0=String((D.user||{}).n||"").split(" ").pop();const h=new Date().getHours();const hi=h<11?"早安":h<18?"午安":"晚安";const fl=D.u2?"2F 企劃":"1F 業務";
  const wl=document.createElement("div");wl.className="wl";wl.innerHTML=`<div class="pk-top"><span></span><div class="pk-bar"><i class="on"></i><i class="on"></i><i class="on"></i></div><span>3/3</span></div>${cluster()}<p class="pk-kick c">${fl}</p><h2>${esc(nm0)} ${hi}</h2><div class="wl-bar"><i></i></div>`;
  document.body.appendChild(wl);setTimeout(()=>wl.classList.add("out"),1900);setTimeout(()=>wl.remove(),2500);}
/* ===== 資料 ===== */
const SALES=(D.user||{}).r==="sales"&&!D.u2;const U2=!!D.u2&&!SALES;let DATA=D.data||{}, B=DATA.bots||{}, W=DATA.week||{};
const L1=D.links1||{}, L2=D.links2||{};
const NAME={1:{cs:"客服小妹",gc:"遺傳師預約",ly:"領用小幫手",rp:"報告助理",bm:"業務主管",tr:"情報員"},2:{gc:"遺傳諮詢",ly:"領用小妹",kb:"庫存小妹",tr:"情報員",al:"通報專員",vd:"影音小編",cs:"客服專員",fb:"文案小編",rp:"報告助理",dr:"王博"}};
const todo=[];
const RED={ldts:(W.ldts||[]).filter(x=>x.red),tasks:(W.tasks||[]).filter(x=>x.red),dm:((W.dm||{}).items||[])};
if(U2){Object.entries(B).forEach(([k,b])=>{if(b.todayErr>0)todo.push({t:NAME[2][k]||k,s:"今天 "+b.todayErr+" 次沒成功",u:(L2[k]||[])[0]?.[1]});});
  RED.ldts.forEach(x=>todo.push({t:x.t,s:x.s,u:(L2.rp||[])[0]?.[1]}));
  RED.tasks.forEach(x=>todo.push({t:x.t,s:x.s,u:(L2.rp||[]).find(l=>l[0]==="工作便利貼")?.[1]}));
  if(((W.dm||{}).count||RED.dm.length))todo.push({t:"DM 庫存不足 "+((W.dm||{}).count||RED.dm.length)+" 項",s:"補貨",u:(L2.kb||[])[0]?.[1]});}
else if(B.cs&&B.cs.todayErr>0) todo.push({t:"客服小妹",s:"今天 "+B.cs.todayErr+" 次沒成功",u:(L1.cs||[])[0]?.[1]});
/* ===== 世界座標 每層一張直式圖 1440x2560 ===== */
const map=document.createElement("div");
const IOS=/iPhone|iPad|iPod/.test(navigator.userAgent)||(/Safari/.test(navigator.userAgent)&&!/Chrome|CriOS|Android|FxiOS|Edg/.test(navigator.userAgent));const DK=()=>innerWidth>=900&&innerWidth>innerHeight;const PORT=()=>!DK();
let OFF={2:[0,0],1:[0,2620]};
function layoutMode(){if(DK()){OFF={2:[0,0],1:[0,0]};return;}OFF=PORT()?{2:[0,0],1:[0,2620]}:{2:[0,0],1:[1520,0]};}
layoutMode();
const lq=(q,u,v)=>{const tx=q[0][0]+(q[1][0]-q[0][0])*u,ty=q[0][1]+(q[1][1]-q[0][1])*u,bx=q[3][0]+(q[2][0]-q[3][0])*u,by=q[3][1]+(q[2][1]-q[3][1])*u;return[tx+(bx-tx)*v,ty+(by-ty)*v];};
const Q2=[[560,668],[1158,717],[941,1971],[110,1800]], Q1=[[512,655],[1146,670],[1095,1990],[157,1908]];
const SZ=236;
const P=[];
const DRP=[290,1900];const S2=[["dr",.02,.03,1],["gc",.2,.18],["ly",.52,.18],["kb",.84,.18],["al",.36,.48],["vd",.72,.48],["cs",.22,.74],["fb",.53,.74],["rp",.84,.74]];
const S1=[["bm",.1,.04,1],["gc",.3,.27],["ly",.76,.27],["cs",.3,.56],["rp",.76,.56],["tr",.53,.85]];
S2.forEach(([k,u,v,big])=>P.push({k,f:2,q:Q2,uv:[u,v],lp:k==="dr"?DRP:lq(Q2,u,v),sz:k==="vd"?SZ*1.4:k==="al"?SZ*1.45:big?SZ*1.85:SZ*1.3,stand:big,y0:big?.95:0}));
S1.forEach(([k,u,v,big])=>P.push({k,f:1,q:Q1,uv:[u,v],lp:lq(Q1,u,v),sz:big?SZ*1.75:SZ*1.62,stand:big}));
const DESK=DK();const DKP=false;
if(DESK){OFF={2:[0,0],1:[0,0]};P.length=0;const QD2=[[720,410],[1465,488],[1295,938],[410,800]],QD1=[[680,1183],[1398,1250],[1285,1722],[424,1582]];
  [["gc","ly","kb"],["al","vd"],["cs","fb","rp"]].forEach((r,ri)=>r.forEach((k,ci)=>{const us=r.length===2?[.37,.69]:[.2,.53,.86];const vs=[.12,.5,.9];P.push({k,f:2,q:QD2,uv:[us[ci],vs[ri]],lp:lq(QD2,us[ci],vs[ri]),sz:k==="vd"?235:195});}));
  P.push({k:"dr",f:2,lp:[330,800],sz:290,stand:1,y0:.95});
  [["gc","ly","tr"],["cs","rp"]].forEach((r,ri)=>r.forEach((k,ci)=>{const us=r.length===2?[.36,.7]:[.22,.53,.84];P.push({k,f:1,q:QD1,uv:[us[ci],[.32,.82][ri]],lp:lq(QD1,us[ci],[.32,.82][ri]),sz:262});}));
  P.push({k:"bm",f:1,lp:[372,1475],sz:315,stand:1});}
if(SALES){for(let i=P.length-1;i>=0;i--)if(P[i].f===2)P.splice(i,1);}
const COF=DESK?{2:[560,700],1:[600,1140]}:{2:[600,760],1:[560,690]};
const pos=w=>[w.lp[0]+OFF[w.f][0],w.lp[1]+OFF[w.f][1]];
const nm=w=>NAME[w.f][w.k];
function state(w){if(w.f===2&&U2){if(w.k==="al"&&todo.length)return"err";if(w.k==="rp"&&RED.ldts.length)return"err";if(w.k==="kb"&&((W.dm||{}).count||RED.dm.length))return"err";}const b=B[w.k];if(w.f===1&&w.k!=="cs")return"work";if(!b)return"work";if(b.todayErr>0)return"err";return b.today>0||b.recent>0?"work":"idle";}
const LINES={gc:["遺傳諮詢申請交給我","104 的申請我來整理","有新申請我會登記"],ly:["DM 領用找我登記","掃一下條碼就好","要領什麼跟我說"],cs:["LINE 私訊交給我","需要真人時我會轉給同事","今天也很多人來問喔"],fb:["今天的貼文我來寫","審核按 OK 我就發出去","圖和文案都準備好了"],rp:["週一早上準時寄週報","報表交給我","特管進度我都記著"],al:["有異常我第一個通知","我隨時盯著","交給我顧"],tr:["今天有新情報","同業動態我都盯著","早上準時送早報"],dr:["本週目標大家加油","有問題來白板這邊討論","大家做得很好"],bm:["這個月一起衝目標","有 case 馬上跟我說","大家辛苦了"],kb:["DM 庫存我在盯","庫存不足會亮紅燈","補貨清單我來整理"],vd:["今天要拍什麼","分鏡畫好了 來看看","短影音交給我"]};
const L1N={gc:["遺傳師預約找我","104 的申請我來整理"],ly:["要領 DM 找我","掃一下條碼就好"],rp:["報告的事找我","報表交給我"]};
const GOALS={dr:["LINE 每天 50 則","FB 一三五發文","特管週報 週一寄出","情報日報 每天"],bm:["本月業績目標 1500 萬"]};
const pick=a=>a[Math.floor(Math.random()*a.length)];
const NUM={cs:n=>`今天回了 ${n} 則 LINE`,tr:n=>`今天整理了 ${n} 則情報`,fb:n=>`今天發了 ${n} 篇`};
const line=w=>{const n=(B[w.k]||{}).today||0;if(w.f===2&&U2){if(w.k==="al"&&todo.length)return `有 ${todo.length} 項需要處理`;if(w.k==="rp"&&RED.ldts.length)return `特管有 ${RED.ldts.length} 件要注意`;if(w.k==="kb"&&((W.dm||{}).count||RED.dm.length))return `DM 有 ${((W.dm||{}).count||RED.dm.length)} 項庫存不足`;}if(NUM[w.k]&&n&&(w.f===2||w.k==="cs")&&Math.random()<.6)return NUM[w.k](n);const a=(w.f===1&&L1N[w.k])||LINES[w.k];return a?pick(a):"";};

/* ===== 畫面 ===== */
const nErr=todo.length;
root.innerHTML=`<div id="map"><svg id="st" preserveAspectRatio="xMidYMid slice"><g id="rooms"></g><g id="ppl"></g><g id="over"></g></svg></div>
<aside id="roster"></aside><div id="hud"><button class="homeb hb-m" data-home aria-label="回主頁"><svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5M5.5 9.8V20h4.5v-5.5h4V20h4.5V9.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg></button><div class="brand"><b>華聯小隊</b><span id="upd"></span></div><button class="musb" data-mus aria-label="音樂"><svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="6.5" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button><button class="menu" id="pill" aria-label="選單"><span></span><span></span><span></span>${U2&&nErr?`<b>${nErr}</b>`:""}</button></div><div id="mnu"><div class="mi"></div></div><div id="vw"><div class="vw-bar"><button class="homeb" id="vwh" aria-label="回辦公室"><svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5M5.5 9.8V20h4.5v-5.5h4V20h4.5V9.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg></button><b id="vwt"></b><button class="vw-x" id="vwx">回辦公室</button></div><iframe id="vwf" title="後台"></iframe></div>
<div id="elevator" ${SALES?'style="display:none"':""}><button data-f="2">2F${U2?"":'<span class="lock"></span>'}</button><button data-f="1">1F</button></div>
<button class="fit" id="fit">⤢</button><div id="ticker" style="display:none"><span class="t" id="tk"></span></div>
<div id="sheet"></div>
<div id="gate"><div class="g-inner"><p class="g-t">2F 企劃辦公室</p><p class="g-s" id="per">${D.pinErr?"密碼不對 再試一次":"請輸入門禁密碼"}</p><div class="dots" id="dots">${"<i></i>".repeat(6)}</div>
<div class="pad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button data-n="${n}">${n}</button>`).join("")}<button class="x" data-n="b">刪除</button><button data-n="0">0</button><button class="ok" data-n="ok">確認</button></div><button class="gx" data-n="x">取消</button></div></div>
<div id="report"></div><div class="ptr" id="ptr"></div>`;
const tw=t=>{const d=new Date(t);return (d.getMonth()+1)+"/"+d.getDate()+" "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");};
const hm=t=>{const d=new Date(t);return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");};
if(DATA.asOf)$("#upd").textContent=tw(DATA.asOf)+" 更新";
const NS="http://www.w3.org/2000/svg",st=$("#st"),MAP=$("#map");
const mk=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e;};

let bgFix=0;function rooms(){const need=DESK?"bg":"f1";if(!A[need]&&!bgFix){bgFix=1;const s=document.createElement("script");s.src=AS+(DESK?"bgd":"bgm")+".js?v=16";s.onerror=()=>{bgFix=0;setTimeout(rooms,1500);};s.onload=()=>{Object.assign(A,window.__A||{});A.av=A.av||{};rooms();people();runAnim&&0;try{roster();}catch(e){}try{if(DESK)openRep();}catch(e){}};document.head.appendChild(s);}const g=$("#rooms");g.innerHTML="";const sign=(x,y,r,s,t)=>{const e=mk("text",{x,y,transform:`rotate(${r} ${x} ${y})`,"text-anchor":"middle","dominant-baseline":"central","font-size":s,"font-weight":800,"letter-spacing":s*.35,fill:"#f2dfb4",style:"pointer-events:none;paint-order:stroke","stroke":"rgba(20,30,45,.35)","stroke-width":2},g);e.textContent=t;};if(DESK){mk("image",{href:A.bg||"",x:0,y:0,width:1920,height:1920},g);sign(1080,240,5.6,48,"企劃部");sign(1000,1060,5.8,46,"業務部");const bd=mk("rect",{x:840,y:180,width:520,height:150,fill:"rgba(0,0,0,0)",class:"who"},g);bd.onclick=()=>{if(moved)return;if(U2)openRep();else gate();};return;}[2,1].forEach(f=>{const [ox,oy]=OFF[f];mk("image",{href:A["f"+f]||"",x:ox,y:oy,width:1440,height:2560},g);if(f===2)sign(ox+831,oy+486,2,62,"企劃部");else sign(ox+842,oy+437,.6,50,"業務部");
  const bd=mk("rect",{x:ox+(f===2?665:625),y:oy+(f===2?405:370),width:f===2?385:400,height:f===2?140:125,fill:"rgba(0,0,0,0)",class:"who"},g);
  bd.onclick=()=>{if(moved)return;if(f===2){if(U2)openRep();else gate();}};});}

/* 角色 */
const clips=[];
function sheet(g,src,x,y,sz,cols,n,FR){const fr=FR||170,k=sz/fr,id="c"+Math.random().toString(36).slice(2);
  const t=mk("g",{transform:`translate(${x} ${y}) scale(${k})`},g);const cp=mk("clipPath",{id},t);mk("rect",{width:fr,height:fr},cp);
  const ig=mk("g",{"clip-path":`url(#${id})`},t);const im=mk("image",{href:src,width:fr*cols,height:fr*Math.ceil(n/cols)},ig);
  const c={f:Math.floor(Math.random()*n),n,cols,im,t,draw(){im.setAttribute("x",-(this.f%cols)*fr);im.setAttribute("y",-Math.floor(this.f/cols)*fr);}};c.draw();return c;}
function people(){const g=$("#ppl"),ov=$("#over");g.innerHTML="";ov.innerHTML="";clips.length=0;
  P.slice().sort((a,b)=>pos(a)[1]-pos(b)[1]).forEach(w=>{const [x,y]=pos(w),sz=w.sz,s=state(w);w.away=false;w.resting=0;w.clip=null;w.vid=null;
    const col=s==="err"?"#d4513f":s==="idle"?"#4f9a64":"#d29a3a";
    const gg=mk("g",{class:"who","data-i":P.indexOf(w)},g);w.g=gg;
    w.ring=mk("ellipse",{cx:x,cy:y-6,rx:sz*.34,ry:sz*.1,fill:col,class:"ring"+(s==="err"?" err":s==="idle"?" idle":""),style:"display:none"},gg);
    const body=mk("g",{},gg);w.body=body;
    if(w.k==="bm"){mk("image",{href:A.bm||"",x:x-sz/2,y:y-sz,width:sz,height:sz},body);}
    else{const drw=w.k==="dr"&&A.drw;const src=drw||(window.__SPR||{})[w.k+"_work"];const y0=w.y0||.93;w.rect=[x-sz/2,y-sz*y0,sz];
      const AN=DESK&&!IOS&&(window.__ANIM||{})[w.k+"_work"];if(AN){const fo=mk("foreignObject",{x:x-sz/2,y:y-sz*y0,width:sz,height:sz},body);const v=document.createElementNS("http://www.w3.org/1999/xhtml","video");v.src=AN;v.muted=true;v.loop=true;v.autoplay=true;v.playsInline=true;v.setAttribute("muted","");v.setAttribute("playsinline","");v.style.cssText="width:100%;height:100%;display:block";fo.appendChild(v);v.play&&v.play().catch(()=>{});w.vid=v;}else if(src){const c=drw?sheet(body,src,x-sz/2,y-sz*y0,sz,6,A.drwN||24,A.drwF||340):sheet(body,src,x-sz/2,y-sz*y0,sz,6,24,170);c.fl=w.f;c.ms=drw?166:125;clips.push(c);w.clip=c;}if(w.k==="dr"){const k=sz/260,bx=x-sz/2,by=y-sz*y0;const tg=mk("g",{transform:`translate(${bx+30*k} ${by+28*k}) scale(${k}) skewY(-1.5)`,style:"pointer-events:none","font-weight":800},body);
  const T=(tx,ty,s,f,t,a)=>{const e=mk("text",{x:tx,y:ty,"font-size":s,fill:f,"text-anchor":a||"start"},tg);e.textContent=t;};
  T(55,19,18,"#1e2b3d","本週目標","middle");[["LINE 50 則/天","#b4473a"],["FB 一三五發文","#2f6878"],["特管週報 週一","#8a6a2e"],["情報日報 每天","#1e2b3d"]].forEach(([t,f],i)=>T(2,41+i*17,12.5,f,"✓ "+t));}if(!src&&!AN){mk("image",{href:(A.full||{})[w.k]||"",x:x-sz/2,y:y-sz*y0,width:sz,height:sz},body);}}
    mk("rect",{x:x+sz*(w.stand?(w.k==="dr"?.1:.04):-.1),y:y-sz*(w.stand?.9:.74),width:sz*(w.stand?.3:.34),height:sz*(w.stand?.72:.58),fill:"rgba(0,0,0,0)",class:"hit"},gg);
    const TO=DESK?{vd:[46,34],dr:[92,10]}:{dr:[125,105]},to=TO[w.k]||[0,0],top=(w.stand?y-sz*.98:y-sz*.9)+to[1], cx=(w.stand?x+30:x+8)+to[0];w.top=[cx,top];
    if(false){const bb=mk("g",{class:"bang"},ov);mk("circle",{cx,cy:top-40,r:30,fill:"#e04848",stroke:"#fff","stroke-width":6},bb);mk("text",{x:cx,y:top-26,"text-anchor":"middle","font-size":42,"font-weight":900,fill:"#fff"},bb).textContent="!";}
    const t=nm(w),fs=DESK?24:44,tw2=t.length*fs+28,ty=top-fs-(DESK?10:22),ng=mk("g",{class:"nm",style:"pointer-events:none"},ov);w.ng=ng;mk("rect",{x:cx-tw2/2,y:ty,width:tw2,height:fs+16,rx:(fs+16)/2},ng);
    mk("text",{x:cx,y:ty+fs+3,"text-anchor":"middle","font-size":fs},ng).textContent=t;});
  document.querySelectorAll("#ppl .who").forEach(g=>g.onclick=()=>{if(moved)return;focusWho(P[+g.dataset.i]);});}
rooms();people();
let animT=null;function runAnim(){clearInterval(animT);animT=setInterval(()=>{if(document.hidden)return;const now=performance.now();clips.forEach(c=>{if(!vis(c.fl))return;if(now-(c.lt||0)<(c.ms||125)-5)return;c.lt=now;c.f=(c.f+1)%c.n;c.draw();if(c.f===0&&c.done)c.done();});},41);}
(window.__spP||Promise.resolve()).then(()=>{setTimeout(()=>loadIC(),2500);if(DK()&&!IOS&&!window.__ANIM&&!window.__SPR){const s=document.createElement("script");s.src=AS+"sprw.js?v=3";s.onload=()=>{people();runAnim();};document.head.appendChild(s);}people();runAnim();});

/* ===== 鏡頭 ===== */
let vb=[0,0,1440,2560],curF=0;
const AR=()=>MAP.clientHeight/MAP.clientWidth;
function floorVB(f){if(DKP){const [ox,oy]=OFF[f],ar=AR();let w=1440,h=w*ar;if(h>2300){h=2300;w=h/ar;}return[ox+720-w/2,oy+(f===2?1300:1330)-h/2,w,h];}if(DESK&&SALES&&f===1){const ar=AR();let w=1920,h=w*ar;if(h>1000){h=1000;w=h/ar;}return[960-w/2,Math.min(1920-h,1440-h/2),w,h];}if(DESK){const ar=AR();let w=ar<0.62?Math.min(1800,1000/ar):1400,h=w*ar;if(h>1920){h=1920;w=h/ar;}const y0=f===2?Math.max(0,520-h/2):Math.min(1920-h,1420-h/2);return[(ar<0.62?980:900)-w/2,y0,w,h];}const [ox,oy]=OFF[f],ar=AR();let w,h;if(ar>=1.6){w=1220;h=w*ar;}else{h=2560;w=h/ar;if(w>1440){w=1440;h=w*ar;}}return[ox+(ar>=1.6?680:720)-w/2,oy+(ar>=1.6?1330:1280)-h/2,w,h];}
function allVB(){if(DESK){const ar=AR();let h=1920,w=h/ar;if(w<1920){w=1920;h=w*ar;}return[960-w/2,960-h/2,w,h];}const ar=AR();const W0=PORT()?1440:2960,H0=PORT()?5180:2560;let w=W0,h=w*ar;if(h<H0){h=H0;w=h/ar;}return[W0/2-w/2,H0/2-h/2,w,h];}
const setVB=v=>{vb=v;st.setAttribute("viewBox",v.map(n=>n.toFixed(1)).join(" "));const fw=floorVB(curF||1)[2];$("#fit").classList.toggle("on",v[2]<fw*.92);
  P.forEach(w=>{if(w.ng)w.ng.classList.toggle("big",v[2]<fw*.6);});};
const vis=f=>{if(DESK){const y0=f===2?0:900,y1=f===2?960:1920;return !(y0>vb[1]+vb[3]||y1<vb[1]);}const [ox,oy]=OFF[f];return !(ox>vb[0]+vb[2]||ox+1440<vb[0]||oy>vb[1]+vb[3]||oy+2560<vb[1]);};
function fly(to,ms){const a=vb.slice(),t0=performance.now();return new Promise(r=>{(function f(t){let k=Math.min(1,(t-t0)/ms);k=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;setVB(a.map((x,i)=>x+(to[i]-x)*k));if(k<1)requestAnimationFrame(f);else r();})(t0);});}
async function floor(f,instant){document.body.classList.toggle("f1",f!==2);if(f===2&&!U2){gate();return;}closeSay();document.querySelectorAll("#elevator button").forEach(b=>b.classList.toggle("on",+b.dataset.f===f));
  const to=floorVB(f);if(instant||!DESK)setVB(to);else await fly(to,650);curF=f;bi=0;roster();}
document.querySelectorAll("#elevator button").forEach(b=>b.onclick=()=>floor(+b.dataset.f));
$("#fit").onclick=()=>{closeSay();fly(floorVB(curF||1),400);};
addEventListener("resize",()=>{layoutMode();rooms();people();setVB(floorVB(curF||1));});

/* ===== 泡泡 ===== */
let bi=0,bubT=null;function bubbles(){clearInterval(bubT);const show=()=>{const ov=$("#over");ov.querySelectorAll(".bub").forEach(b=>b.remove());
  const list=P.filter(w=>w.f===curF&&!w.away&&(w.f===1||U2));if(!list.length)return;const w=list[bi++%list.length];const t=line(w);if(!t)return;
  const [cx,top]=w.top,fs=30,tw2=t.length*fs+44,g=mk("g",{class:"bub"},ov),by=top-fs*2-46;
  mk("rect",{x:cx-tw2/2,y:by,width:tw2,height:fs*1.9,rx:fs*.95},g);mk("path",{d:`M${cx-14} ${by+fs*1.9-1} l14 20 l14 -20z`},g);
  mk("text",{x:cx,y:by+fs*1.28,"text-anchor":"middle","font-size":fs},g).textContent=t;requestAnimationFrame(()=>g.classList.add("on"));
  setTimeout(()=>g.classList.remove("on"),3200);const tk=$("#tk");tk.classList.add("out");setTimeout(()=>{tk.innerHTML=`<b>${esc(nm(w))}</b> ${esc(t)}`;tk.classList.remove("out");},300);};show();bubT=setInterval(()=>{if(!document.hidden)show();},4300);}

/* ===== 點角色 ===== */
const sheetEl=$("#sheet");function closeSay(){sheetEl.classList.remove("on");P.forEach(w=>w.ng&&w.ng.classList.remove("big"));}
const STN={work:["工作中","var(--work)"],idle:["待命","var(--ok)"],err:["需要處理","var(--err)"]};
async function focusWho(w){if(w.f===2&&!U2){gate();return;}{const L0=((w.f===1?L1:L2)[w.k])||[];const pick=w.k==="cs"&&w.f===1&&!SALES&&(D.allSales||[]).length;if(L0.length===1&&!pick){openURL(L0[0][1],L0[0][0]);return;}}if(curF!==w.f&&!DESK)await floor(w.f);
  if(w.ng)w.ng.classList.add("big");
  const s=state(w),b=B[w.k]||{},L=((w.f===1?L1:L2)[w.k])||[],G=GOALS[w.k];
  const stat=(w.f===2||w.k==="cs")&&B[w.k]?`<div><b>${b.today||0}<small>次</small></b><span>今天</span></div><div><b>${b.week||0}<small>次</small></b><span>本週</span></div>`:"";
  const own=w.f===2&&U2?(w.k==="rp"?RED.ldts.map(x=>({t:x.t,s:x.s,u:(L2.rp||[])[0]?.[1]})):w.k==="dr"?RED.tasks.map(x=>({t:x.t,s:x.s,u:(L2.rp||[]).find(l=>l[0]==="工作便利貼")?.[1]})):w.k==="kb"?RED.dm.slice(0,12).map(x=>({t:x.name,s:x.status||("剩 "+x.stock),u:(L2.kb||[])[0]?.[1]})):[]):[];
  const ownH=own.map(x=>`<li><a href="${esc(x.u||"#")}" target="_blank" rel="noopener">${esc(x.t)}</a><small>${esc(x.s||"")}</small></li>`).join("");
  const lst=ownH&&w.k!=="dr"?ownH:w.k==="al"&&w.f===2&&U2&&todo.length?todo.map(x=>`<li><a href="${esc(x.u||"#")}" target="_blank" rel="noopener">${esc(x.t)}</a><small>${esc(x.s||"")}</small></li>`).join(""):"";
  sheetEl.innerHTML=`<div class="grab"></div><button class="shx" id="shx">✕</button><div class="whoh"><h2>${esc(nm(w))}</h2><span class="stt" style="--c:${STN[s][1]}">${STN[s][0]}</span></div><p class="sdesc">${esc((DESC[w.f]||{})[w.k]||"")}</p><ul class="role">${((ROLE[w.f]||{})[w.k]||[]).map(t=>`<li>${esc(t)}</li>`).join("")}</ul><p class="line">${esc(line(w))}</p>
  <div class="stat">${stat}</div><ul class="goals">${lst}</ul><div class="acts">${L.map(l=>`<a href="${esc(l[1])}" target="_blank" rel="noopener">${esc(l[0])}</a>`).join("")}${w.k==="dr"&&U2?`<a id="rp2">本週報表</a>`:""}</div>`;
  sheetEl.querySelectorAll(".line,.stat,.role").forEach(e=>e.remove());if(w.f===2&&!["kb","al","rp"].includes(w.k))sheetEl.querySelectorAll(".goals").forEach(e=>e.remove());
  if(w.k==="cs"&&w.f===1&&!SALES&&(D.allSales||[]).length){sheetEl.querySelectorAll(".line,.stat,.role").forEach(e=>e.remove());sheetEl.querySelector(".acts").innerHTML=D.allSales.map(n=>`<a href="${LOGIN("cs."+n+".")}">${esc(n.split(" ").pop())}</a>`).join("");}
  if(DESK){document.querySelectorAll(".ro-acc").forEach(x=>x.remove());const li=document.querySelector(`.ro-list li[data-i="${P.indexOf(w)}"]`);if(li){const ac=document.createElement("div");ac.className="ro-acc";ac.innerHTML=sheetEl.innerHTML;ac.querySelectorAll(".grab,.shx,.whoh,.sdesc").forEach(x=>x.remove());if(!ac.textContent.trim()){ac.innerHTML='<p class="sdesc">'+esc((DESC[w.f]||{})[w.k]||"")+'</p>';}ac.onclick=e=>e.stopPropagation();li.after(ac);document.querySelectorAll(".ro-list li").forEach(x=>x.classList.toggle("sel",x===li));ac.scrollIntoView({block:"nearest",behavior:"smooth"});const r3=ac.querySelector("#rp2");if(r3)r3.onclick=openRep;sheetEl.innerHTML="";return;}}
  sheetEl.classList.add("on");$("#shx").onclick=()=>{closeSay();};const r2=$("#rp2");if(r2)r2.onclick=openRep;}
sheetEl.addEventListener("click",e=>{if(e.target.classList.contains("grab")){closeSay();}});
const NM1={cs:"客服小妹",gc:"遺傳師預約",ly:"領用小幫手",rp:"報告助理"},NM2={cs:"客服專員",fb:"文案小編",rp:"報告助理",tr:"情報員",vd:"影音小編",kb:"庫存小妹",gc:"遺傳諮詢",ly:"領用小妹",dr:"王博"};
function loadIC(cb){if(window.__IC){cb&&cb();return;}if(window.__icL){window.__icL.push(cb);return;}window.__icL=[cb];const s=document.createElement("script");s.src=AS+"ic.js?v=1";s.onload=()=>{(window.__icL||[]).forEach(f=>f&&f());};document.head.appendChild(s);}
function menu(){if($("#mnu").classList.contains("on")){$("#mnu").classList.remove("on");return;}
  const ON2=U2&&curF===2;const f=(L,k,i)=>{const a=L[k]||[];if(typeof i==="string")return a.find(l=>l[0].indexOf(i)===0);return a[i||0];};const IT=[["cs","客服後台",U2?f(L2,"cs"):f(L1,"cs")],["csd","客服數據",U2&&f(L2,"cs","客服數據")],["gc","遺傳諮詢",f(L1,"gc")],["ly","領用申請",f(L1,"ly")],["rq","報告查詢",f(L1,"rp")],["kb","DM 庫存",U2&&f(L2,"kb")],["fb","發文審核",U2&&f(L2,"fb")],["fan","粉絲專頁",U2&&f(L2,"fb","華聯生技")],["ld","特管週報",U2&&f(L2,"rp","特管週報")],["tr","情報日報",f(L1,"tr")],["vd","影音後台",U2&&f(L2,"vd")],["wk","行銷週報",U2&&f(L2,"rp","行銷週報")]].filter(x=>x[2]&&(ON2||(U2?["cs","gc","ly","rq","tr"]:["cs","ly","rq"]).includes(x[0])));if(!ON2){const c=IT.find(x=>x[0]==="cs");if(c)c[2]=f(L1,"cs")||c[2];}
  const BG=!ON2?{}:{kb:U2?((W.dm||{}).count||RED.dm.length):0,ld:U2?RED.ldts.length:0};const IC=window.__IC||{};
  let h=`<div class="mtop"><b>功能選單</b><button class="mx" id="mx" aria-label="關閉">✕</button></div>`;
  if(ON2&&todo.length){const CL=["#d94a3d","#d9822b","#2f8f57","#3b6fd9"];h+=`<h4 class="red">需要處理 ${todo.length}</h4><div class="mcards">`+todo.map((x,i)=>`<a href="${esc(x.u||"#")}" style="--c:${CL[i%4]}"><small>需要處理</small><b>${esc(x.t)}</b><em>${esc(x.s||"")}</em></a>`).join("")+`</div>`;}
  h+=`<h4>全部功能</h4><div class="mgrid">`+IT.map(([k,t,l])=>`<a href="${esc(l[1])}"><span class="mic">${IC[k]?`<img src="${IC[k]||""}" alt="">`:""}${BG[k]?`<i>${BG[k]}</i>`:""}</span>${t}</a>`).join("")+`</div>`;
  if(ON2)h+=`<button class="mrep" id="mr">本週報表 ›</button>`;
  $("#mnu .mi").innerHTML=h;$("#mnu .mi").scrollTop=0;$("#mnu").classList.add("on");$("#mx").onclick=e=>{e.stopPropagation();$("#mnu").classList.remove("on");};const r=$("#mr");if(r)r.onclick=()=>{$("#mnu").classList.remove("on");openRep();};
  if(!window.__IC)loadIC(()=>{const I=window.__IC||{};document.querySelectorAll("#mnu .mgrid a").forEach((a,i)=>{const k=IT[i]&&IT[i][0];const s=a.querySelector(".mic");if(k&&I[k]&&!s.querySelector("img"))s.insertAdjacentHTML("afterbegin",`<img src="${I[k]||""}" alt="">`);});});}
$("#pill").onclick=menu;$("#mnu").onclick=e=>{if(e.target.id==="mnu"||e.target.closest("a[href]"))$("#mnu").classList.remove("on");};


/* ===== 座位上伸懶腰 喝咖啡 ===== */
const RK=["al","cs","fb","kb","rp","tr","vd","gc","ly"];
function rest(){setTimeout(rest,8000+Math.random()*10000);if(document.hidden)return;
  const cand=P.filter(w=>RK.includes(w.k)&&!w.resting&&(w.vid||w.clip)&&vis(w.f)&&(w.f===1||U2));if(!cand.length)return;
  const w=cand[Math.floor(Math.random()*cand.length)];w.resting=1;
  if(w.vid){const v=w.vid,fo=v.parentNode;const r=document.createElementNS("http://www.w3.org/1999/xhtml","video");r.muted=true;r.playsInline=true;r.setAttribute("muted","");r.setAttribute("playsinline","");r.preload="auto";r.style.cssText="width:100%;height:100%;display:none";
    const end=()=>{if(r.parentNode)r.remove();v.style.display="block";w.resting=0;};
    r.oncanplaythrough=()=>{r.oncanplaythrough=null;if(!fo.isConnected){w.resting=0;return;}v.style.display="none";r.style.display="block";r.play().catch(end);};
    r.onended=end;r.onerror=end;setTimeout(()=>{if(w.resting&&r.style.display==="none")end();},15000);
    r.src=AS+"r/"+w.k+".webm";fo.appendChild(r);return;}
  const c=w.clip,img=new Image();img.onload=()=>{if(!c.im.isConnected){w.resting=0;return;}
    const o={h:c.im.getAttribute("href"),wd:c.im.getAttribute("width"),ht:c.im.getAttribute("height"),n:c.n};
    c.im.setAttribute("href",img.src);c.im.setAttribute("width",170*6);c.im.setAttribute("height",170*6);c.n=32;c.f=0;c.draw();
    c.done=()=>{c.done=null;c.im.setAttribute("href",o.h);c.im.setAttribute("width",o.wd);c.im.setAttribute("height",o.ht);c.n=o.n;c.f=0;c.draw();w.resting=0;};};
  img.onerror=()=>{w.resting=0;};img.src=AS+"r/"+w.k+".webp";}
setTimeout(rest,6000);
/* ===== 走去喝咖啡 ===== */
let WK=null,walking=0;function loadWalk(){const s=document.createElement("script");s.src=AS+"walk.js?v=1";s.async=true;s.onload=()=>{WK=window.__WALK||null;if(WK)setTimeout(coffee,6000);};document.head.appendChild(s);}
function coffee(){const cand=P.filter(w=>WK[w.k]&&w.q&&(w.f===curF||(DESK&&!curF))&&!w.away&&state(w)!=="err"&&w.rect&&(w.f===1||U2)&&vis(w.f));
  if(!cand.length||document.hidden||walking){setTimeout(coffee,12000);return;}const w=cand[Math.floor(Math.random()*cand.length)],X=WK[w.k];w.away=true;walking=1;
  const [x0,y0,sz]=w.rect;w.body.style.display="none";
  const desk=mk("image",{href:X.desk,x:x0,y:y0,width:sz,height:sz},w.g);
  const wg=mk("g",{style:"pointer-events:none"},$("#ppl"));const inner=mk("g",{},wg);const ws=sz*.92;
  const clip={front:sheet(inner,X.walk_front_s,0,0,ws,8,8),back:sheet(inner,X.walk_back_s,0,0,ws,8,8),cof:sheet(inner,X.coffee_s,0,0,ws,6,24)};
  const P2=(u,v)=>{const t=lq(w.q,u,v);return[t[0]+OFF[w.f][0],t[1]+OFF[w.f][1]];};
  const [u0,v0]=w.uv,gu=u0<.5?u0+.16:u0-.16,vf=Math.min(1.08,v0+.26);
  const ue=Math.max(.5,Math.min(.75,gu+.18));const path=[P2(u0,v0+.05),P2(gu,v0+.07),P2(gu,vf),P2(ue,vf)];
  const others=()=>[...$("#ppl").children].filter(n=>n!==wg&&n.dataset&&n.dataset.i!=null);
  const zplace=y=>{const nx=others().find(n=>pos(P[+n.dataset.i])[1]>y+6);if(nx){if(wg.nextSibling!==nx)$("#ppl").insertBefore(wg,nx);}else if($("#ppl").lastChild!==wg)$("#ppl").appendChild(wg);};
  const showC=(k,flip,px,py)=>{for(const c in clip)clip[c].t.style.display=c===k?"":"none";wg.setAttribute("transform",`translate(${px-ws/2} ${py-ws*.975})`);inner.setAttribute("transform",flip?`translate(${ws} 0) scale(-1 1)`:"");zplace(py);};
  let ft=0;function walk(pts,done){let i=0,p0=pts[0].slice(),last=performance.now();(function tick(now){const dt=Math.min(.05,(now-last)/1000);last=now;const t=pts[i+1];if(!t){done();return;}
    const dx=t[0]-p0[0],dy=t[1]-p0[1],d=Math.hypot(dx,dy),s=150*dt;if(d<=s){p0=t.slice();i++;}else{p0[0]+=dx/d*s;p0[1]+=dy/d*s;}
    const k=dy>2?"front":dy<-2?"back":(dx>0?"front":"back"),flip=dx>1;ft+=dt;if(ft>.11){ft=0;clip[k].f=(clip[k].f+1)%8;clip[k].draw();}showC(k,flip,p0[0],p0[1]);requestAnimationFrame(tick);})(last);}
  walk(path,()=>{const e=path[path.length-1];showC("cof",false,e[0],e[1]);const ct=setInterval(()=>{clip.cof.f=(clip.cof.f+1)%24;clip.cof.draw();},160);
    setTimeout(()=>{clearInterval(ct);walk(path.slice().reverse(),()=>{wg.remove();desk.remove();w.body.style.display="";w.away=false;walking=0;setTimeout(coffee,20000+Math.random()*20000);});},5000+Math.random()*3000);});}


const DESC={1:{gc:"104 遺傳諮詢 預約登記",ly:"DM 領用 線上申請",tr:"每天早上的情報日報",cs:"LINE 客人詢問 進客服後台",rp:"查客戶報告進度",bm:"本月業績目標"},
 2:{dr:"本週目標 主管看板",kb:"DM 庫存 補貨",al:"異常通知 需要處理的事",rp:"特管週報 行銷週報",gc:"104 遺傳諮詢 申請",ly:"DM 領用 登記",vd:"影音後台 剪片",cs:"LINE 客服後台 客服數據",fb:"FB 發文審核 粉專"}};
const ROLE={1:{_:0,
 gc:["幫業務登記 104 遺傳諮詢預約","填好客戶資料就送出申請","申請進度在同一頁查得到"],
 ly:["DM 和同意書線上領用","選品項和數量 送出就完成登記","領用後庫存自動扣掉"],
 tr:["每天早上 9 點整理產業新聞","競品 特管法規 失智長照 市場動態","推到 LINE 群組 附語音廣播"],
 cs:[],
 rp:["查客戶的檢測報告進度","輸入客戶資料就能查","報告出來可以直接下載"],
 bm:["本月業績目標 1500 萬","帶著業務小隊一起衝"]},
2:{
 dr:["每週訂下本週目標","LINE 每天 50 則 FB 一三五發文","特管週報週一寄出 情報日報每天"],
 kb:["盯著 DM 和同意書的庫存","低於門檻自動列出缺貨和低庫存","點了直接進庫存後台補貨"],
 al:["把各處需要處理的事收在一起","特管退件 DM 缺貨 機器人出錯","點清單直接進對應後台"],
 rp:["整理特管案件進度 每週一寄出週報","產出行銷週報","工作便利貼 報告表單"],
 gc:["104 遺傳諮詢申請","收到申請後安排遺傳諮詢師"],
 ly:["DM 領用登記","企劃這邊看得到誰領了什麼"],
 vd:["影音後台 腳本 分鏡 剪片","短影音和廣告影片交給她"],
 cs:["LINE 官方帳號客服機器人","自動回覆 轉真人 客服數據"],
 fb:["FB 粉專貼文 一三五自動發","圖和文案先送審核 按 OK 才發出"]}};
function sline(w){const b=B[w.k]||{},s=state(w);
  if(w.f===2&&U2){if(w.k==="rp"&&RED.ldts.length)return `特管有 ${RED.ldts.length} 件要注意`;if(w.k==="kb"&&((W.dm||{}).count||RED.dm.length))return `${((W.dm||{}).count||RED.dm.length)} 項 DM 庫存不足`;if(w.k==="al"&&todo.length)return `${todo.length} 項需要處理`;if(w.k==="dr")return "本週目標在白板上";}
  if(w.k==="bm")return "目標 1500 萬";
  if(b.today){if(w.k==="cs")return `今天回了 ${b.today} 則`;if(w.k==="tr")return `今天推送 ${b.today} 則`;if(w.k==="fb")return `今天發了 ${b.today} 篇`;}
  return s==="err"?"需要處理":s==="idle"?"待命":"工作中";}
function roster(){if(!DESK)return;const f=SALES?1:curF,list=P.filter(w=>!f||w.f===f).slice().sort((a,b)=>(state(b)==="err")-(state(a)==="err"));
  const n1=P.filter(w=>w.f===1).length,n2=P.filter(w=>w.f===2).length;
  $("#roster").innerHTML=`<div class="ro-h"><button class="homeb" data-home aria-label="回主頁"><svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5M5.5 9.8V20h4.5v-5.5h4V20h4.5V9.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg></button><div style="flex:1;margin-left:10px"><b>華聯小隊</b><small>${DATA.asOf?tw(DATA.asOf)+" 更新":""}</small></div><button class="musb" data-mus aria-label="音樂" style="margin-right:6px"><svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="6.5" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button><button class="menu" id="pill2" aria-label="選單"><span></span><span></span><span></span></button></div>
  ${U2?`<div class="ro-st ${todo.length?"":"ok"}" id="rost"><i></i>${todo.length?todo.length+" 項需要處理":"一切正常"}</div>`:""}
  ${SALES?"":`<div class="ro-fl ${f===2?"on":""}" data-f="2"><em>2F</em><div><b>企劃辦公室</b><small>${n2} 位助理</small></div>${U2?"":'<span class="lock"></span>'}</div>`}
  <div class="ro-fl ${f===1?"on":""}" data-f="1"><em>1F</em><div><b>業務辦公室</b><small>${n1} 位助理</small></div></div>
  <p class="ro-k">${f?f+"F 成員":"全部成員"} ${list.length} 位</p><ul class="ro-list">${list.map(w=>{const s=state(w);return `<li data-i="${P.indexOf(w)}"><img src="${w.k==="bm"?(A.bm||""):(A.av[w.k]||"")}" style="${w.k==="bm"?"object-position:72% 12%;object-fit:cover;transform:scale(1);":""}" alt=""><div><b>${esc(nm(w))}</b><span>${esc((DESC[w.f]||{})[w.k]||"")}</span><span class="ro-s">${esc(sline(w))}</span></div><i style="--c:${s==="err"?"var(--err)":s==="idle"?"var(--ok)":"var(--work)"}"></i></li>`;}).join("")}</ul>`;
  $("#roster").querySelectorAll(".ro-fl").forEach(e=>e.onclick=()=>{const f=+e.dataset.f;if(!f){closeSay();curF=0;fly(allVB(),600).then(roster);}else floor(f);});
  $("#roster").querySelectorAll(".ro-list li").forEach(e=>e.onclick=()=>{$("#roster").querySelectorAll(".ro-list li").forEach(x=>x.classList.remove("sel"));e.classList.add("sel");focusWho(P[+e.dataset.i]);});
  $("#pill2").onclick=menu;const rs=$("#rost");if(rs)rs.onclick=()=>{const t=document.querySelector("#sec-todo");if(t){$("#report").scrollTo({top:t.getBoundingClientRect().top-$("#report").getBoundingClientRect().top+$("#report").scrollTop-$(".rtop").offsetHeight-10,behavior:"smooth"});t.classList.remove("bump");void t.offsetWidth;t.classList.add("flash");setTimeout(()=>t.classList.remove("flash"),1600);}};}

/* ===== 數字跳動 + 每分鐘更新 ===== */
let PREV={};
function countUp(root){root.querySelectorAll(".big b,.kpis .k b,.tl-n,.ring-c b,.lg dd,.mini b,.sh em").forEach((el,i)=>{
  const tn=[...el.childNodes].find(n=>n.nodeType===3&&/\d/.test(n.nodeValue));if(!tn)return;const to=parseFloat(tn.nodeValue.replace(/[^\d.]/g,""));if(isNaN(to))return;
  const key=i+"",from=PREV[key]!=null?PREV[key]:0;PREV[key]=to;if(from===to){return;}
  const t0=performance.now(),D=from===0?1100:700;(function f(t){const k=Math.min(1,(t-t0)/D),e=1-Math.pow(1-k,3);tn.nodeValue=String(Math.round(from+(to-from)*e));if(k<1)requestAnimationFrame(f);})(t0);
  if(from!==0){el.classList.remove("bump");void el.offsetWidth;el.classList.add("bump");}});}
async function liveRefresh(){return;try{const r=await fetch(BASE+"hl-office-data",{cache:"no-store"});const j=await r.json();if(!j||!j.ok)return;
  if(j.week)j.week.tasks=[];DATA=j;B=j.bots||{};W=j.week||{};const up=$("#upd");if(up&&j.asOf)up.textContent=tw(j.asOf)+" 更新";
  const st=$("#report").scrollTop;window.__rk=1;if($("#report").classList.contains("on"))openRep();$("#report").scrollTop=st;window.__rk=0;roster();}catch(e){}}


document.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(a&&/^https?:/.test(a.getAttribute("href"))&&!e.ctrlKey&&!e.metaKey){e.preventDefault();e.stopPropagation();openURL(a.href,a.textContent);}},true);
document.addEventListener("click",e=>{const h=e.target.closest("[data-home]");if(!h)return;document.querySelectorAll(".ro-acc").forEach(x=>x.remove());document.querySelectorAll(".ro-list li.sel").forEach(x=>x.classList.remove("sel"));closeSay();$("#mnu")&&$("#mnu").classList.remove("on");if(!DESK)$("#report").classList.remove("on");$("#gate")&&$("#gate").classList.remove("on");
  const f=U2?2:1;floor(f);if(DESK&&$("#report").classList.contains("on"))$("#report").scrollTo({top:0,behavior:"smooth"});});
/* ===== 後台檢視 ===== */
function openURL(u,t){$("#mnu").classList.remove("on");closeSay();if(false){$("#vwt").textContent=String(t||"").replace(/\s+/g," ").trim();$("#vwf").src=u;$("#vw").classList.add("on");try{history.pushState({vw:1},"");}catch(e){}}else location.href=u;}
function closeVW(back){if(!$("#vw").classList.contains("on"))return;$("#vw").classList.remove("on");$("#vwf").src="about:blank";if(back)try{if(history.state&&history.state.vw)history.back();}catch(e){}}
$("#vwh").onclick=$("#vwx").onclick=()=>closeVW(true);addEventListener("popstate",()=>closeVW(false));
/* ===== 音樂 ===== */
{let ctx=null,g=null,src=null,on=false,ld=false;const set=v=>{on=v;document.querySelectorAll("[data-mus]").forEach(b=>b.classList.toggle("on",v));};
const load=()=>{if(ld)return;ld=true;fetch(AS+"music.mp3").then(r=>r.arrayBuffer()).then(b=>new Promise((ok,ng)=>ctx.decodeAudioData(b,ok,ng))).then(buf=>{src=ctx.createBufferSource();src.buffer=buf;src.loop=true;src.connect(g);src.start();}).catch(()=>{ld=false;set(false);});};
document.addEventListener("click",e=>{const b=e.target.closest("[data-mus]");if(!b)return;e.stopPropagation();if(!ctx){const AC=window.AudioContext||window.webkitAudioContext;ctx=new AC();g=ctx.createGain();g.gain.value=.45;g.connect(ctx.destination);}
if(on){ctx.suspend();set(false);}else{ctx.resume();load();set(true);}},true);}
/* ===== 門禁 ===== */
let pin="";
async function gate(){closeSay();pin="";drawPin();$("#gate").classList.add("on");}
function drawPin(){document.querySelectorAll("#dots i").forEach((d,i)=>d.classList.toggle("on",i<pin.length));const o=document.querySelector(".pad .ok");if(o)o.disabled=pin.length!==6;}
document.querySelectorAll(".pad button,#gate .gx").forEach(b=>b.onclick=()=>{const n=b.dataset.n;if(n==="ok"){if(pin.length===6){try{sessionStorage.setItem("hlp",pin)}catch(e){}location.replace(location.pathname+"?go=2");}return;}
  if(n==="x"){$("#gate").classList.remove("on");return;}if(n==="b"){pin=pin.slice(0,-1);drawPin();return;}
  if(pin.length<6){pin+=n;drawPin();}});
if(D.pinErr){$("#dots").classList.add("shake");}
/* ===== 報表 ===== */
function openRep(){if(!window.__rk)closeSay();
  const Bd=B,Wk=W,total=Object.values(Bd).reduce((a,d)=>a+(d.today||0),0);
  const L=id=>(L2[id]||[])[0];const go=(id,t)=>L(id)?`<a class="go" href="${esc(L(id)[1])}" target="_blank" rel="noopener">${t||"前往"}<i>›</i></a>`:"";
  const name=id=>NAME[2][id]||id;const U=id=>esc((L(id)||[])[1]||"#");const UW=esc(((L2.rp||[]).find(l=>l[0]==="工作便利貼")||[])[1]||"#");const AT=`target="_blank" rel="noopener"`;const av=id=>`<img class="av" src="${A.av[id]||""}" alt="">`;
  const ic={todo:'<path d="M12 8v5m0 3.5v.01M10.3 3.9 2.6 17.2A2 2 0 0 0 4.3 20h15.4a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z"/>',done:'<path d="M4 19V9m6 10V5m6 14v-7m4 7H2"/>',ldts:'<path d="M9 12l2 2 4-4M7 3h10a2 2 0 0 1 2 2v14l-7-3-7 3V5a2 2 0 0 1 2-2Z"/>',dm:'<path d="M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8"/>',feed:'<path d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>'};
  const head=(k,t,n,link)=>`<header class="sh"><span class="si"><svg viewBox="0 0 24 24">${ic[k]}</svg></span><h3>${t}</h3>${n!=null?`<em>${n}</em>`:""}${link||""}</header>`;
  const S=Wk.ldtsSum||{},dm=Wk.dm||{},line=Wk.line||{};
  const need=[...(Wk.ldts||[]).filter(x=>x.red).map(x=>({...x,by:"rp"})),...(Wk.tasks||[]).filter(x=>x.red).map(x=>({...x,by:"dr"})),...(((Wk.dm||{}).count)?[{t:"DM 庫存不足 "+Wk.dm.count+" 項",s:"缺貨",by:"kb",dm:1}]:[])];
  const chip=s=>{const c=/退件|缺貨|失敗/.test(s)?"c-red":/逾期/.test(s)?"c-org":/準備|待|中/.test(s)?"c-amb":"c-gry";return `<b class="chip ${c}">${esc(s)}</b>`;};
  const secs=[];
  if(need.length)secs.push(["todo","需要處理",`<section class="sec s-todo" id="sec-todo">${head("todo","需要處理",need.length)}<ul class="todo">${need.map(x=>`<li><a class="lk" href="${x.dm?U("kb"):x.by==="dr"?UW:U("rp")}" ${AT}>${av(x.by)}<div><p>${esc(x.t)}</p><small>${esc(name(x.by))}</small></div>${chip(x.s)}</a></li>`).join("")}</ul></section>`]);
  const tiles=[["cs","LINE 客服回覆",Bd.cs&&Bd.cs.today,"則",Bd.cs&&Bd.cs.week,line.in!=null?`進線 ${line.in}　自動 ${line.bot??"–"}`:""],["tr","情報推送",Bd.tr&&Bd.tr.today,"則",Bd.tr&&Bd.tr.week,Bd.tr&&Bd.tr.weekErr?`本週失敗 ${Bd.tr.weekErr}`:""],["fb","FB 發文",(Bd.fb&&Bd.fb.today)||0,"篇",Bd.fb&&Bd.fb.week,Wk.fbSent!=null?`本週已發 ${Wk.fbSent}`:""],["rp","報告產出",(Bd.rp&&Bd.rp.today)||0,"份",Bd.rp&&Bd.rp.week,""]];
  const mx=Math.max(1,...tiles.map(t=>t[2]||0));
  secs.push(["done","今日成果",`<section class="sec s-done" id="sec-done">${head("done","今日成果",null,DATA.errToday?`<span class="warn">失敗 ${DATA.errToday} 次</span>`:``)}<div class="tiles">${tiles.map(t=>`<a class="tile" href="${U(t[0])}" ${AT}>${av(t[0])}<p class="tl-l">${t[1]}</p><p class="tl-n">${t[2]??0}<small>${t[3]}</small></p><div class="mbar"><i style="width:${Math.round((t[2]||0)/mx*100)}%"></i></div><p class="tl-s">本週 ${t[4]??0}${t[5]?"<br>"+t[5]:""}</p></a>`).join("")}</div></section>`]);
  if(S.total){const pp=S.approved/S.total,R=42,Cc=2*Math.PI*R;
    secs.push(["ldts","特管進度",`<section class="sec s-ldts" id="sec-ldts">${head("ldts","特管進度",null,go("rp","週報"))}<a class="ring-wrap" href="${U("rp")}" ${AT}><svg class="ring" viewBox="0 0 100 100"><circle cx="50" cy="50" r="${R}" class="bg"/><circle cx="50" cy="50" r="${R}" class="fg" stroke-dasharray="${(Cc*pp).toFixed(1)} ${Cc.toFixed(1)}"/></svg><div class="ring-c"><b>${Math.round(pp*100)}<small>%</small></b><span>已核准</span></div><dl class="lg"><div><dt><i style="background:var(--a-ldts)"></i>已核准</dt><dd>${S.approved}</dd></div><div><dt><i style="background:rgba(201,150,47,.25)"></i>進行中</dt><dd>${S.total-S.approved}</dd></div><div><dt><i style="background:#6aa8ff"></i>本週異動</dt><dd>${S.moved||0}</dd></div><div><dt><i style="background:#ff8a5c"></i>即將到期</dt><dd>${S.exp||0}</dd></div></dl></a>${(Wk.ldtsCases||[]).length?`<ol class="steps">${Wk.ldtsCases.map(x=>`<li><a class="lk" href="${U("rp")}" ${AT}><p>${esc(String(x.t).replace(/^本週新申請\s*/,""))}</p><small>本週新申請　下一步 ${esc(x.s)}</small></a></li>`).join("")}</ol>`:""}</section>`]);}
  if(dm.count)secs.push(["dm","DM 庫存",`<section class="sec s-dm" id="sec-dm">${head("dm","DM 庫存不足",dm.count,go("kb","補貨"))}<ul class="stock">${(dm.items||[]).slice(0,6).map(x=>`<li onclick="location.href='${U("kb")}'" style="cursor:pointer"><p>${esc(x.name)}</p><div class="sbar"><i style="width:${Math.min(100,Math.round((x.stock||0)/Math.max(1,x.threshold||1)*100))}%"></i></div><span class="sv ${x.stock?"":"zero"}">${x.stock?"剩 "+x.stock:"缺貨"}</span></li>`).join("")}</ul>${dm.count>6?`<a class="more" href="${U("kb")}" ${AT}>還有 ${dm.count-6} 項 看全部 ›</a>`:""}</section>`]);
  if(false)secs.push(["feed","今天動態",`<section class="sec s-feed" id="sec-feed">${head("feed","今天的動態",DATA.feed.length)}<ul class="feed">${DATA.feed.slice(0,10).map(f=>`<li class="${f.err?"err":""}"><time>${hm(f.t)}</time>${av(f.bot)}<span><b>${esc(name(f.bot))}</b>${f.err?"失敗":"完成"} ${f.n||1} 件</span></li>`).join("")}</ul></section>`]);
  const errs=DATA.errToday||0;
  $("#report").innerHTML=`<div class="rtop"><nav class="rnav2">${secs.map(s=>`<a href="#sec-${s[0]}" class="n-${s[0]}"><i></i>${s[1]}</a>`).join("")}</nav><button class="rx2" id="rx">收起</button></div><div class="rp-inner"><div class="hero"><p class="kick">戰情報表　${DATA.asOf?tw(DATA.asOf)+" 更新":""}</p><div class="big"><b>${total}</b><span>件<br>今日自動完成</span></div><div class="kpis"><a href="#sec-todo" class="k k-red" style="cursor:pointer"><b>${need.length}</b>需要處理</a><div class="k ${errs?"k-red":"k-ok"}"><b>${errs}</b>今日失敗</div><div class="k"><b>${DATA.weekTotal??"–"}</b>本週合計</div></div></div>${secs.map(s=>s[2]).join("")}</div>`;
  $("#report").querySelectorAll('a[href^="#sec-"]').forEach(a=>a.addEventListener("click",e=>{e.preventDefault();const t=document.querySelector(a.getAttribute("href"));t&&$("#report").scrollTo({top:t.getBoundingClientRect().top-$("#report").getBoundingClientRect().top+$("#report").scrollTop-$(".rtop").offsetHeight-10,behavior:"smooth"});}));
  $("#report").classList.add("on");if(!window.__rk)$("#report").scrollTop=0;countUp($("#report"));$("#rx").onclick=()=>$("#report").classList.remove("on");}

/* ===== 手勢 ===== */
const pts=new Map();let g0=null,moved=false;
const scl=()=>{const r=MAP.getBoundingClientRect();return Math.max(r.width/vb[2],r.height/vb[3]);};
const toSvg=(cx,cy)=>{const r=MAP.getBoundingClientRect(),s=scl(),ox=(r.width-vb[2]*s)/2,oy=(r.height-vb[3]*s)/2;return[vb[0]+(cx-r.left-ox)/s,vb[1]+(cy-r.top-oy)/s];};
MAP.addEventListener("pointerdown",e=>{pts.set(e.pointerId,{x:e.clientX,y:e.clientY});moved=false;
  if(pts.size===1)g0={x:e.clientX,y:e.clientY,vb:vb.slice(),t:Date.now()};
  if(pts.size===2){const [a,b]=[...pts.values()];g0={d:Math.hypot(a.x-b.x,a.y-b.y),c:toSvg((a.x+b.x)/2,(a.y+b.y)/2),vb:vb.slice()};}});
MAP.addEventListener("pointermove",e=>{if(true){if(g0&&g0.x!=null&&Math.abs(e.clientX-g0.x)+Math.abs(e.clientY-g0.y)>8)moved=true;return;}if(!pts.has(e.pointerId)||!g0)return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});const s=scl();
  if(pts.size===2&&g0.d){const [a,b]=[...pts.values()];const sc=g0.d/Math.max(20,Math.hypot(a.x-b.x,a.y-b.y));const w=Math.min(3200,Math.max(420,g0.vb[2]*sc)),h=w*AR();moved=true;closeSay();
    setVB([g0.c[0]-(g0.c[0]-g0.vb[0])*w/g0.vb[2],g0.c[1]-(g0.c[1]-g0.vb[1])*w/g0.vb[2],w,h]);return;}
  if(pts.size===1&&g0.x!=null){const dx=e.clientX-g0.x,dy=e.clientY-g0.y;if(Math.abs(dx)+Math.abs(dy)>8)moved=true;
    if(moved){const fw=floorVB(curF||1);if(g0.vb[2]<fw[2]*.95)setVB([g0.vb[0]-dx/s,g0.vb[1]-dy/s,g0.vb[2],g0.vb[3]]);}}});
const up=e=>{if(false&&g0&&g0.x!=null&&pts.size===1&&moved){const dy=e.clientY-g0.y,dx=e.clientX-g0.x,fw=floorVB(curF||1);
    if(g0.vb[2]>=fw[2]*.95&&Date.now()-g0.t<700){if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.3)floor(curF===1?2:1);else if(PORT()&&Math.abs(dy)>80&&Math.abs(dy)>Math.abs(dx)*1.3&&!(dy>0&&curF===2))floor(dy<0?1:2);}}
  pts.delete(e.pointerId);if(pts.size===0){g0=null;setTimeout(()=>moved=false,30);}else if(pts.size===1){const p=[...pts.values()][0];g0={x:p.x,y:p.y,vb:vb.slice(),t:Date.now()};}};
MAP.addEventListener("pointerup",up);MAP.addEventListener("click",e=>{if(!moved&&!e.target.closest(".who")&&sheetEl.classList.contains("on")){closeSay();}});MAP.addEventListener("pointercancel",up);
MAP.addEventListener("wheel",e=>{if(true)return;e.preventDefault();const c=toSvg(e.clientX,e.clientY);const w=Math.min(3200,Math.max(420,vb[2]*(e.deltaY>0?1.1:.9)));setVB([c[0]-(c[0]-vb[0])*w/vb[2],c[1]-(c[1]-vb[1])*w/vb[2],w,w*AR()]);},{passive:false});
/* 往下拉重新整理：二樓（最上層）往下拉 */
let py=null;MAP.addEventListener("touchstart",e=>{py=(e.touches.length===1&&(curF===2||(curF===1&&!PORT())))?e.touches[0].clientY:null;},{passive:true});
MAP.addEventListener("touchmove",e=>{if(py==null)return;const d=e.touches[0].clientY-py;$("#ptr").style.display=d>60?"block":"none";$("#ptr").textContent=d>150?"放開重新整理":"往下拉重新整理";},{passive:true});
MAP.addEventListener("touchend",e=>{if(py==null)return;const d=e.changedTouches[0].clientY-py;py=null;if(d>150){$("#ptr").textContent="更新中";location.href=location.pathname+"?r=1&go="+(curF||1);}else $("#ptr").style.display="none";});


/* ===== 開始 ===== */

const setDK=()=>{document.body.classList.toggle("dk",DK());document.body.classList.toggle("solo",!U2);};setDK();addEventListener("resize",()=>{if(DK()!==DESK){location.reload();return;}setDK();setVB(floorVB(curF||1));if(DK()&&U2)openRep();});
if(DK()&&U2)openRep();
setVB(floorVB(1));
if(D.pinErr){floor(1,true).then(()=>setTimeout(gate,200));}
else floor((D.go==="2"||!D.go)&&U2?2:1,true).then(()=>{if(D.go==="d"&&U2)openRep();});
})();
