"use strict";
/* ---------- icons (one stroke family, 2px, round) ---------- */
const I = {
  path:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h5v-4h5v-4h5V8"/><path d="M17 4l2 2 2-2"/></svg>',
  mist:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 9l3 3 5-5"/><path d="M8 16h8"/></svg>',
  talk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>',
  me:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5" fill="currentColor" fill-opacity=".2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.3-9.4C1.5 8.3 3.6 4.5 7.3 4.5c2 0 3.5 1.1 4.7 2.7 1.2-1.6 2.7-2.7 4.7-2.7 3.7 0 5.8 3.8 4.6 7.1C19.5 16.4 12 21 12 21z"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3.1 1.2-6.3L2.8 9.5l6.4-.8z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  cross:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 018 0v2.5"/></svg>',
  door:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V10a6 6 0 0112 0v11"/><path d="M4 21h16"/><circle cx="14.5" cy="15" r=".6" fill="currentColor"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/></svg>',
  dice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="15" r="1.2" fill="currentColor"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1.2" fill="currentColor"/></svg>',
  plate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/></svg>',
  link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/></svg>',
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/></svg>'
};
/* ---------- data ---------- */
const LESSONS = [];
WORLDS.forEach((w, wi) => w.lessons.forEach((l, li) => { l.world = w; l.wi = wi; l.li = li; LESSONS.push(l); }));
const RANK_EN = ["Trainee","Floor manager","Senior manager","Legend"];
const RANKS = [["Стажёр",0],["Менеджер зала",400],["Старший менеджер",1200],["Легенда Санторини",2500]];
const PAGES_URL = "__PAGES_URL__";
const IMG = { world: w => `assets/codex/world-${w}.webp`, rank: i => `assets/ranks/rank-${i+1}.webp`, av: n => `assets/avatars/${n}.webp`, dish: n => `assets/menu/${n}.webp` };
const TEST_MISTAKES = [
  ["What time you have to reservation?","What time is your reservation?","На какое время ваша бронь?"],
  ["Yes, of course, you're welcome.","Of course, please come in.","Конечно, проходите."],
  ["Tables are busy.","The tables are taken.","Столики заняты."],
  ["I can order table nearby.","I can offer you a table nearby.","Могу предложить столик рядом."],
  ["It's at the menu.","It's on the menu.","Это есть в меню."],
  ["I recommend to try the octopus.","I recommend trying the octopus.","Рекомендую попробовать осьминога."],
  ["I tell the waiter.","I'll tell the waiter.","Я скажу официанту."],
  ["I will place your dish.","I'll replace your dish.","Я заменю вам блюдо."],
  ["You can pay how you want.","You can pay however you like.","Можно платить как вам удобно."],
  ["In which hotel you stay?","Which hotel are you staying at?","В каком отеле вы живёте?"],
  ["I ordered the taxi in time you want.","I'll order a taxi for the time you need.","Я закажу такси на нужное время."]
];
const KEY = "santorini-english-v1";
const today = () => { const d = new Date(); return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(); };
const dayDiff = (a, b) => { const p = s => { const [y,m,d] = s.split("-").map(Number); return new Date(y, m-1, d); }; return Math.round((p(b)-p(a))/864e5); };
function fresh(){
  return { xp:0, streak:0, lastDay:null, hearts:5, heartsAt:Date.now(), done:{}, answered:0, right:0,
    mistakes: TEST_MISTAKES.map(([w,ok,ru]) => ({ en:ok, ru, wrong:w, src:"из вашего первого теста", fixed:false })),
    set:{ rate:0.9, accent:"en-US" }, ver:2 };
}
let S;
try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || "null") || {}); } catch(e){ S = fresh(); }
S.ver = 2; if (!S.set) S.set = { rate:0.9, accent:"en-US" };
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }
function tickHearts(){
  const now = Date.now(), per = 30*60*1000;
  if (S.hearts >= 5){ S.heartsAt = now; return; }
  const gained = Math.floor((now - S.heartsAt)/per);
  if (gained > 0){ S.hearts = Math.min(5, S.hearts + gained); S.heartsAt += gained*per; }
}
function checkStreak(){ if (S.lastDay && dayDiff(S.lastDay, today()) > 1) S.streak = 0; }
tickHearts(); checkStreak(); save();
const rankOf = xp => { let r = 0; RANKS.forEach((x,i) => { if (xp >= x[1]) r = i; }); return r; };
const isDone = l => !!S.done[l.id];
const isOpen = (l) => { const i = LESSONS.indexOf(l); return i === 0 || isDone(LESSONS[i-1]); };
const current = () => LESSONS.find(l => !isDone(l)) || null;

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length-1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; };
const norm = s => String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();
function lev(a, b){ const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let p = Array.from({length:n+1}, (_,j) => j);
  for (let i = 1; i <= m; i++){ const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j]+1, c[j-1]+1, p[j-1]+(a[i-1]===b[j-1]?0:1)); p = c; }
  return p[n]; }
const close = (a, b) => { a = norm(a); b = norm(b); if (a === b) return true; return lev(a,b) <= Math.max(1, Math.floor(b.length*0.08)); };
function wordScore(said, target){
  const t = norm(target).split(" "), s = norm(said).split(" ");
  let hit = 0; const pool = s.slice();
  t.forEach(w => { const k = pool.findIndex(x => x === w || (w.length > 3 && lev(x,w) <= 1)); if (k >= 0){ hit++; pool.splice(k,1); } });
  return hit / t.length;
}

/* ---------- voice ---------- */
let VOICE = null;
function pickVoice(){
  if (!("speechSynthesis" in window)) return;
  const vs = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang));
  const want = S.set.accent;
  VOICE = vs.find(v => v.lang.replace("_","-") === want && /samantha|daniel|karen|serena|google|natural|premium|enhanced/i.test(v.name))
       || vs.find(v => v.lang.replace("_","-") === want) || vs[0] || null;
}
if ("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text, slow){
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = S.set.accent; if (VOICE) u.voice = VOICE;
  u.rate = slow ? 0.6 : S.set.rate;
  speechSynthesis.speak(u);
}
const REC = window.SpeechRecognition || window.webkitSpeechRecognition || null;

