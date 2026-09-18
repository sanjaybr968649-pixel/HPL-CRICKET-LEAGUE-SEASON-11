// ============================================================
// HPL - HAND CRICKET PREMIER LEAGUE
// SEASON 11 - COMPLETE APP.JS
// ============================================================

const teams = [
  {
    name: "Royal Kings",
    logo: "royal-kings.png",
    captain: "Sanjay",
    ground: "M. Chinnaswamy Stadium, Bengaluru",
    players: [
      "Sanjay", "Darshan", "Bethell", "Cox",
      "Bumrah", "Bhuvi", "Rashid", "Patidar"
    ]
  },
  {
    name: "Titans",
    logo: "titans.png",
    captain: "Yashas",
    ground: "Narendra Modi Stadium, Ahmedabad",
    players: [
      "Yashas", "S. Gill", "Vishnu", "Sai",
      "Manav Suthar", "Salt", "Prince Yadav", "Raghuvanshi"
    ]
  },
  {
    name: "Chesara",
    logo: "chesara.png",
    captain: "Likith",
    ground: "Rajiv Gandhi International Cricket Stadium, Hyderabad",
    players: [
      "Likith", "Prajwal P.K.", "Root", "Smith",
      "Vaibhav", "Rahane", "MS D", "Umesh"
    ]
  },
  {
    name: "Stars",
    logo: "stars.png",
    captain: "Karan",
    ground: "Rajasthan International Stadium, Jaipur",
    players: [
      "Karan", "Mohit", "Rabada", "Mohammed Siraj",
      "Ben Mayers", "Rickelton", "Yashraj Punja", "S. Iyer"
    ]
  }
];

// ============================================================
// PLAYER INFORMATION
// ============================================================

const players = {

  // ---------------- ROYAL KINGS ----------------

  "Sanjay": {
    team: "Royal Kings",
    captain: true,
    place: "Mandya, Karnataka",
    role: "All-Rounder",
    batting: "Right Hand Batsman",
    bowling: "Right Arm Fast Bowler",
    jersey: "02",
    professional: false
  },

  "Darshan": {
    team: "Royal Kings",
    place: "Tumkur, Karnataka",
    role: "All-Rounder",
    batting: "Right Hand Batsman",
    bowling: "Right Arm Off-Spin",
    jersey: "46",
    professional: false
  },

  "Bethell": {
    team: "Royal Kings",
    fullName: "Jacob Bethell",
    role: "All-Rounder",
    professional: true
  },

  "Cox": {
    team: "Royal Kings",
    fullName: "Jordan Cox",
    role: "Wicketkeeper-Batsman",
    professional: true
  },

  "Bumrah": {
    team: "Royal Kings",
    fullName: "Jasprit Bumrah",
    role: "Bowler",
    professional: true
  },

  "Bhuvi": {
    team: "Royal Kings",
    fullName: "Bhuvneshwar Kumar",
    role: "Bowler",
    professional: true
  },

  "Rashid": {
    team: "Royal Kings",
    fullName: "Rashid Khan",
    role: "Bowler",
    professional: true
  },

  "Patidar": {
    team: "Royal Kings",
    fullName: "Rajat Patidar",
    role: "Batsman",
    professional: true
  },

  // ---------------- TITANS ----------------

  "Yashas": {
    team: "Titans",
    captain: true,
    place: "Tumkur, Karnataka",
    role: "All-Rounder",
    batting: "Right Hand Batsman",
    bowling: "Right Arm Medium-Fast Bowler",
    jersey: "07",
    professional: false
  },

  "S. Gill": {
    team: "Titans",
    fullName: "Shubman Gill",
    role: "Batsman",
    professional: true
  },

  "Vishnu": {
    team: "Titans",
    place: "Chitradurga, Karnataka",
    role: "Batsman",
    batting: "Right Hand Batsman",
    bowling: "Right Arm Fast-Medium Bowler",
    jersey: "18",
    professional: false
  },

  "Sai": {
    team: "Titans",
    role: "Player",
    professional: false
  },

  "Manav Suthar": {
    team: "Titans",
    fullName: "Manav Suthar",
    role: "Bowler",
    professional: true
  },

  "Salt": {
    team: "Titans",
    fullName: "Phil Salt",
    role: "Wicketkeeper-Batsman",
    professional: true
  },

  "Prince Yadav": {
    team: "Titans",
    fullName: "Prince Yadav",
    role: "Player",
    professional: true
  },

  "Raghuvanshi": {
    team: "Titans",
    fullName: "Angkrish Raghuvanshi",
    role: "Batsman",
    professional: true
  },

  // ---------------- CHESARA ----------------

  "Likith": {
    team: "Chesara",
    captain: true,
    place: "Hassan, Karnataka",
    role: "All-Rounder",
    batting: "Right Hand Batsman",
    bowling: "Right Arm Fast Bowler",
    jersey: "18",
    professional: false
  },

  "Prajwal P.K.": {
    team: "Chesara",
    place: "Bagalkot, Karnataka",
    role: "Batsman",
    batting: "Right Hand Batsman",
    bowling: "Right Arm Medium-Pace Bowler",
    jersey: "06",
    professional: false
  },

  "Root": {
    team: "Chesara",
    fullName: "Joe Root",
    role: "Batsman",
    professional: true
  },

  "Smith": {
    team: "Chesara",
    fullName: "Steve Smith",
    role: "Batsman",
    professional: true
  },

  "Vaibhav": {
    team: "Chesara",
    role: "All-Rounder",
    professional: false
  },

  "Rahane": {
    team: "Chesara",
    fullName: "Ajinkya Rahane",
    role: "Batsman",
    professional: true
  },

  "MS D": {
    team: "Chesara",
    fullName: "MS Dhoni",
    role: "Wicketkeeper-Batsman",
    professional: true
  },

  "Umesh": {
    team: "Chesara",
    fullName: "Umesh Yadav",
    role: "Bowler",
    professional: true
  },

  // ---------------- STARS ----------------

  "Karan": {
    team: "Stars",
    captain: true,
    place: "Rajasthan",
    role: "All-Rounder",
    batting: "Left Hand Batsman",
    bowling: "Left Arm Fast Bowler",
    jersey: "12",
    professional: false
  },

  "Mohit": {
    team: "Stars",
    place: "Bihar",
    role: "Batsman",
    batting: "Right Hand Batsman",
    bowling: "Right Arm Off-Spinner",
    jersey: "44",
    professional: false
  },

  "Rabada": {
    team: "Stars",
    fullName: "Kagiso Rabada",
    role: "Bowler",
    professional: true
  },

  "Mohammed Siraj": {
    team: "Stars",
    fullName: "Mohammed Siraj",
    role: "Bowler",
    professional: true
  },

  "Ben Mayers": {
    team: "Stars",
    role: "Player",
    professional: false
  },

  "Rickelton": {
    team: "Stars",
    fullName: "Ryan Rickelton",
    role: "Wicketkeeper-Batsman",
    professional: true
  },

  "Yashraj Punja": {
    team: "Stars",
    role: "Player",
    professional: false
  },

  "S. Iyer": {
    team: "Stars",
    fullName: "Shreyas Iyer",
    role: "Batsman",
    professional: true
  }
};

