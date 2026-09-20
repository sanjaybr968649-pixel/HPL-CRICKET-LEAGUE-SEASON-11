const $=s=>document.querySelector(s);
const findPlayer=id=>PLAYERS.find(p=>p.id===id)||PLAYERS.find(p=>p.name.toLowerCase().replaceAll(" ","-")===id);
const teamLogo=t=>TEAMS[t]?.logo||"assets/logos/hpl-logo.png";
function cardMatch(m){
 return `<a class="card match" href="#match/${m.id}">
   <div><div class="teamline"><img class="team-logo" src="${teamLogo(m.a)}">${m.a}</div><div class="muted">vs</div><div class="teamline"><img class="team-logo" src="${teamLogo(m.b)}">${m.b}</div></div>
   <div class="score">${m.sa}<br>${m.sb}<div class="status">${m.result}</div></div>
   <div style="text-align:right" class="muted">🏟️<br>${m.venue}</div>
 </a>`;
}
function playerPhoto(p){return p.photo||"assets/logos/hpl-logo.png"}
function render(){
 const hash=location.hash||"#home", [route,param]=hash.slice(1).split("/");
 if(route==="player"&&param)return playerPage(param);
 if(route==="team"&&param)return teamPage(decodeURIComponent(param));
 if(route==="match"&&param)return matchPage(Number(param));
 if(route==="players")return playersPage();
 if(route==="teams")return teamsPage();
 if(route==="matches")return matchesPage();
 if(route==="season11")return seasonPage();
 if(route==="stats")return statsPage();
 if(route==="records")return recordsPage();
 return homePage();
}
function homePage(){page.innerHTML=`
<section class="hero"><div class="hero-copy"><div class="eyebrow">WELCOME TO HPL</div><h1>HAND CRICKET<br>PREMIER LEAGUE</h1><p>Season 11 live matches, teams, players, scorecards, statistics and all-time HPL records.</p><a class="btn gold" href="#season11">Explore Season 11</a></div><img class="hero-logo" src="assets/logos/hpl-logo.png"></section>
<div class="section-title"><h2>Live / Recent Matches</h2><a class="muted" href="#matches">View all →</a></div><div class="grid">${MATCHES.slice(0,3).map(cardMatch).join("")}</div>
<div class="section-title"><h2>HPL Present Live Season</h2></div><div class="grid">${["Matches","Points Table","Teams","Stats","Venues","Players"].map((x,i)=>`<a class="card" href="#season11"><div class="eyebrow">SEASON 11</div><h3>${["🏏","🏆","👥","📊","🏟️","⭐"][i]} ${x}</h3><div class="muted">Open Season 11 dashboard</div></a>`).join("")}</div>
<div class="section-title"><h2>All-Time Records</h2></div><div class="grid two">${["Most Runs","Highest Individual Score","Most Wickets","Best Bowling"].map(x=>`<a class="card record-card" href="#records"><div class="muted">${x}</div><strong>HPL</strong></a>`).join("")}</div>`}
function matchesPage(){page.innerHTML=`<div class="section-title"><h2>Season 11 Matches</h2></div>${MATCHES.map(cardMatch).join("")}`}
function seasonPage(){page.innerHTML=`<section class="hero"><div class="hero-copy"><div class="eyebrow">HPL PRESENT LIVE SEASON</div><h1>SEASON 11</h1><p>Season-specific matches, points table, teams, venues and stats.</p></div><img class="hero-logo" src="assets/logos/hpl-logo.png"></section>
<div class="section-title"><h2>Season 11</h2></div><div class="grid">${["Matches","Points Table","Teams","Stats","Venues"].map(x=>`<a class="card" href="${x==="Matches"?"#matches":x==="Teams"?"#teams":x==="Stats"?"#stats":"#season11"}"><h3>${x}</h3><div class="muted">${x==="Venues"?"International grounds":"Season 11 data"}</div></a>`).join("")}</div>
<div class="section-title"><h2>Points Table</h2></div>${pointsTable()}`}
function pointsTable(){return `<div class="card table-wrap"><table class="table"><thead><tr><th>Team</th><th>Matches</th><th>Wins</th><th>Losses</th><th>Points</th><th>NRR</th></tr></thead><tbody>
${["Royal Kings","Titans","Chasers","Stars"].map(t=>`<tr><td><a href="#team/${encodeURIComponent(t)}">${t}</a></td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>`).join("")}</tbody></table></div>`}
function teamsPage(){page.innerHTML=`<div class="section-title"><h2>Season 11 Teams</h2></div><div class="grid two">${Object.entries(TEAMS).map(([n,t])=>`<a class="card team-card" href="#team/${encodeURIComponent(n)}"><img src="${t.logo}"><div><h3>${n}</h3><div class="muted">Captain: ${t.captain}</div><div class="muted">🏟️ ${t.ground}</div></div></a>`).join("")}</div>`}
function teamPage(name){const t=TEAMS[name];const squad=PLAYERS.filter(p=>p.team===name);page.innerHTML=`<div class="player-head"><img class="player-photo" src="${t.logo}"><div><h1>${name}</h1><div class="muted">Season 11 · Captain: ${t.captain}</div><div class="pill">🏟️ ${t.ground}</div></div></div><div class="section-title"><h2>Squad</h2></div><div class="grid">${squad.map(p=>`<a class="card team-card" href="#player/${p.id}"><img class="player-photo" style="width:64px;height:64px" src="${playerPhoto(p)}"><div><h3>${p.name}</h3><div class="muted">${p.role}</div><div class="muted">Jersey ${p.jersey||"—"}</div></div></a>`).join("")}</div>`}
function playersPage(){page.innerHTML=`<div class="section-title"><h2>Players</h2><span class="muted">${PLAYERS.length} profiles</span></div><div class="grid">${PLAYERS.map(p=>`<a class="card team-card" href="#player/${p.id}"><img class="player-photo" style="width:70px;height:70px" src="${playerPhoto(p)}"><div><h3>${p.name}</h3><div class="muted">${p.team}</div><div class="muted">${p.role}</div></div></a>`).join("")}</div>`}
function playerPage(id){const p=findPlayer(id);if(!p)return playersPage();const past=p.past||{matches:0,runs:0,avg:"—",hundreds:0,fifties:0,highest:"—"};page.innerHTML=`
<div class="player-head"><img class="player-photo" src="${playerPhoto(p)}"><div><div class="eyebrow">${p.debut?"HPL DEBUTANT":"HPL PLAYER"}</div><h1>${p.name}</h1><div class="muted">${p.team} ${p.jersey?`· Jersey ${p.jersey}`:""}</div><div class="pill">${p.role}</div><div class="pill">${p.bat}</div><div class="pill">${p.bowl}</div><div class="pill">${p.place}</div></div></div>
<div class="tabs"><button class="active">HPL Career</button><button>Season 11</button><button>IPL / T20 / Other Career</button></div>
<div class="section"><h2>🏏 HPL Career</h2><div class="grid">${[["Matches",past.matches],["Runs",past.runs],["Highest Score",past.highest],["Average",past.avg],["100s",past.hundreds],["50s",past.fifties],["Wickets","—"],["Best Bowling","—"]].map(([a,b])=>`<div class="card stat"><span>${a}</span><strong>${b}</strong></div>`).join("")}</div></div>
<div class="section"><h2>🔥 Season 11</h2><div class="grid">${["Matches","Runs","Highest Score","Average","100s","50s","Wickets","Best Bowling"].map(a=>`<div class="card stat"><span>${a}</span><strong>—</strong></div>`).join("")}</div></div>
<div class="section"><h2>🏆 Player of the Match</h2><div class="muted">POTM will be generated from match performance (runs + wickets) once complete score data is entered.</div></div>
<div class="section"><h2>🌍 Existing Cricket Career</h2><div class="muted">${p.debut?"Debutant — no previous HPL career data.":"For real-world players, IPL / T20 / domestic / international career statistics can be added here separately from HPL stats."}</div></div>`}
function matchPage(id){const m=MATCHES.find(x=>x.id===id);if(!m)return matchesPage();page.innerHTML=`<div class="section-title"><h2>${m.a} vs ${m.b}</h2><span class="muted">Season 11</span></div><div class="card"><div class="match"><div class="teamline"><img class="team-logo" src="${teamLogo(m.a)}">${m.a}<strong>${m.sa}</strong></div><div class="score">FINAL</div><div class="teamline right"><strong>${m.sb}</strong>${m.b}<img class="team-logo" src="${teamLogo(m.b)}"></div></div><p class="muted">🏟️ ${m.venue}</p><h3>${m.result}</h3></div><div class="section-title"><h2>Scorecard</h2></div><div class="card table-wrap"><table class="table"><thead><tr><th>Player</th><th>Runs</th></tr></thead><tbody>${m.bat.map(([n,r])=>{const p=PLAYERS.find(x=>x.name===n);return `<tr><td>${p?`<a href="#player/${p.id}">${n}</a>`:n}</td><td class="num">${r}</td></tr>`}).join("")}</tbody></table></div><div class="section"><h2>⭐ Player of the Match</h2><div class="muted">Auto-selected from verified runs + wicket data when the full scorecard is entered.</div></div>`}
function statsPage(){page.innerHTML=`<div class="section-title"><h2>Season 11 Stats</h2></div><div class="grid two"><div class="card"><h3>🏏 Batting</h3><p>Most Runs</p><p>Highest Individual Score</p><p>Best Average</p><p>Best Strike Rate</p><p>Most 100s</p><p>Most 50s</p></div><div class="card"><h3>🎯 Bowling</h3><p>Most Wickets</p><p>Best Bowling Figures</p><p>Best Bowling Average</p><p>Best Economy</p><p>Most 5-Wicket Hauls</p></div></div>`}
function recordsPage(){page.innerHTML=`<div class="section-title"><h2>All-Time HPL Records</h2></div><div class="grid two">${["Most Runs","Highest Individual Score","Best Average","Best Strike Rate","Most 100s","Most 50s","Most Wickets","Best Bowling Figures","Best Bowling Average","Best Economy","Most 5-Wicket Hauls"].map(x=>`<div class="card"><div class="muted">${x}</div><h3>Data updates automatically</h3></div>`).join("")}</div>`}
$("#enterBtn").onclick=()=>{$("#splash").classList.add("hidden");location.hash="#home"};
window.addEventListener("hashchange",render);render();