/* ---------- shell ---------- */
let TAB = "path", JUST = null;
const pic = (src, alt, cls, fb) => `<img ${cls ? `class="${cls}"` : ""} src="${src}" alt="${esc(alt||"")}" ${fb != null ? `data-fb="${esc(fb)}"` : ""} onerror="imgFail(this)">`;
function imgFail(el){ el.onerror = null; if (el.dataset.fb != null) el.outerHTML = el.dataset.fb; else el.style.visibility = "hidden"; }
const RANK_SVG = ['<svg viewBox="0 0 24 24" fill="none" stroke="#1550A8" stroke-width="1.8" stroke-linecap="round"><path d="M5 19C9 15 13 11 19 5"/><path d="M9 15c-2-1-3-3-3-5 2 0 4 1 5 3M12 12c0-2 1-4 3-5 1 2 0 4-1 5M15 9c1-1 3-1 4 0-1 2-3 2-4 1"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#1550A8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v3c-3 1-5 4-5 7 0 4 3 8 7 8s7-4 7-8c0-3-2-6-5-7V3"/><path d="M6 11h12"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#1550A8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20V13a7 7 0 0114 0v7z"/><path d="M12 3v3M3 20h18"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#1550A8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18c-3-3-3-9 1-12M18 18c3-3 3-9-1-12"/><path d="M9 17v-3a3 3 0 016 0v3z"/></svg>'];
const badge = i => pic(IMG.rank(i), RANKS[i][0], "", `<span class="badge">${RANK_SVG[i]}</span>`);
function renderTop(){
  tickHearts();
  const r = rankOf(S.xp);
  $("#bar").innerHTML = `
    <div class="rank" aria-label="Звание: ${RANKS[r][0]}">${badge(r)}<b>${RANK_EN[r]}</b></div>
    <div class="chip streak ${S.streak ? "" : "off"}" aria-label="Дней подряд: ${S.streak}">${I.sun}${S.streak}</div>
    <div class="chip hearts" aria-label="Сердечек: ${S.hearts} из 5">${I.heart}${S.hearts}</div>
    <div class="chip xp" aria-label="Опыт: ${S.xp}">${I.star}${S.xp}</div>`;
}
function renderTabs(){
  const open = S.mistakes.filter(m => !m.fixed).length;
  const t = [["path","Путь",I.path],["mist","Ошибки",I.mist],["talk","Разговор",I.talk],["me","Профиль",I.me]];
  $("#tabs").innerHTML = t.map(([id,n,ic]) => `<button class="tab" data-tab="${id}" ${TAB===id?'aria-current="page"':""}>${ic}${id==="mist"&&open?`<span class="dot">${open}</span>`:""}<span>${n}</span></button>`).join("");
}
function render(){ renderTop(); renderTabs(); ({path:renderPath, mist:renderMist, talk:renderTalk, me:renderMe})[TAB](); parallax(); }

/* parallax: layers of the path cover drift at different speeds; world photos drift inside their cards */
const RM = matchMedia("(prefers-reduced-motion: reduce)");
function parallax(){
  if (RM.matches) return;
  const m = $("#main"), y = m.scrollTop, mt = m.getBoundingClientRect().top, h = m.clientHeight;
  const hero = $(".hero");
  if (hero && y < 600){
    hero.querySelector(".sea").style.transform = `translateY(${(y*0.45).toFixed(1)}px)`;
    hero.querySelector(".domes").style.transform = `translateY(${(y*0.3).toFixed(1)}px)`;
    hero.querySelector(".wm").style.transform = `translateY(${(y*0.3).toFixed(1)}px)`;
    hero.querySelector(".plant").style.transform = `translateY(${(y*0.15).toFixed(1)}px)`;
    hero.querySelector(".stairs").style.transform = `translateY(${(-y*0.08).toFixed(1)}px)`;
  }
}
let pRAF = 0;
$("#main").addEventListener("scroll", () => { if (!pRAF) pRAF = requestAnimationFrame(() => { pRAF = 0; parallax(); }); }, { passive:true });

/* path */
const X = [-58, -18, 22, 58, 22, -18];
const CONN = `<svg viewBox="0 0 96 30" aria-hidden="true"><rect x="2" y="18" width="30" height="8" rx="2" fill="#F3E6DC"/><rect x="2" y="25" width="30" height="4" rx="1.5" fill="#DDBBA8"/><rect x="33" y="10" width="30" height="8" rx="2" fill="#F3E6DC"/><rect x="33" y="17" width="30" height="4" rx="1.5" fill="#DDBBA8"/><rect x="64" y="2" width="30" height="8" rx="2" fill="#F3E6DC"/><rect x="64" y="9" width="30" height="4" rx="1.5" fill="#DDBBA8"/></svg>`;
function renderPath(){
  const cur = current();
  const conn = (a, b) => `<div class="conn" style="--x:${(a+b)/2}px;--f:${b >= a ? -1 : 1}">${CONN}</div>`;
  let h = `<div class="path">`;
  h += `<div class="hero"><div class="l sea"></div><img class="l domes" src="assets/img/domes.webp" alt=""><div class="l wm"><i role="img" aria-label="Santorini"></i><span>English</span></div>
    <img class="l plant" src="assets/img/bougainvillea.webp" alt=""><img class="l stairs" src="assets/img/stairs.webp" alt="">
    ${cur ? `<button class="cta" data-go="${cur.id}"><div><small>${esc(cur.world.en)} · ${esc(cur.world.name)}</small><b>${esc(cur.en)}</b><small>${esc(cur.title)}</small></div><span class="btn">${isDone(LESSONS[0]) ? "Продолжить" : "Начать"}</span></button>` : ""}</div>`;
  if (!S.xp && !Object.keys(S.done).length)
    h += `<div class="hello" style="margin-top:16px">${pic("assets/sketches/welcome.webp","","hello-pic")}<p><b>Уже занимались в прошлой версии?</b> Прогресс можно перенести в «Профиле».</p><button class="btn small" data-tab="me">Перенести</button></div>`;
  WORLDS.forEach((w, wi) => {
    const n = w.lessons.filter(isDone).length;
    h += `<section class="flight" aria-label="${w.name}">
      <div class="sign"><img class="ph" src="${IMG.world(w.id)}" alt="" loading="lazy">
        <div class="tx"><div class="n">${wi+1}</div><div><h2>${w.en}</h2><p>${w.name}</p></div><div class="count">${n}/${w.lessons.length}</div></div></div>`;
    w.lessons.forEach((l, li) => {
      if (li > 0) h += conn(X[(li-1) % 6], l.boss ? 0 : X[li % 6]);
      const st = isDone(l) ? "done" : (l === cur ? "now" : "lock");
      const open = isOpen(l);
      if (l.boss){
        h += `<button class="dome ${open ? "" : "lock"}" data-go="${l.id}" ${open ? "" : 'aria-disabled="true"'} aria-label="${esc(l.title)}">
          ${pic(`assets/sketches/boss-${w.id}.webp`, "", "", `<img src="assets/img/domes.webp" alt="">`)}${isDone(l) ? `<span class="ok">${I.check}</span>` : ""}
          <span class="t">${esc(l.en)}<small class="${l === cur ? "now" : ""}">${l === cur ? "Нажмите, чтобы начать" : esc(l.title) + (isDone(l) ? " · пройдено" : "")}</small></span></button>`;
      } else {
        const ic = st === "lock" ? I.lock : (isDone(l) ? I.check : (l.menu ? I.plate : I.door));
        h += `<button class="step ${st} ${l.menu ? "menu" : ""} ${JUST === l.id ? "paint" : ""}" style="--x:${X[li % 6]}px" data-go="${l.id}" ${open ? "" : 'aria-disabled="true"'}>
          <span class="ic">${ic}</span><span class="t">${esc(l.en)}<small>${l === cur ? "Нажмите, чтобы начать" : esc(l.title)}</small></span></button>`;
      }
    });
    h += `</section>`;
  });
  h += `<div class="finale"><img src="${IMG.rank(3)}" alt=""><b>Legend of Santorini</b><span>${LESSONS.every(isDone) ? "Все уроки пройдены. Браво!" : `Легенда Санторини: осталось ${LESSONS.filter(l => !isDone(l)).length} ${plural(LESSONS.filter(l => !isDone(l)).length,"урок","урока","уроков")}`}</span></div></div>`;
  $("#main").innerHTML = h;
  const target = $(".paint") || $(".step.now") || ($(".dome .now") && $(".dome .now").closest(".dome"));
  requestAnimationFrame(() => {
    const m = $("#main");
    if (target && Object.keys(S.done).length){ m.scrollTop += target.getBoundingClientRect().top - m.getBoundingClientRect().top - m.clientHeight * 0.5; }
    else m.scrollTop = 0;
    parallax();
  });
  JUST = null;
}