// ============================================================
// SEASON 11 MATCHES
// ============================================================

const matches = [

  {
    no: 1,
    home: "Titans",
    away: "Chesara",
    homeScore: "222/3",
    awayScore: "219/5",
    result: "Titans won by 2 wickets",

    homePlayers: [
      ["S. Gill", 65, 0],
      ["Vishnu", 16, 0],
      ["Yashas", 11, 0],
      ["Sai", 40, 0],
      ["Manav Suthar", 4, 4]
    ],

    awayPlayers: [
      ["Root", 29, 0],
      ["Prajwal P.K.", 70, 0],
      ["Likith", 21, 0],
      ["Rahane", 49, 0],
      ["Vaibhav", 20, 3]
    ]
  },

  {
    no: 2,
    home: "Royal Kings",
    away: "Stars",
    homeScore: "134/2",
    awayScore: "126/5",
    result: "Royal Kings won by 3 wickets",

    homePlayers: [
      ["Sanjay", 40, 0],
      ["Darshan", 38, 5],
      ["Bethell", 56, 0],
      ["Cox", 0, 0],
      ["Bumrah", 0, 0]
    ],

    awayPlayers: [
      ["Karan", 31, 1],
      ["Mohit", 42, 0],
      ["Rickelton", 4, 0],
      ["Ben Mayers", 44, 0],
      ["S. Iyer", 5, 0]
    ]
  },

  {
    no: 3,
    home: "Royal Kings",
    away: "Chesara",
    homeScore: "224/5",
    awayScore: "230/4",
    result: "Chesara won by 1 wicket",

    homePlayers: [
      ["Sanjay", 94, 1],
      ["Darshan", 4, 3],
      ["Bethell", 60, 0],
      ["Cox", 20, 0],
      ["Bumrah", 34, 0]
    ],

    awayPlayers: [
      ["Root", 34, 0],
      ["Prajwal P.K.", 0, 0],
      ["Likith", 0, 0],
      ["Rahane", 20, 0],
      ["Vaibhav", 176, 4]
    ]
  },

  {
    no: 4,
    home: "Titans",
    away: "Royal Kings",
    homeScore: "251/5",
    awayScore: "135/5",
    result: "Titans won by 116 runs",

    homePlayers: [
      ["S. Gill", 32, 0],
      ["Vishnu", 46, 0],
      ["Yashas", 124, 0],
      ["Sai", 19, 0],
      ["Manav Suthar", 30, 4]
    ],

    awayPlayers: [
      ["Sanjay", 62, 0],
      ["Darshan", 0, 4],
      ["Bethell", 31, 0],
      ["Cox", 31, 0],
      ["Bumrah", 11, 0]
    ]
  },

  {
    no: 5,
    home: "Titans",
    away: "Stars",
    homeScore: "34/5",
    awayScore: "39/1",
    result: "Stars won by 4 wickets",

    homePlayers: [
      ["S. Gill", 8, 0],
      ["Vishnu", 0, 0],
      ["Yashas", 13, 0],
      ["Sai", 1, 0],
      ["Manav Suthar", 12, 1]
    ],

    awayPlayers: [
      ["Karan", 31, 4],
      ["Mohit", 8, 0],
      ["Rickelton", 0, 0],
      ["Ben Mayers", 0, 0],
      ["S. Iyer", 0, 0]
    ]
  },

  {
    no: 6,
    home: "Stars",
    away: "Chesara",
    homeScore: "170/5",
    awayScore: "238/5",
    result: "Chesara won by 68 runs",

    homePlayers: [
      ["Karan", 43, 4],
      ["Mohit", 29, 0],
      ["Rickelton", 27, 0],
      ["Ben Mayers", 34, 0],
      ["S. Iyer", 37, 0]
    ],

    awayPlayers: [
      ["Root", 17, 0],
      ["Prajwal P.K.", 73, 0],
      ["Likith", 9, 0],
      ["Rahane", 0, 0],
      ["Vaibhav", 139, 5]
    ]
  },

  {
    no: 7,
    home: "Royal Kings",
    away: "Stars",
    homeScore: "240/2",
    awayScore: "235/3",
    result: "Royal Kings won by 3 wickets",

    homePlayers: [
      ["Sanjay", 206, 0],
      ["Darshan", 0, 5],
      ["Bethell", 34, 0],
      ["Cox", 0, 0],
      ["Bumrah", 0, 0]
    ],

    awayPlayers: [
      ["Karan", 55, 1],
      ["Mohit", 63, 0],
      ["Rickelton", 0, 0],
      ["Ben Mayers", 20, 0],
      ["Mohammed Siraj", 97, 0]
    ]
  }

];

// ============================================================
// CALCULATE SEASON 11 PLAYER RECORDS
// ============================================================

const records = {};

Object.keys(players).forEach(name => {
  records[name] = {
    matches: 0,
    runs: 0,
    wickets: 0,
    fifties: 0,
    hundreds: 0,
    best: 0,
    average: 0
  };
});

matches.forEach(match => {

  [...match.homePlayers, ...match.awayPlayers].forEach(row => {

    const name = row[0];
    const runs = Number(row[1]) || 0;
    const wickets = Number(row[2]) || 0;

    if (!records[name]) {
      records[name] = {
        matches: 0,
        runs: 0,
        wickets: 0,
        fifties: 0,
        hundreds: 0,
        best: 0,
        average: 0
      };
    }

    records[name].matches++;
    records[name].runs += runs;
    records[name].wickets += wickets;

    if (runs >= 100) records[name].hundreds++;
    else if (runs >= 50) records[name].fifties++;

    if (runs > records[name].best) {
      records[name].best = runs;
    }
  });
});

// Average based on supplied Season 11 match appearances.
// Not-out information is only used where explicitly supplied.
Object.keys(records).forEach(name => {

  if (records[name].matches > 0) {
    records[name].average =
      (records[name].runs / records[name].matches).toFixed(1);
  } else {
    records[name].average = "—";
  }

});

// ============================================================
// POINTS TABLE
// ============================================================

const pointsTable = [
  {
    team: "Titans",
    played: 3,
    won: 2,
    lost: 1,
    points: 4
  },
  {
    team: "Chesara",
    played: 3,
    won: 2,
    lost: 1,
    points: 4
  },
  {
    team: "Royal Kings",
    played: 3,
    won: 2,
    lost: 1,
    points: 4
  },
  {
    team: "Stars",
    played: 3,
    won: 1,
    lost: 2,
    points: 2
  }
];