/* mistakes */
function renderMist(){
  const open = S.mistakes.filter(m => !m.fixed), fixed = S.mistakes.filter(m => m.fixed);
  const item = m => `<div class="mist"><div class="x">${m.wrong ? `<div><s>${esc(m.wrong)}</s></div>` : ""}<div class="ok">${esc(m.en)}</div><div class="ru">${esc(m.ru)}${m.src ? " · " + esc(m.src) : ""}</div></div>
    <span class="stamp ${m.fixed ? "fixed" : "todo"}">${m.fixed ? "Исправлено" : "Повторить"}</span></div>`;
  $("#main").innerHTML = `<div class="pane"><h1>Мои ошибки</h1>
    <p class="lead">Ошибки не исчезают. Каждая возвращается в повторение, пока вы не ответите правильно, и тогда получает штамп «Исправлено».</p>
    ${open.length ? `<button class="btn" data-review>Повторить ошибки (${Math.min(open.length, 8)})</button><p class="lead" style="font-size:14px;margin-top:8px">Каждый верный ответ в повторении возвращает сердечко.</p>`
      : `<div class="card empty">${pic("assets/codex/all-fixed.webp","")}<h3>Все ошибки исправлены</h3><p class="lead" style="margin:0">Новые появятся здесь после уроков.</p></div>`}
    ${open.length ? `<div class="card" style="margin-top:14px">${open.map(item).join("")}</div>` : ""}
    ${fixed.length ? `<h2 style="font-size:20px;margin:22px 0 10px">Исправлено: ${fixed.length}</h2><div class="card">${fixed.slice().reverse().map(item).join("")}</div>` : ""}
  </div>`;
}

/* talk with the ChatGPT teacher: scene + random accent, speed and mood */
const pickOne = a => a[Math.floor(Math.random()*a.length)];
const GUESTS = ["guest-anna","guest-james","guest-yuki","guest-raj","guest-klaus","guest-pierre"];
const ACCENT_FACE = { Australian:"guest-anna", "British (London)":"guest-james", Scottish:"guest-james", Irish:"guest-james", Japanese:"guest-yuki", Indian:"guest-raj", German:"guest-klaus", Dutch:"guest-klaus", French:"guest-pierre", Italian:"guest-pierre" };
function faceFor(cat, accent){ if (cat === "team") return "waiter-made"; if (cat === "suppliers") return "supplier-ketut"; if (cat === "owner") return TK.who || "owner-mikalis"; return ACCENT_FACE[accent] || TK.face || (TK.face = pickOne(GUESTS)); }
let TK = { cat:"guests", scene:null, accent:null, speed:"rand", mood:null };
function persona(cat){ return { accent: pickOne(TALK.accents[cat]), mood: pickOne(TALK.moods), speedRoll: pickOne(TALK.speeds).id }; }
function rollPersona(){ const p = persona(TK.cat); TK.accent = p.accent; TK.mood = p.mood; TK.roll = p.speedRoll; TK.face = pickOne(GUESTS); TK.who = pickOne(["owner-mikalis","manager-lia"]); }
function speedOf(){ return TALK.speeds.find(x => x.id === (TK.speed === "rand" ? TK.roll : TK.speed)); }
function talkPrompt(sc, cat, accent, speed, mood){
  const role = TALK.cats.find(c => c.id === cat).role;
  return `I'm the manager of Santorini Greek Restaurant in Bali. My English is about A2 and I'm practicing speaking for work.
Let's do a role-play. The situation: ${sc.en}.${sc.rv ? `\nThis is based on a real guest review: "${sc.rv}"` : ""}
You play ${role}. Speak with a clearly noticeable ${accent} accent and the words and phrasing such a person really uses. Speak ${speed.en}. Your mood: ${mood}.
Rules: one line at a time, then wait for my answer. Don't correct me during the dialogue. Bring one small surprise in the middle. If I say "slower, please", slow down.
After about 10 lines, stop and give me in Russian: my 3 main mistakes with the correct English, 1 useful phrase to use at work today, and a score from 1 to 10.`;
}
function lessonPrompt(l){
  const cat = l.world.id, p = persona(cat), sp = TALK.speeds.find(x => x.id === p.speedRoll);
  return talkPrompt({ en: l.talk }, cat, p.accent, sp, p.mood);
}
function renderTalk(){
  const list = TALK.scenes.filter(x => x.c === TK.cat);
  if (!TK.scene || TK.scene.c !== TK.cat) TK.scene = list[0];
  if (!TK.accent || !TALK.accents[TK.cat].includes(TK.accent)) rollPersona();
  const sp = speedOf();
  $("#main").innerHTML = `<div class="pane">
    <img class="banner" src="assets/codex/talk.webp" alt=""><h1>Разговор с учителем</h1>
    <p class="lead">Живая практика голосом в вашем ChatGPT. Каждый раз собеседник другой: акцент, скорость и настроение меняются.</p>
    <div class="cats" role="group" aria-label="Тема">${TALK.cats.map(c => `<button class="chipbtn" data-cat="${c.id}" aria-pressed="${c.id===TK.cat}">${c.name}</button>`).join("")}</div>
    ${list.map((x,i) => `<button class="scene" data-scene="${i}" aria-pressed="${x===TK.scene}">${x.rv ? `<span class="tag">Real review</span>` : ""}<span class="t">${esc(x.en[0].toUpperCase() + x.en.slice(1))}</span><span class="ru">${esc(x.t)}</span>${x.rv ? `<span class="rv">${esc(x.rv)}</span>` : ""}</button>`).join("")}
    <div class="card" style="margin-top:16px"><div class="prow" style="margin-bottom:12px"><div class="talkav">${pic(IMG.av(faceFor(TK.cat, TK.accent)), "", "", "")}</div><div><h3 style="margin:0">Собеседник</h3><p class="lead" style="font-size:14px;margin:2px 0 0">Каждый раз новый человек</p></div></div>
      <div class="persona">
        <div class="prow"><span class="k">Акцент</span><span class="v">${esc(TK.accent)}</span><button class="reroll" data-roll="accent" aria-label="Другой акцент">${I.dice}</button></div>
        <div class="prow"><span class="k">Настроение</span><span class="v">${esc(TK.mood)}</span><button class="reroll" data-roll="mood" aria-label="Другое настроение">${I.dice}</button></div>
        <div class="prow" style="align-items:flex-start"><span class="k" style="padding-top:8px">Скорость</span><div class="speeds">
          ${[...TALK.speeds.map(x => [x.id, x.name]), ["rand","Случайно"]].map(([id,n]) => `<button class="chipbtn" data-speed="${id}" aria-pressed="${TK.speed===id}">${n}</button>`).join("")}</div></div>
      </div>
      <button class="btn ghost" style="margin-top:12px" data-roll="all">${I.dice}Новый собеседник</button>
    </div>
    <div class="card"><h3>Задание для ChatGPT</h3>
      <ol class="how"><li>Скопируйте задание.</li><li>Откройте ChatGPT, вставьте в новый чат и отправьте.</li><li>Включите голосовой режим и отвечайте вслух.</li></ol>
      <div class="prompt">${esc(talkPrompt(TK.scene, TK.cat, TK.accent, sp, TK.mood))}</div>
      <button class="btn" data-copy>${I.copy}Скопировать задание</button>
      <a class="btn ghost" style="margin-top:10px" href="https://chatgpt.com/" target="_blank" rel="noopener">${I.ext}Открыть ChatGPT</a>
    </div></div>`;
}
async function copyText(t){
  try { await navigator.clipboard.writeText(t); return true; } catch(e){}
  try { const a = document.createElement("textarea"); a.value = t; a.setAttribute("readonly",""); a.style.position = "fixed"; a.style.opacity = "0";
    document.body.appendChild(a); a.select(); a.setSelectionRange(0, t.length); const ok = document.execCommand("copy"); a.remove(); return ok; } catch(e){ return false; }
}