// ============================================================
// SEASON TOP PERFORMERS
// ============================================================

function getTopRunScorers() {
  return Object.entries(records)
    .filter(x => x[1].runs > 0)
    .sort((a, b) => b[1].runs - a[1].runs);
}

function getTopWicketTakers() {
  return Object.entries(records)
    .filter(x => x[1].wickets > 0)
    .sort((a, b) => b[1].wickets - a[1].wickets);
}

function getBestAverage() {
  return Object.entries(records)
    .filter(x => x[1].matches > 0)
    .sort((a, b) => Number(b[1].average) - Number(a[1].average));
}

function getMostHundreds() {
  return Object.entries(records)
    .filter(x => x[1].hundreds > 0)
    .sort((a, b) => b[1].hundreds - a[1].hundreds);
}

function getMostFifties() {
  return Object.entries(records)
    .filter(x => x[1].fifties > 0)
    .sort((a, b) => b[1].fifties - a[1].fifties);
}

function getHighestScores() {
  return Object.entries(records)
    .filter(x => x[1].best > 0)
    .sort((a, b) => b[1].best - a[1].best);
}

// ============================================================
// HTML HELPERS
// ============================================================

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function playerDisplayName(name) {
  return players[name]?.fullName || name;
}

function teamLogo(teamName) {
  const team = teams.find(t => t.name === teamName);
  return team ? team.logo : "";
}

// ============================================================
// GLOBAL CSS
// ============================================================

const style = document.createElement("style");

style.textContent = `

*{
  box-sizing:border-box;
}

body{
  margin:0;
  font-family:Arial,Helvetica,sans-serif;
  background:#050806;
  color:#f5fff7;
}

button{
  font:inherit;
}

a{
  color:inherit;
}

.hpl-app{
  min-height:100vh;
  background:
    radial-gradient(circle at top right,#12351f 0,transparent 35%),
    #050806;
}

.hpl-header{
  position:sticky;
  top:0;
  z-index:100;
  background:rgba(3,8,5,.96);
  border-bottom:1px solid #1b4729;
  backdrop-filter:blur(12px);
}

.header-inner{
  max-width:1250px;
  margin:auto;
  min-height:72px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
  padding:10px 18px;
}

.brand{
  display:flex;
  align-items:center;
  gap:12px;
  font-weight:900;
  letter-spacing:.5px;
}

.brand img{
  width:48px;
  height:48px;
  object-fit:contain;
}

.brand-title{
  font-size:18px;
}

.brand-sub{
  color:#7bd995;
  font-size:11px;
  margin-top:3px;
}

.nav{
  display:flex;
  gap:7px;
  overflow:auto;
}

.nav button{
  background:#0a140e;
  color:#bceac8;
  border:1px solid #1c4328;
  padding:9px 12px;
  border-radius:9px;
  cursor:pointer;
  white-space:nowrap;
}

.nav button:hover,
.nav button.active{
  background:#143b20;
  color:#fff;
  border-color:#37b85d;
}

.container{
  max-width:1250px;
  margin:auto;
  padding:25px 18px 60px;
}

.hero{
  padding:35px 0 25px;
}

.hero h1{
  margin:0;
  font-size:clamp(30px,6vw,58px);
  line-height:1;
}

.green{
  color:#52d878;
}

.hero p{
  color:#a7c8af;
  max-width:700px;
}

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:15px;
}

.card{
  background:linear-gradient(145deg,#0b160e,#071009);
  border:1px solid #1a4528;
  border-radius:16px;
  padding:18px;
  box-shadow:0 10px 35px rgba(0,0,0,.22);
}

.card h3{
  margin:0 0 10px;
}

.stat-number{
  font-size:30px;
  font-weight:900;
  color:#64df83;
}

.muted{
  color:#8eab95;
}

.team-card{
  position:relative;
  overflow:hidden;
}

.team-logo{
  width:80px;
  height:80px;
  object-fit:contain;
  display:block;
  margin-bottom:12px;
}

.section-title{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  margin:30px 0 14px;
}

.section-title h2{
  margin:0;
}

.match-card{
  background:#09120c;
  border:1px solid #1b482a;
  border-radius:16px;
  overflow:hidden;
  margin-bottom:16px;
}

.match-top{
  padding:15px 17px;
  background:#0c1b11;
  display:flex;
  justify-content:space-between;
  gap:10px;
  flex-wrap:wrap;
}

.match-no{
  color:#72e590;
  font-weight:800;
}

.result{
  color:#bff5ca;
  font-weight:800;
}

.match-teams{
  display:grid;
  grid-template-columns:1fr auto 1fr;
  align-items:center;
  gap:12px;
  padding:20px;
}

.match-team{
  text-align:center;
}

.match-team img{
  width:65px;
  height:65px;
  object-fit:contain;
}

.score{
  font-size:26px;
  font-weight:900;
}

.vs{
  color:#6b8b73;
  font-weight:900;
}

.score-table{
  width:100%;
  border-collapse:collapse;
}

.score-table th,
.score-table td{
  padding:10px;
  border-bottom:1px solid #173822;
  text-align:left;
}

.score-table th{
  color:#75df90;
  background:#0b180f;
}

.score-table td:nth-child(2),
.score-table td:nth-child(3){
  text-align:center;
}

.scroll{
  overflow-x:auto;
}

.points-table{
  min-width:650px;
}

.badge{
  display:inline-block;
  padding:5px 8px;
  border-radius:20px;
  background:#123b20;
  color:#8ceca5;
  font-size:12px;
}

.player-card{
  display:flex;
  align-items:center;
  gap:14px;
}

.avatar{
  width:58px;
  height:58px;
  border-radius:50%;
  background:#12351e;
  display:grid;
  place-items:center;
  font-weight:900;
  font-size:20px;
  color:#8be9a2;
  border:1px solid #2b7040;
}

.player-info h3{
  margin:0 0 5px;
}

.player-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:14px;
}

.profile{
  background:#09130d;
  border:1px solid #1a4327;
  border-radius:15px;
  padding:16px;
}

.profile-top{
  display:flex;
  gap:14px;
  align-items:center;
  margin-bottom:15px;
}

.profile-top .avatar{
  width:68px;
  height:68px;
}

.profile-name{
  font-size:20px;
  font-weight:900;
}

.profile-full{
  color:#68d984;
  font-size:13px;
  margin-top:4px;
}

.profile-row{
  display:flex;
  justify-content:space-between;
  gap:10px;
  padding:8px 0;
  border-bottom:1px solid #142d1c;
  font-size:14px;
}

.profile-row span:first-child{
  color:#78977f;
}

.profile-row span:last-child{
  text-align:right;
}

.performance-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:14px;
}

.performance{
  background:linear-gradient(145deg,#0d1c12,#071009);
  border:1px solid #1e4d2d;
  border-radius:16px;
  padding:18px;
}

.performance .icon{
  font-size:28px;
}

.performance h3{
  margin:9px 0 3px;
}

.performance .value{
  font-size:25px;
  color:#65df84;
  font-weight:900;
}

.footer{
  border-top:1px solid #173a22;
  margin-top:35px;
  padding:25px 18px;
  text-align:center;
  color:#72927a;
}

.notice{
  border:1px solid #345f3e;
  background:#0d1d12;
  border-radius:12px;
  padding:13px;
  color:#a9cdb1;
  margin:15px 0;
}

@media(max-width:700px){

  .header-inner{
    align-items:flex-start;
    flex-direction:column;
  }

  .nav{
    width:100%;
  }

  .container{
    padding:18px 12px 45px;
  }

  .match-teams{
    grid-template-columns:1fr;
  }

  .vs{
    order:2;
  }

  .score{
    font-size:22px;
  }

  .match-team img{
    width:52px;
    height:52px;
  }

  .score-table{
    min-width:500px;
  }
}

`;

document.head.appendChild(style);

// ============================================================
// PAGE RENDER
// ============================================================

const app = document.getElementById("app");

function render() {

  app.innerHTML = `

  <div class="hpl-app">

    <header class="hpl-header">

      <div class="header-inner">

        <div class="brand">
          <img src="hpl.png" alt="HPL">
          <div>
            <div class="brand-title">HAND CRICKET PREMIER LEAGUE</div>
            <div class="brand-sub">SEASON 11</div>
          </div>
        </div>

        <nav class="nav">
          <button class="active" onclick="showSection('home',this)">Home</button>
          <button onclick="showSection('teams',this)">Teams</button>
          <button onclick="showSection('players',this)">Players</button>
          <button onclick="showSection('matches',this)">Matches</button>
          <button onclick="showSection('points',this)">Points Table</button>
          <button onclick="showSection('stats',this)">Stats</button>
        </nav>

      </div>

    </header>

    <main class="container">

      <section id="home">

        <div class="hero">

          <div class="badge">HPL • SEASON 11</div>

          <h1>
            Hand Cricket
            <spa