/* progress transfer */
const b64e = o => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
const b64d = s => JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g,"+").replace(/_/g,"/")))));
function packState(){ return { v:2, xp:S.xp, streak:S.streak, lastDay:S.lastDay, done:Object.keys(S.done), answered:S.answered, right:S.right,
  m:S.mistakes.map(m => [m.en, m.ru, m.wrong||"", m.src||"", m.fixed?1:0]) }; }
function appUrl(){ return /^https?:/.test(location.protocol) && !location.hostname.endsWith("claude.ai") ? location.origin + location.pathname : PAGES_URL; }
function mergeState(p){
  S.xp = Math.max(S.xp, p.xp||0); S.answered = Math.max(S.answered, p.answered||0); S.right = Math.max(S.right, p.right||0);
  (p.done||[]).forEach(id => { if (!S.done[id]) S.done[id] = { best:0, at:Date.now() }; });
  if ((p.streak||0) > S.streak){ S.streak = p.streak; S.lastDay = p.lastDay; }
  (p.m||[]).forEach(([en,ru,wrong,src,fixed]) => { const x = S.mistakes.find(m => m.en === en); if (x){ if (fixed) x.fixed = true; } else S.mistakes.push({ en, ru, wrong, src, fixed:!!fixed }); });
  checkStreak(); save();
}
function checkImport(){
  const m = location.hash.match(/#import=([\w-]+)/); if (!m) return;
  let p; try { p = b64d(m[1]); } catch(e){ p = null; }
  history.replaceState(null, "", location.pathname);
  if (!p) return;
  $("#overlay").innerHTML = `<div class="import"><div class="card"><h3>Перенести прогресс?</h3>
    <p class="lead">Пройдено уроков: ${(p.done||[]).length}, опыт: ${p.xp||0}, серия: ${p.streak||0}, ошибок в списке: ${(p.m||[]).length}. Текущий прогресс не потеряется, всё объединится.</p>
    <button class="btn" data-imp-yes>Перенести</button><button class="btn ghost" style="margin-top:10px" data-imp-no>Не нужно</button></div></div>`;
  window.__imp = p;
}

/* profile */
let RESET_ASK = false, LINK_NOTE = "";
function renderMe(){
  const r = rankOf(S.xp), next = RANKS[r+1];
  const pct = next ? Math.round((S.xp - RANKS[r][1]) / (next[1] - RANKS[r][1]) * 100) : 100;
  const done = LESSONS.filter(isDone).length, acc = S.answered ? Math.round(S.right / S.answered * 100) : 0;
  $("#main").innerHTML = `<div class="pane">
    <img class="banner" src="${IMG.world("owner")}" alt=""><h1>${RANK_EN[r] === "Legend" ? "Legend of Santorini" : RANK_EN[r]}</h1><p class="lead" style="margin:2px 0 0">${RANKS[r][0]}</p>
    <p class="lead">${next ? `До звания «${next[0]}» осталось ${next[1] - S.xp} опыта.` : "Высшее звание. Браво!"}</p>
    <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
    <div class="stat"><div><b>${S.xp}</b><span>опыта</span></div><div><b>${S.streak}</b><span>${plural(S.streak,"день","дня","дней")} подряд</span></div>
      <div><b>${done}/${LESSONS.length}</b><span>уроков</span></div><div><b>${acc}%</b><span>верных</span></div></div>
    <div class="card"><h3>Звания</h3><ul class="ranks">${RANKS.map((x,i) => `<li class="${i===r?"me":(i===r+1?"next":"")}">${badge(i)}<span><b style="display:block">${RANK_EN[i] === "Legend" ? "Legend of Santorini" : RANK_EN[i]}</b><small style="font-size:13px;color:var(--ink-2)">${x[0]}</small></span><span>${x[1]}</span></li>`).join("")}</ul></div>
    <div class="card"><h3>Перенос прогресса</h3>
      <p class="lead" style="font-size:15px;margin:0 0 12px">Ссылка с вашим прогрессом. Откройте её на новом телефоне или в новой версии приложения, и прогресс перенесётся.</p>
      <button class="btn ghost" data-export>${I.link}Ссылка с прогрессом</button>${LINK_NOTE ? `<div class="note-ok">${LINK_NOTE}</div>` : ""}
      <p class="lead" style="font-size:15px;margin:16px 0 8px">Если ссылки нет: выберите последний урок, который уже прошли.</p>
      <label class="sr" for="lastdone">Последний пройденный урок</label>
      <select class="in" id="lastdone"><option value="">Выберите урок</option>${LESSONS.map((l,i) => `<option value="${i}">${l.world.name}: ${esc(l.title)}</option>`).join("")}</select>
      <button class="btn ghost" style="margin-top:10px" data-restore>Отметить пройденные</button>
    </div>
    <div class="card"><h3>Голос в заданиях</h3>
      <div class="seg" style="margin:8px 0 4px" role="group" aria-label="Акцент">
        <button data-accent="en-US" aria-pressed="${S.set.accent==="en-US"}">США</button><button data-accent="en-GB" aria-pressed="${S.set.accent==="en-GB"}">Британия</button><button data-accent="en-AU" aria-pressed="${S.set.accent==="en-AU"}">Австралия</button></div>
      <div class="seg" style="margin:8px 0 4px" role="group" aria-label="Скорость">
        <button data-rate="0.75" aria-pressed="${S.set.rate==0.75}">Медленно</button><button data-rate="0.9" aria-pressed="${S.set.rate==0.9}">Обычно</button><button data-rate="1.05" aria-pressed="${S.set.rate==1.05}">Быстро</button></div>
      <button class="btn ghost" style="margin-top:8px" data-test-voice>${I.play}Проверить голос</button>
    </div>
    <div class="card"><h3>Сброс</h3><p class="lead" style="font-size:15px;margin:0 0 12px">Удалит опыт, серию, пройденные уроки и ошибки.</p>
      ${RESET_ASK ? `<div class="row"><button class="btn terra" data-reset-yes>Да, сбросить</button><button class="btn ghost" data-reset-no>Отмена</button></div>` : `<button class="btn ghost" data-reset>Начать заново</button>`}
    </div></div>`;
}

/* ---------- lesson engine ---------- */
let L = null;
function others(lesson, en){ return shuffle(lesson.p.map(p => p[0]).filter(x => x !== en)); }
const DISHES = MENU.filter(d => d.i && d.d && d.n !== "Extras");
function dishTasks(n, T){
  shuffle(DISHES).slice(0, n).forEach((d, k) => {
    const same = shuffle(DISHES.filter(x => x !== d && x.c === d.c)), any = shuffle(DISHES.filter(x => x !== d));
    const pool = (same.length >= 2 ? same : any);
    if (k % 2 === 0) T.push({ type:"dish", d, en:d.n, opts: shuffle([d.n, pool[0].n, pool[1].n]) });
    else T.push({ type:"describe", d, en:d.d, opts: shuffle([d.d, pool[0].d, pool[1].d]) });
  });
}
function buildMenu(){
  const T = [];
  dishTasks(8, T);
  const a = shuffle(DISHES).slice(0, 3);
  T.splice(3, 0, { type:"listen", en:"I recommend our " + a[0].n + ".", ru:"Рекомендую наше блюдо " + a[0].n + ".", opts: shuffle(a.map(x => "I recommend our " + x.n + ".")) });
  T.splice(7, 0, { type:"order", en:"Would you like to try the " + a[1].n + "?", ru:"Хотите попробовать " + a[1].n + "?", extra:[] });
  T.push({ type:"type", en:"The " + a[2].n + " is very popular.", ru:a[2].n + " очень популярно у гостей." });
  const clause = a[0].d.split(/[,(.;]/)[0].trim().split(" ").slice(0, 9).join(" ");
  T.push({ type:"speak", en:"I recommend our " + a[0].n + ". " + clause.charAt(0).toUpperCase() + clause.slice(1) + ".", ru:"Порекомендуйте блюдо гостю" });
  return T;
}
function build(lesson){
  if (lesson.menu) return buildMenu();
  const ps = shuffle(lesson.p), T = [];
  const mk = (type, o) => T.push(Object.assign({type}, o));
  const reps = lesson.r;
  mk("match", { pairs: shuffle(lesson.w).slice(0,5) });
  mk("listen", { en: ps[0][0], ru: ps[0][1], opts: shuffle([ps[0][0], ...others(lesson, ps[0][0]).slice(0,2)]) });
  mk("ru2en", { en: ps[1][0], ru: ps[1][1], opts: shuffle([ps[1][0], ...others(lesson, ps[1][0]).slice(0,2)]) });
  mk("gap", { en: ps[2][0], ru: ps[2][1], key: ps[2][2], opts: shuffle([ps[2][2], ...shuffle(lesson.p.filter(p => p !== ps[2]).map(p => p[2])).slice(0,2)]) });
  mk("reply", reps[0]);
  mk("order", { en: ps[3][0], ru: ps[3][1], extra: shuffle(norm(ps[4][0]).split(" ").filter(w => !norm(ps[3][0]).split(" ").includes(w))).slice(0,2) });
  mk("fix", lesson.f[0]);
  if (lesson.boss){ mk("reply", reps[1]); mk("reply", reps[2]); }
  mk("read", lesson.rd);
  mk("reply", reps[lesson.boss ? 3 : 1]);
  const ro = reps.find(r => r.ok.split(" ").length <= 12) || reps[0];
  mk("order", { en: ro.ok, ru: "Ответ на: «" + ro.sr + "»", extra: [] });
  if (lesson.f[1]) mk("fix", lesson.f[1]);
  if (lesson.dishes) dishTasks(lesson.dishes, T);
  if (lesson.boss) mk("reply", reps[4]);
  mk("type", { en: ps[4][0], ru: ps[4][1] });
  mk("speak", { en: ps[5][0], ru: ps[5][1] });
  if (lesson.boss) mk("speak", { en: reps[3].ok, ru: "Ответ критику / собеседнику" });
  return T;
}
function buildReview(){
  const items = shuffle(S.mistakes.filter(m => !m.fixed)).slice(0, 8);
  const pool = LESSONS.flatMap(l => (l.p || []).map(p => p[0]));
  return items.map((m, i) => (i % 2 && m.en.split(" ").length <= 9)
    ? { type:"order", en:m.en, ru:m.ru, extra:[], mref:m }
    : { type:"ru2en", en:m.en, ru:m.ru, opts: shuffle([m.en, m.wrong || shuffle(pool)[0], shuffle(pool.filter(x => x !== m.en))[0]]), mref:m });
}
function startLesson(id){
  const review = id === "review";
  const lesson = review ? null : LESSONS.find(l => l.id === id);
  tickHearts();
  if (!review && S.hearts <= 0) return noHearts();
  const tasks = review ? buildReview() : build(lesson);
  if (!tasks.length) return;
  L = { lesson, review, tasks, total: tasks.length, i: 0, solved: 0, first: 0, wrongs: [], seen: new Set(), xp: 0, t0: Date.now(), pick: null, state: {} };
  $("#lesson").classList.remove("hide");
  showTask();
}
const KIND = { match:"Соедините пары", listen:"Что вы услышали?", ru2en:"Как сказать по-английски?", gap:"Вставьте слово", reply:"Что вы ответите?",
  order:"Соберите фразу", fix:"Какая фраза без ошибки?", read:"Прочитайте", type:"Напишите, что услышали", speak:"Скажите вслух", dish:"Как называется блюдо?", describe:"Как описать это блюдо гостю?" };
function frame(inner, canCheck){
  const pct = Math.round(L.solved / L.total * 100);
  $("#lesson").innerHTML = `<div class="lt"><button class="close" data-quit aria-label="Выйти из урока">${I.cross}</button>
      <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
      ${L.review ? "" : `<div class="chip hearts">${I.heart}${S.hearts}</div>`}</div>
    <div class="lbody">${inner}</div>
    <div class="lfoot"><button class="btn" data-check ${canCheck ? "" : "disabled"}>Проверить</button></div>`;
}
function setCheck(on){ const b = $("[data-check]"); if (b) b.disabled = !on; }
function showTask(){
  const t = L.tasks[L.i]; L.pick = null; L.state = {};
  hideSheet();
  const k = `<div class="kind">${KIND[t.type]}</div>`;
  const opts = (list) => `<div class="opts">${list.map((o,i) => `<button class="o" data-o="${i}">${esc(o)}</button>`).join("")}</div>`;
  if (t.type === "match"){
    const L1 = shuffle(t.pairs.map((p,i) => ({ s:p[0], i }))), L2 = shuffle(t.pairs.map((p,i) => ({ s:p[1], i })));
    L.state = { left:null, right:null, left_done:0 };
    frame(`${k}<div class="match">
      <div class="opts">${L1.map(x => `<button class="o" data-ml="${x.i}">${esc(x.s)}</button>`).join("")}</div>
      <div class="opts">${L2.map(x => `<button class="o" data-mr="${x.i}">${esc(x.s)}</button>`).join("")}</div></div>`, false);
    $(".lfoot").innerHTML = `<p style="margin:0;text-align:center;color:var(--ink-2);font-size:15px">Нажмите слово слева и его перевод справа</p>`;
  } else if (t.type === "listen"){
    frame(`${k}<div class="speak"><button class="play" data-say aria-label="Прослушать">${I.play}</button><button class="play slow" data-slow aria-label="Медленнее">0.6×</button></div>${opts(t.opts)}`, false);
    say(t.en);
  } else if (t.type === "ru2en"){
    frame(`${k}<div class="q"><span class="ru">${esc(t.ru)}</span></div>${opts(t.opts)}`, false);
  } else if (t.type === "dish"){
    frame(`${k}<div class="dish">${pic(IMG.dish(t.d.i), "")}</div>${opts(t.opts)}`, false);
  } else if (t.type === "describe"){
    frame(`${k}<div class="dish">${pic(IMG.dish(t.d.i), "")}<div class="nm">${esc(t.d.n)}</div></div>${opts(t.opts)}`, false);
  } else if (t.type === "gap"){
    const line = esc(t.en).replace(new RegExp("\\b" + t.key + "\\b"), "<u id='gapw'>&nbsp;</u>");
    frame(`${k}<div class="gapline">${line}</div><div class="q"><span class="ru">${esc(t.ru)}</span></div>${opts(t.opts)}`, false);
  } else if (t.type === "reply"){
    L.state.opts = shuffle([t.ok, ...t.bad]);
    frame(`${k}<div class="who">${whoLabel()}</div><div class="bubble"><div class="av">${pic(IMG.av(whoPic()), "", "", whoInitial())}</div>
      <div class="say">${esc(t.s)}<small>${esc(t.sr)}</small><button class="mini" data-say aria-label="Прослушать">${I.play}</button></div></div>${opts(L.state.opts)}`, false);
    say(t.s);
  } else if (t.type === "order"){
    const words = t.en.split(" ");
    L.state = { bank: shuffle([...words, ...(t.extra||[])]).map((w,i) => ({ w, i, used:false })), line: [] };
    frame(`${k}<div class="q" style="margin-bottom:6px"><span class="ru">${esc(t.ru || "")}</span></div><div class="slots" id="slots"></div><div class="bank" id="bank"></div>`, false);
    drawOrder();
  } else if (t.type === "fix"){
    L.state.opts = shuffle([t.ok, t.w, t.alt]);
    frame(`${k}${opts(L.state.opts)}`, false);
  } else if (t.type === "read"){
    L.state.opts = shuffle([t.ok, ...t.bad]);
    frame(`${k}<div class="note"><div class="lbl">Записка</div>${esc(t.t)}</div><div class="q"><span class="ru">${esc(t.q)}</span></div>${opts(L.state.opts)}`, false);
  } else if (t.type === "type"){
    frame(`${k}<div class="speak"><button class="play" data-say aria-label="Прослушать">${I.play}</button><button class="play slow" data-slow aria-label="Медленнее">0.6×</button></div>
      <label class="sr" for="tin">Ваш ответ</label><textarea class="in" id="tin" placeholder="Напишите по-английски" autocomplete="off" autocapitalize="sentences" spellcheck="false"></textarea>`, false);
    say(t.en);
  } else if (t.type === "speak"){
    frame(`${k}<div class="q">${esc(t.en)}<span class="ru">${esc(t.ru)}</span></div>
      <div class="speak" style="margin-bottom:14px"><button class="play slow" data-say aria-label="Прослушать образец" style="width:auto;padding:0 16px;gap:6px;display:flex">${I.play}<span>Образец</span></button></div>
      ${REC ? `<button class="mic" data-mic>${I.mic}<span>Нажмите и говорите</span></button><div class="heard" id="heard"></div>` : ""}
      <label class="sr" for="tin">Что вы сказали</label>
      <textarea class="in ${REC ? "hide" : ""}" id="tin" placeholder="Нажмите сюда, затем микрофон на клавиатуре и скажите фразу" autocomplete="off" spellcheck="false"></textarea>
      ${REC ? "" : `<div class="hint">${I.mic}<span>Нажмите в поле, затем значок микрофона на клавиатуре iPhone и скажите фразу. Текст появится сам.</span></div>`}
      <button class="skip" data-skip>Не могу сейчас говорить</button>`, false);
  }
}
function whoLabel(){ const l = L.lesson, w = l ? l.world.id : "guests"; if (w === "owner") return l.who === "lia" ? "Лиа, управляющая" : "Микалис, владелец"; return ({guests:"Гость", team:"Сотрудник", suppliers:"Поставщик"})[w]; }
function whoPic(){ const l = L.lesson; if (!l) return "guest-anna"; if (l.boss && l.world.id === "guests") return "critic";
  if (l.world.id === "owner") return l.who === "lia" ? "manager-lia" : "owner-mikalis";
  return ({guests: L.guestPic || (L.guestPic = pickOne(GUESTS)), team:"waiter-made", suppliers:"supplier-ketut"})[l.world.id]; }
function whoInitial(){ const l = L.lesson, w = l ? l.world.id : "guests"; if (w === "owner") return l.who === "lia" ? "Л" : "М"; return ({guests:"Г", team:"С", suppliers:"П"})[w]; }
function drawOrder(){
  const s = L.state;
  $("#slots").innerHTML = s.line.map((b,k) => `<button class="tile in" data-out="${k}">${esc(b.w)}</button>`).join("");
  $("#bank").innerHTML = s.bank.map(b => `<button class="tile ${b.used ? "used" : ""}" data-in="${b.i}" ${b.used ? 'tabindex="-1" aria-hidden="true"' : ""}>${esc(b.w)}</button>`).join("");
  setCheck(s.line.length > 0);
}
function answerOf(t){
  if (["listen","ru2en","dish","describe"].includes(t.type)) return [t.opts[L.pick], t.en];
  if (t.type === "gap") return [t.opts[L.pick], t.key];
  if (["reply","fix","read"].includes(t.type)) return [L.state.opts[L.pick], t.ok];
  if (t.type === "order") return [L.state.line.map(b => b.w).join(" "), t.en];
  if (t.type === "type") return [$("#tin").value, t.en];
  if (t.type === "speak") return [L.state.heard || $("#tin").value, t.en];
}
function check(){
  const t = L.tasks[L.i];
  const [got, want] = answerOf(t);
  let ok;
  if (t.type === "type") ok = close(got, want);
  else if (t.type === "speak") ok = wordScore(got, want) >= 0.75;
  else if (t.type === "order") ok = norm(got) === norm(want);
  else ok = got === want;
  finishTask(t, ok, got);
}
function finishTask(t, ok, got){
  const firstTime = !L.seen.has(t); L.seen.add(t);
  S.answered++; if (ok) S.right++;
  if (ok){
    L.solved++; if (firstTime){ L.first++; L.xp += 10; }
    if (t.mref){ t.mref.fixed = true; t.mref.fixedAt = Date.now(); if (S.hearts < 5) S.hearts++; }
  } else {
    if (!L.review){ if (S.hearts >= 5) S.heartsAt = Date.now(); S.hearts = Math.max(0, S.hearts - 1); }
    const en = t.ok || t.en, ru = t.sr ? "Ответ на: " + t.sr : (t.d ? (t.type === "dish" ? "Название блюда" : t.d.n) : (t.ru || t.why || ""));
    if (en && t.type !== "read" && !t.mref && !S.mistakes.some(m => m.en === en && !m.fixed))
      S.mistakes.push({ en, ru, wrong: got && got.length < 120 ? got : "", src: L.lesson ? L.lesson.title : "Повторение", fixed:false });
    if (!L.wrongs.includes(t)){ L.wrongs.push(t); L.tasks.push(t); }
  }
  save();
  markOptions(t, ok);
  showSheet(t, ok);
}
function markOptions(t, ok){
  if (L.pick == null) return;
  const btns = document.querySelectorAll("[data-o]");
  const list = L.state.opts || t.opts, want = t.ok || (t.type === "gap" ? t.key : t.en);
  btns.forEach((b,i) => { b.disabled = true; if (list[i] === want) b.classList.add("right"); else if (i === L.pick && !ok) b.classList.add("wrong"); });
}
function showSheet(t, ok){
  const want = t.type === "read" ? t.ok : (t.ok || t.en);
  const why = t.d ? `<div class="why">${esc(t.type === "dish" ? t.d.d : t.d.n)}</div>` : t.why ? `<div class="why">${esc(t.why)}</div>` : (t.ru && t.type !== "ru2en" ? `<div class="why">${esc(t.ru)}</div>` : `<div class="why"></div>`);
  const sh = $("#sheet");
  sh.className = "sheet " + (ok ? "ok" : "bad");
  sh.innerHTML = ok
    ? `<h3>${I.check}${["Верно!","Отлично!","Так и говорят!","Точно!"][Math.floor(Math.random()*4)]}</h3>${t.type === "match" ? "" : `<div class="ans">${esc(want)}</div>`}${why}<button class="btn" data-next>Дальше</button>`
    : `<h3>${I.cross}Правильно так:</h3><div class="ans">${esc(want)}</div>${why}<button class="btn" data-next>Понятно</button>`;
  requestAnimationFrame(() => sh.classList.add("show"));
  if (!ok && t.type !== "read" && want) setTimeout(() => say(want), 250);
  const f = $(".lfoot"); if (f) f.style.visibility = "hidden";
  setTimeout(() => { const n = sh.querySelector("[data-next]"); if (n) n.focus({preventScroll:true}); }, 60);
}
function hideSheet(){ $("#sheet").classList.remove("show"); }
function next(){
  hideSheet();
  if (!L.review && S.hearts <= 0){ endLesson(false); return; }
  L.i++;
  if (L.i >= L.tasks.length) return endLesson(true);
  showTask();
}
function endLesson(passed){
  const lesson = L.lesson, acc = Math.round(L.first / L.total * 100);
  let bonus = 0;
  if (passed){
    bonus = L.review ? 10 : (lesson.boss ? 40 : 20) + (L.wrongs.length === 0 ? 10 : 0);
    L.xp += bonus; S.xp += L.xp;
    if (!L.review){
      const wasDone = !!S.done[lesson.id];
      S.done[lesson.id] = { best: Math.max(acc, (S.done[lesson.id]||{}).best || 0), at: Date.now() };
      if (!wasDone) JUST = lesson.id;
    }
    const t = today();
    if (S.lastDay !== t){ S.streak = (S.lastDay && dayDiff(S.lastDay, t) === 1) ? S.streak + 1 : 1; S.lastDay = t; }
  }
  save();
  const newMist = L.wrongs.length;
  const mins = Math.max(1, Math.round((Date.now() - L.t0) / 60000));
  $("#lesson").innerHTML = `<div class="end">${passed ? `<img class="plant" src="assets/img/bougainvillea.webp" alt="">` : ""}
    ${passed ? `<div class="slabwrap">${petals()}${lesson && lesson.boss ? `<div class="winpic">${pic("assets/sketches/boss-win.webp","")}<span class="bigstamp">Победа</span></div>` : `<div class="winpic">${pic(L.review ? "assets/codex/all-fixed.webp" : "assets/sketches/welcome.webp","")}<span class="bigstamp">${L.review ? "Повторено" : "Пройдено"}</span></div>`}</div>
      <h1>${L.review ? "Ошибки повторены" : (lesson.boss ? "Босс <em>побеждён!</em>" : "Ступенька <em>пройдена</em>")}</h1>
      <p class="sub">${L.review ? "<small>Исправленные фразы получили штамп.</small>" : esc(lesson.en) + "<small>" + esc(lesson.title) + "</small>"}</p>`
    : `<div class="winpic">${pic("assets/sketches/no-hearts.webp","")}</div><h1>Сердечки закончились</h1>
      <p class="lead">Повторите ошибки: каждый верный ответ возвращает сердечко. Или вернитесь позже: сердечко восстанавливается каждые 30 минут.</p>`}
    ${passed ? `<div class="stat"><div><b data-count="${passed ? L.xp : 0}">+0</b><span>опыта</span></div><div><b>${acc}%</b><span>с 1-го раза</span></div>
      <div><b>${S.streak}</b><span>${plural(S.streak,"день","дня","дней")} подряд</span></div><div><b>${mins} мин</b><span>заняло</span></div></div>` : ""}
    ${newMist && !L.review ? `<div class="card"><b>${newMist} ${plural(newMist,"фраза ушла","фразы ушли","фраз ушло")} в «Мои ошибки»</b><p class="lead" style="font-size:15px;margin:4px 0 0">${newMist === 1 ? "Она вернётся" : "Они вернутся"} в повторении.</p></div>` : ""}
    ${passed && !L.review ? `<div class="card"><b>Поговорить с учителем</b><p class="lead" style="font-size:15px;margin:4px 0 12px">Разыграйте эту сцену голосом в ChatGPT.</p>
      <button class="btn ghost" data-copy-lesson="${lesson.id}">${I.copy}Скопировать задание</button></div>` : ""}
    ${passed ? "" : `<button class="btn" data-review style="margin-bottom:10px">Повторить ошибки</button>`}
    <button class="btn ${passed ? "" : "ghost"}" data-done>${passed ? "Продолжить" : "На путь"}</button>
  </div>`;
  countUp();
}
/* XP counts up once the stamp lands */
function countUp(){
  const el = document.querySelector("[data-count]"); if (!el) return;
  const to = Number(el.dataset.count), reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !to){ el.textContent = "+" + to; return; }
  const t0 = performance.now() + 450, dur = 600;
  const step = now => { const p = Math.min(1, Math.max(0, (now - t0) / dur)); const e = 1 - Math.pow(1 - p, 3);
    el.textContent = "+" + Math.round(to * e); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
function petals(){ let h = ""; for (let i = 0; i < 12; i++){ const a = i / 12 * Math.PI * 2 + Math.random()*.3, d = 110 + Math.random()*60;
  h += `<span class="petal" style="--dx:${Math.round(Math.cos(a)*d)}px;--dy:${Math.round(Math.sin(a)*d*.7)}px;--r:${Math.round(Math.random()*360)}deg"><svg viewBox="0 0 20 20"><path d="M10 2C15 5 17 10 10 18 3 10 5 5 10 2z" fill="currentColor" fill-opacity="${(.6+Math.random()*.4).toFixed(2)}"/></svg></span>`; } return h; }
const plural = (n,a,b,c) => { const m10 = n%10, m100 = n%100; return m10===1&&m100!==11 ? a : (m10>=2&&m10<=4&&(m100<10||m100>=20) ? b : c); };
function noHearts(){
  L = { review:false, lesson:null, wrongs:[], total:1, first:0, xp:0, t0:Date.now() };
  $("#lesson").classList.remove("hide");
  endLesson(false);
}
function quit(){ if (window.speechSynthesis) speechSynthesis.cancel(); hideSheet(); $("#lesson").classList.add("hide"); $("#lesson").innerHTML = ""; L = null; render(); }

/* speech recognition (when the browser has it) */
let recog = null;
function toggleMic(btn){
  if (recog){ recog.stop(); return; }
  recog = new REC(); recog.lang = "en-US"; recog.interimResults = true; recog.maxAlternatives = 1;
  btn.classList.add("on"); btn.querySelector("span").textContent = "Говорите…";
  recog.onresult = e => { const s = Array.from(e.results).map(r => r[0].transcript).join(" "); L.state.heard = s; $("#heard").textContent = "«" + s + "»"; setCheck(!!s.trim()); };
  recog.onerror = () => { $("#tin").classList.remove("hide"); $(".mic") && $(".mic").classList.add("hide");
    $("#heard").innerHTML = `<div class="hint">${I.mic}<span>Микрофон в браузере не сработал. Нажмите в поле выше, затем микрофон на клавиатуре и скажите фразу.</span></div>`; };
  recog.onend = () => { btn.classList.remove("on"); btn.querySelector("span").textContent = "Сказать ещё раз"; recog = null; };
  try { recog.start(); } catch(e){ recog.onerror(); }
}

/* ---------- events ---------- */
document.addEventListener("click", async e => {
  const b = e.target.closest("button, a"); if (!b) return;
  const d = b.dataset;
  if (d.tab){ TAB = d.tab; RESET_ASK = false; LINK_NOTE = ""; render(); if (TAB !== "path") $("#main").scrollTop = 0; return; }
  if (d.go){ const l = LESSONS.find(x => x.id === d.go); if (isOpen(l)) startLesson(l.id); return; }
  if ("review" in d){ if (!S.mistakes.some(m => !m.fixed)){ quit(); TAB = "mist"; render(); return; } startLesson("review"); return; }
  if ("copy" in d){ const ok = await copyText(talkPrompt(TK.scene, TK.cat, TK.accent, speedOf(), TK.mood)); b.innerHTML = I.check + (ok ? "Скопировано" : "Выделите текст выше и скопируйте"); return; }
  if (d.copyLesson){ const ok = await copyText(lessonPrompt(LESSONS.find(l => l.id === d.copyLesson))); b.innerHTML = I.check + (ok ? "Скопировано. Откройте ChatGPT" : "Не удалось скопировать"); return; }
  if (d.cat){ TK.cat = d.cat; TK.scene = null; TK.accent = null; renderTalk(); return; }
  if (d.scene != null && !L){ TK.scene = TALK.scenes.filter(x => x.c === TK.cat)[Number(d.scene)]; rollPersona(); renderTalk(); return; }
  if (d.roll){ const p = persona(TK.cat); if (d.roll !== "mood"){ TK.accent = p.accent; TK.face = pickOne(GUESTS); TK.who = pickOne(["owner-mikalis","manager-lia"]); } if (d.roll !== "accent") TK.mood = p.mood; if (d.roll === "all") TK.roll = p.speedRoll; renderTalk(); return; }
  if (d.speed){ TK.speed = d.speed; if (d.speed === "rand") TK.roll = pickOne(TALK.speeds).id; renderTalk(); return; }
  if ("export" in d){ const url = appUrl() + "#import=" + b64e(packState()); const ok = await copyText(url); LINK_NOTE = ok ? "Ссылка скопирована. Отправьте её себе и откройте на нужном телефоне." : "Не удалось скопировать: " + url; renderMe(); return; }
  if ("restore" in d){ const v = $("#lastdone").value; if (v === "") return; const n = Number(v);
    LESSONS.slice(0, n + 1).forEach(l => { if (!S.done[l.id]) S.done[l.id] = { best:0, at:Date.now() }; }); S.xp = Math.max(S.xp, (n + 1) * 130); save(); LINK_NOTE = "Готово: отмечено уроков: " + (n + 1) + "."; render(); return; }
  if ("impYes" in d){ mergeState(window.__imp); $("#overlay").innerHTML = ""; TAB = "path"; render(); return; }
  if ("impNo" in d){ $("#overlay").innerHTML = ""; return; }
  if (d.accent){ S.set.accent = d.accent; pickVoice(); save(); renderMe(); return; }
  if (d.rate){ S.set.rate = Number(d.rate); save(); renderMe(); return; }
  if ("testVoice" in d){ say("Good evening! Welcome to Santorini."); return; }
  if ("reset" in d){ RESET_ASK = true; renderMe(); return; }
  if ("resetNo" in d){ RESET_ASK = false; renderMe(); return; }
  if ("resetYes" in d){ S = fresh(); save(); RESET_ASK = false; TAB = "path"; render(); return; }
  if (!L) return;
  const t = L.tasks && L.tasks[L.i];
  if ("quit" in d || "done" in d) return quit();
  if ("next" in d) return next();
  if ("check" in d) return check();
  if ("say" in d) return say(t.type === "reply" ? t.s : t.en);
  if ("slow" in d) return say(t.en, true);
  if ("skip" in d){ L.seen.add(t); L.solved++; next(); return; }
  if ("mic" in d) return toggleMic(b);
  if (d.o != null){ document.querySelectorAll("[data-o]").forEach(x => x.setAttribute("aria-pressed", "false")); b.setAttribute("aria-pressed","true"); L.pick = Number(d.o);
    if (t.type === "gap") $("#gapw").textContent = t.opts[L.pick];
    setCheck(true); return; }
  if (d.in != null){ const it = L.state.bank.find(x => x.i == d.in); if (it && !it.used){ it.used = true; L.state.line.push(it); drawOrder(); } return; }
  if (d.out != null){ const it = L.state.line.splice(Number(d.out), 1)[0]; if (it){ it.used = false; drawOrder(); } return; }
  if (d.ml != null || d.mr != null){
    const s = L.state; document.querySelectorAll(d.ml != null ? "[data-ml]" : "[data-mr]").forEach(x => x.setAttribute("aria-pressed","false"));
    b.setAttribute("aria-pressed","true");
    if (d.ml != null){ s.left = Number(d.ml); say(t.pairs[s.left][0]); } else s.right = Number(d.mr);
    if (s.left != null && s.right != null){
      const L1 = $(`[data-ml="${s.left}"]`), R1 = $(`[data-mr="${s.right}"]`);
      if (s.left === s.right){ L1.classList.add("gone"); R1.classList.add("gone"); s.left_done++; }
      else { L1.classList.add("wrong"); R1.classList.add("wrong"); s.miss = (s.miss||0) + 1; setTimeout(() => { L1.classList.remove("wrong"); R1.classList.remove("wrong"); }, 500); }
      [L1,R1].forEach(x => x.setAttribute("aria-pressed","false")); s.left = s.right = null;
      if (s.left_done === t.pairs.length) setTimeout(() => finishTask(t, true, ""), 250);
    }
  }
});
document.addEventListener("input", e => { if (e.target.id === "tin") setCheck(e.target.value.trim().length > 1); });
document.addEventListener("visibilitychange", () => { if (!document.hidden && !L){ tickHearts(); checkStreak(); save(); render(); } });
checkImport();
render();
