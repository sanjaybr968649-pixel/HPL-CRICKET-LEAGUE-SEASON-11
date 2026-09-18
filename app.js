// HPL - HAND CRICKET PREMIER LEAGUE
// SEASON 11

const teams = [
  {
    name: "Royal Kings",
    logo: "royal-kings.png",
    captain: "Sanjay",
    ground: "M. Chinnaswamy Stadium, Bengaluru"
  },
  {
    name: "Titans",
    logo: "titans.png",
    captain: "Yashas",
    ground: "Narendra Modi Stadium, Ahmedabad"
  },
  {
    name: "Chesara",
    logo: "chesara.png",
    captain: "Likith",
    ground: "Rajiv Gandhi International Cricket Stadium, Hyderabad"
  },
  {
    name: "Stars",
    logo: "stars.png",
    captain: "Karan",
    ground: "Rajasthan International Stadium, Jaipur"
  }
];

const matches = [
  {
    no: 1,
    home: "Titans",
    away: "Chesara",
    homeScore: "222/3",
    awayScore: "219/5",
    result: "Titans won by 2 wickets",
    players: [
      ["Shubman Gill",65],["Vishnu",16],["Yashas",11],["Sai","40*"],["Manav Suthar",4],
      ["Joe Root",29],["Prajwal P.K.",70],["Likith",21],["Ajinkya Rahane",49],["Vaibhav",20]
    ]
  },
  {
    no: 2,
    home: "Royal Kings",
    away: "Stars",
    homeScore: "134/2",
    awayScore: "126/5",
    result: "Royal Kings won by 3 wickets",
    players: [
      ["Sanjay",40],["Darshan",38],["Jacob Bethell","56*"],["Jordan Cox","—"],["Jasprit Bumrah","—"],
      ["Karan",31],["Mohit",42],["Ryan Rickelton",4],["Ben Mayers",44],["Shreyas Iyer",5]
    ]
  },
  {
    no: 3,
    home: "Royal Kings",
    away: "Chesara",
    homeScore: "224/5",
    awayScore: "230/4",
    result: "Chesara won by 1 wicket",
    players: [
      ["Sanjay",94],["Darshan",4],["Jacob Bethell",60],["Jordan Cox",20],["Jasprit Bumrah",34],
      ["Joe Root",34],["Prajwal P.K.",0],["Likith",0],["Ajinkya Rahane",20],["Vaibhav","176*"]
    ]
  },
  {
    no: 4,
    home: "Titans",
    away: "Royal Kings",
    homeScore: "251/5",
    awayScore: "135/5",
    result: "Titans won by 116 runs",
    players: [
      ["Shubman Gill",32],["Vishnu",46],["Yashas",124],["Sai",19],["Manav Suthar",30],
      ["Sanjay",62],["Darshan",0],["Jacob Bethell",31],["Jordan Cox",31],["Jasprit Bumrah",11]
    ]
  },
  {
    no: 5,
    home: "Titans",
    away: "Stars",
    homeScore: "34/5",
    awayScore: "39/1",
    result: "Stars won by 4 wickets",
    players: [
      ["Shubman Gill",8],["Vishnu",0],["Yashas",13],["Sai",1],["Manav Suthar",12],
      ["Karan",31],["Mohit","8*"],["Ryan Rickelton",0],["Ben Mayers","—"],["Shreyas Iyer","—"]
    ]
  },
  {
    no: 6,
    home: "Stars",
    away: "Chesara",
    homeScore: "170/5",
    awayScore: "238/5",
    result: "Chesara won by 68 runs",
    players: [
      ["Karan",43],["Mohit",29],["Ryan Rickelton",27],["Ben Mayers",34],["Shreyas Iyer",37],
      ["Joe Root",17],["Prajwal P.K.",73],["Likith",9],["Ajinkya Rahane",0],["Vaibhav",139]
    ]
  },
  {
    no: 7,
    home: "Royal Kings",
    away: "Stars",
    homeScore: "240/2",
    awayScore: "235/3",
    result: "Royal Kings won by 3 wickets",
    players: [
      ["Sanjay","206*"],["Darshan",0],["Jacob Bethell",34],["Jordan Cox","—"],["Jasprit Bumrah","—"],
      ["Karan",55],["Mohit",63],["Ryan Rickelton",0],["Ben Mayers",20],["Mohammed Siraj",97]
    ]
  }
];

const battingStats = [
  ["Yashas",112,7025,"103.3",26,25,307],
  ["Sanjay",110,6284,"69.0",25,22,247],
  ["Likith",115,6266,"66.6",18,19,386],
  ["Darshan",111,5638,"67.1",25,17,318],
  ["Vishnu",95,4335,"51.6",18,17,238]
];

const squads = {
  "Titans": [
    "Yashas (C)","Shubman Gill","Vishnu","Sai",
    "Manav Suthar","Salt","Prince Yadav","Angkrish Raghuvanshi"
  ],
  "Royal Kings": [
    "Sanjay (C)","Darshan","Jacob Bethell","Jordan Cox",
    "Jasprit Bumrah","Bhuvneshwar Kumar","Rashid Khan","Rajat Patidar"
  ],
  "Chesara": [
    "Likith (C)","Prajwal P.K.","Joe Root","Steve Smith",
    "Vaibhav","Ajinkya Rahane","MS Dhoni","Umesh Yadav"
  ],
  "Stars": [
    "Karan (C)","Mohit","Kagiso Rabada","Mohammed Siraj",
    "Ben Mayers","Ryan Rickelton","Yashraj Punja","Shreyas Iyer"
  ]
};

const points = {
  "Titans": {p:3,w:2,l:1,pts:4},
  "Chesara": {p:3,w:2,l:1,pts:4},
  "Royal Kings": {p:3,w:2,l:1,pts:4},
  "Stars": {p:3,w:1,l:2,pts:2}
};

function logo(team) {
  const t = teams.find(x => x.name === team);
  return t ? `<img src="${t.logo}" class="team-logo" alt="${team}">` : "";
}

function render() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <header class="hpl-header">
      <div class="brand">
        <img src="hpl.png" class="hpl-logo" alt="HPL">
        <div>
          <h1>HAND CRICKET PREMIER LEAGUE</h1>
          <p>HPL • SEASON 11</p>
        </div>
      </div>
    </header>

    <nav class="hpl-nav">
      <a href="#home">Home</a>
      <a href="#teams">Teams</a>
      <a href="#matches">Matches</a>
      <a href="#points">Points Table</a>
      <a href="#stats">Player Stats</a>
    </nav>

    <main class="container">

      <section id="home" class="hero">
        <div>
          <span class="badge">SEASON 11</span>
          <h2>Hand Cricket Premier League</h2>
          <p>Official HPL Season 11 website</p>
        </div>
      </section>

      <section id="teams">
        <h2 class="section-title">Teams</h2>
        <div class="team-grid">
          ${teams.map(t => `
            <div class="team-card">
              ${logo(t.name)}
              <h3>${t.name}</h3>
              <p>Captain: ${t.captain}</p>
              <small>${t.ground}</small>
            </div>
          `).join("")}
        </div>
      </section>

      <section id="matches">
        <h2 class="section-title">Season 11 Matches</h2>
        <div class="match-list">
          ${matches.map(m => `
            <article class="match-card">
              <div class="match-title">MATCH ${m.no}</div>
              <div class="teams-row">
                <div>
                  ${logo(m.home)}
                  <strong>${m.home}</strong>
                  <b>${m.homeScore}</b>
                </div>
                <span>VS</span>
                <div>
                  ${logo(m.away)}
                  <strong>${m.away}</strong>
                  <b>${m.awayScore}</b>
                </div>
              </div>
              <p class="result">${m.result}</p>
              <p class="ground">
                🏟️ ${teams.find(t => t.name === m.home).ground}
              </p>
              <details>
                <summary>View Scorecard</summary>
                <div class="scorecard">
                  <h4>${m.home}</h4>
                  ${m.players.slice(0,5).map(p => `<div><span>${p[0]}</span><b>${p[1]}</b></div>`).join("")}
                  <h4>${m.away}</h4>
                  ${m.players.slice(5).map(p => `<div><span>${p[0]}</span><b>${p[1]}</b></div>`).join("")}
                </div>
              </details>
            </article>
          `).join("")}
        </div>
      </section>

      <section id="points">
        <h2 class="section-title">Points Table</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>L</th><th>Pts</th></tr>
            </thead>
            <tbody>
              ${Object.entries(points).map(([team,x],i) => `
                <tr>
                  <td>${i+1}</td>
                  <td>${logo(team)} ${team}</td>
                  <td>${x.p}</td><td>${x.w}</td><td>${x.l}</td><td><strong>${x.pts}</strong></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <p class="note">Points shown using the recorded Season 11 results. Teams with equal points are not ranked by an unconfirmed tie-break rule.</p>
      </section>

      <section id="stats">
        <h2 class="section-title">HPL Batting Statistics</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Player</th><th>Matches</th><th>Runs</th>
                <th>Avg</th><th>50s</th><th>100s</th><th>Best</th>
              </tr>
            </thead>
            <tbody>
              ${battingStats.map(x => `
                <tr>
                  <td><strong>${x[0]}</strong></td>
                  <td>${x[1]}</td><td>${x[2]}</td><td>${x[3]}</td>
                  <td>${x[4]}</td><td>${x[5]}</td><td>${x[6]}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 class="section-title">Team Squads</h2>
        <div class="squad-grid">
          ${Object.entries(squads).map(([team,players]) => `
            <div class="squad-card">
              ${logo(team)}
              <h3>${team}</h3>
              <ol>${players.map(p => `<li>${p}</li>`).join("")}</ol>
            </div>
          `).join("")}
        </div>
      </section>

    </main>

    <footer>
      <strong>HPL — Hand Cricket Premier League</strong>
      <p>Season 11 • Official League Website</p>
    </footer>
  `;

  addStyles();
}

function addStyles() {
  const style = document.createElement("style");
  style.textContent = `
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:#07100c;color:#eef8f1;font-family:Arial,sans-serif}
    .hpl-header{background:linear-gradient(135deg,#020704,#0b2418);padding:18px 5%;border-bottom:1px solid #1b5638}
    .brand{display:flex;align-items:center;gap:15px}
    .hpl-logo{width:70px;height:70px;object-fit:contain}
    h1{font-size:22px;margin:0;color:#8df0b2}
    .brand p{margin:5px 0;color:#b7c9bf}
    .hpl-nav{position:sticky;top:0;z-index:10;background:#0b1711;display:flex;gap:20px;padding:13px 5%;overflow:auto;border-bottom:1px solid #183a28}
    .hpl-nav a{color:#fff;text-decoration:none;font-weight:bold;white-space:nowrap}
    .container{max-width:1100px;margin:auto;padding:20px}
    .hero{padding:45px 25px;margin-bottom:25px;border-radius:20px;background:linear-gradient(135deg,#0b3020,#07110c);border:1px solid #236d47}
    .hero h2{font-size:34px;margin:12px 0 5px}
    .badge{background:#35c978;color:#031008;padding:6px 12px;border-radius:20px;font-weight:bold}
    .section-title{font-size:25px;margin:35px 0 15px;color:#8df0b2}
    .team-grid,.squad-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:15px}
    .team-card,.squad-card,.match-card{background:#0b1711;border:1px solid #1b4932;border-radius:16px;padding:18px}
    .team-card{text-align:center}
    .team-logo{width:55px;height:55px;object-fit:contain;vertical-align:middle;margin-right:8px}
    .team-card .team-logo{width:90px;height:90px}
    .team-card h3,.squad-card h3{margin:8px 0;color:#fff}
    .team-card p{color:#9fe5b8}
    .team-card small{color:#9aaea2}
    .match-list{display:grid;gap:15px}
    .match-title{color:#69df9a;font-weight:bold;margin-bottom:12px}
    .teams-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;text-align:center}
    .teams-row div{display:flex;align-items:center;justify-content:center;gap:7px;flex-wrap:wrap}
    .teams-row b{display:block;width:100%;font-size:20px}
    .result{text-align:center;color:#75e7a0;font-weight:bold}
    .ground{text-align:center;color:#9aaea2;font-size:13px}
    details{margin-top:12px}
    summary{cursor:pointer;color:#8df0b2;font-weight:bold}
    .scorecard{margin-top:12px}
    .scorecard h4{color:#8df0b2;margin:12px 0 5px}
    .scorecard div{display:flex;justify-content:space-between;padding:7px;border-bottom:1px solid #183325}
    .table-wrap{overflow-x:auto;background:#0b1711;border:1px solid #1b4932;border-radius:15px}
    table{width:100%;border-collapse:collapse;min-width:500px}
    th{background:#123d28;color:#9af0b7}
    th,td{padding:12px;text-align:center;border-bottom:1px solid #193526}
    td:first-child,th:first-child{text-align:center}
    .note{font-size:13px;color:#9aaea2;margin-top:10px}
    .squad-card ol{line-height:1.9;color:#d5e4da}
    footer{text-align:center;padding:35px 15px;margin-top:40px;background:#030805;color:#9aaea2}
    @media(max-width:600px){
      h1{font-size:16px}.hero h2{font-size:25px}
      .container{padding:12px}.teams-row{font-size:13px}
      .team-logo{width:42px;height:42px}
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", render);
const players = [

const players = [

  // ================= ROYAL KINGS =================

  {
    name: "Sanjay",
    fullName: "Sanjay B R",
    team: "Royal Kings",
    captain: true,
    place: "Mandya, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Fast Bowler",
    jersey: "02",
    country: "India",
    international: false
  },

  {
    name: "Darshan",
    fullName: "Darshan",
    team: "Royal Kings",
    captain: false,
    place: "Tumkur, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Off-Spin",
    jersey: "46",
    country: "India",
    international: false
  },

  {
    name: "Bethell",
    fullName: "Jacob Bethell",
    team: "Royal Kings",
    captain: false,
    place: "England",
    role: "Batter",
    batting: "Left-Handed",
    bowling: "Slow Left-Arm Orthodox",
    jersey: "—",
    country: "England",
    international: true
  },

  {
    name: "Cox",
    fullName: "Jordan Cox",
    team: "Royal Kings",
    captain: false,
    place: "England",
    role: "Wicket Keeper",
    batting: "Right-Handed",
    bowling: "—",
    jersey: "—",
    country: "England",
    international: true
  },

  {
    name: "Bumrah",
    fullName: "Jasprit Bumrah",
    team: "Royal Kings",
    captain: false,
    place: "Ahmedabad, Gujarat, India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "93",
    country: "India",
    international: true
  },

  {
    name: "Bhuvi",
    fullName: "Bhuvneshwar Kumar",
    team: "Royal Kings",
    captain: false,
    place: "Meerut, Uttar Pradesh, India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Medium",
    jersey: "15",
    country: "India",
    international: true
  },

  {
    name: "Rashid",
    fullName: "Rashid Khan",
    team: "Royal Kings",
    captain: false,
    place: "Afghanistan",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Leg-Break Goog­ly",
    jersey: "19",
    country: "Afghanistan",
    international: true
  },

  {
    name: "Patidar",
    fullName: "Rajat Patidar",
    team: "Royal Kings",
    captain: false,
    place: "India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "—",
    country: "India",
    international: true
  },


  // ================= TITANS =================

  {
    name: "Yashas",
    fullName: "Yashas",
    team: "Titans",
    captain: true,
    place: "Tumkur, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Medium-Fast Bowler",
    jersey: "07",
    country: "India",
    international: false
  },

  {
    name: "S. Gill",
    fullName: "Shubman Gill",
    team: "Titans",
    captain: false,
    place: "Fazilka, Punjab, India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "77",
    country: "India",
    international: true
  },

  {
    name: "Vishnu",
    fullName: "Vishnu",
    team: "Titans",
    captain: false,
    place: "Chitradurga, Karnataka",
    role: "Batsman",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Fast-Medium Bowler",
    jersey: "18",
    country: "India",
    international: false
  },

  {
    name: "Sai",
    fullName: "Sai",
    team: "Titans",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "India",
    international: false
  },

  {
    name: "Manav Suthar",
    fullName: "Manav Suthar",
    team: "Titans",
    captain: false,
    place: "India",
    role: "All-Rounder",
    batting: "Left-Handed",
    bowling: "Slow Left-Arm Orthodox",
    jersey: "—",
    country: "India",
    international: true
  },

  {
    name: "Salt",
    fullName: "Phil Salt",
    team: "Titans",
    captain: false,
    place: "England",
    role: "Wicket Keeper",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "—",
    country: "England",
    international: true
  },

  {
    name: "Prince Yadav",
    fullName: "Prince Yadav",
    team: "Titans",
    captain: false,
    place: "India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "—",
    country: "India",
    international: true
  },

  {
    name: "Raghuvanshi",
    fullName: "Angkrish Raghuvanshi",
    team: "Titans",
    captain: false,
    place: "India",
    role: "Wicket Keeper",
    batting: "Right-Handed",
    bowling: "Slow Left-Arm Orthodox",
    jersey: "18",
    country: "India",
    international: true
  },


  // ================= CHESARA =================

  {
    name: "Likith",
    fullName: "Likith",
    team: "Chesara",
    captain: true,
    place: "Hassan, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Fast Bowler",
    jersey: "18",
    country: "India",
    international: false
  },

  {
    name: "Prajwal P.K.",
    fullName: "Prajwal P.K.",
    team: "Chesara",
    captain: false,
    place: "Bagalkot, Karnataka",
    role: "Batsman",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Medium-Pace Bowler",
    jersey: "06",
    country: "India",
    international: false
  },

  {
    name: "Root",
    fullName: "Joe Root",
    team: "Chesara",
    captain: false,
    place: "England",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "66",
    country: "England",
    international: true
  },

  {
    name: "Smith",
    fullName: "Steve Smith",
    team: "Chesara",
    captain: false,
    place: "Australia",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Leg-Break Goog­ly",
    jersey: "49",
    country: "Australia",
    international: true
  },

  {
    name: "Vaibhav",
    fullName: "Vaibhav",
    team: "Chesara",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "India",
    international: false
  },

  {
    name: "Rahane",
    fullName: "Ajinkya Rahane",
    team: "Chesara",
    captain: false,
    place: "India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Right-Arm Medium",
    jersey: "3",
    country: "India",
    international: true
  },

  {
    name: "MS D",
    fullName: "MS Dhoni",
    team: "Chesara",
    captain: false,
    place: "Ranchi, Jharkhand, India",
    role: "Wicket Keeper-Batter",
    batting: "Right-Handed",
    bowling: "—",
    jersey: "7",
    country: "India",
    international: true
  },

  {
    name: "Umesh",
    fullName: "Umesh Yadav",
    team: "Chesara",
    captain: false,
    place: "India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "—",
    country: "India",
    international: true
  },


  // ================= STARS =================

  {
    name: "Karan",
    fullName: "Karan",
    team: "Stars",
    captain: true,
    place: "Rajasthan",
    role: "All-Rounder",
    batting: "Left-Hand Batsman",
    bowling: "Left-Arm Fast Bowler",
    jersey: "12",
    country: "India",
    international: false
  },

  {
    name: "Mohit",
    fullName: "Mohit",
    team: "Stars",
    captain: false,
    place: "Bihar",
    role: "Batsman",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Off-Spinner",
    jersey: "44",
    country: "India",
    international: false
  },

  {
    name: "Rabada",
    fullName: "Kagiso Rabada",
    team: "Stars",
    captain: false,
    place: "South Africa",
    role: "Bowler",
    batting: "Left-Handed",
    bowling: "Right-Arm Fast",
    jersey: "25",
    country: "South Africa",
    international: true
  },

  {
    name: "Mohammed Siraj",
    fullName: "Mohammed Siraj",
    team: "Stars",
    captain: false,
    place: "Hyderabad, India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "73",
    country: "India",
    international: true
  },

  {
    name: "Ben Mayers",
    fullName: "Ben Mayers",
    team: "Stars",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "—",
    international: false
  },

  {
    name: "Rickelton",
    fullName: "Ryan Rickelton",
    team: "Stars",
    captain: false,
    place: "South Africa",
    role: "Wicket Keeper",
    batting: "Left-Handed",
    bowling: "—",
    jersey: "—",
    country: "South Africa",
    international: true
  },

  {
    name: "S. Iyer",
    fullName: "Shreyas Iyer",
    team: "Stars",
    captain: false,
    place: "Mumbai, India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Leg-Break Goog­ly",
    jersey: "96",
    country: "India",
    international: true
  },

  {
    name: "Yashraj Punja",
    fullName: "Yashraj Punja",
    team: "Stars",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "—",
    international: false
  }
const players = [

  // ================= ROYAL KINGS =================

  {
    name: "Sanjay",
    fullName: "Sanjay B R",
    team: "Royal Kings",
    captain: true,
    place: "Mandya, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Fast Bowler",
    jersey: "02",
    country: "India",
    international: false
  },

  {
    name: "Darshan",
    fullName: "Darshan",
    team: "Royal Kings",
    captain: false,
    place: "Tumkur, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Off-Spin",
    jersey: "46",
    country: "India",
    international: false
  },

  {
    name: "Bethell",
    fullName: "Jacob Bethell",
    team: "Royal Kings",
    captain: false,
    place: "England",
    role: "Batter",
    batting: "Left-Handed",
    bowling: "Slow Left-Arm Orthodox",
    jersey: "—",
    country: "England",
    international: true
  },

  {
    name: "Cox",
    fullName: "Jordan Cox",
    team: "Royal Kings",
    captain: false,
    place: "England",
    role: "Wicket Keeper",
    batting: "Right-Handed",
    bowling: "—",
    jersey: "—",
    country: "England",
    international: true
  },

  {
    name: "Bumrah",
    fullName: "Jasprit Bumrah",
    team: "Royal Kings",
    captain: false,
    place: "Ahmedabad, Gujarat, India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "93",
    country: "India",
    international: true
  },

  {
    name: "Bhuvi",
    fullName: "Bhuvneshwar Kumar",
    team: "Royal Kings",
    captain: false,
    place: "Meerut, Uttar Pradesh, India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Medium",
    jersey: "15",
    country: "India",
    international: true
  },

  {
    name: "Rashid",
    fullName: "Rashid Khan",
    team: "Royal Kings",
    captain: false,
    place: "Afghanistan",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Leg-Break Goog­ly",
    jersey: "19",
    country: "Afghanistan",
    international: true
  },

  {
    name: "Patidar",
    fullName: "Rajat Patidar",
    team: "Royal Kings",
    captain: false,
    place: "India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "—",
    country: "India",
    international: true
  },


  // ================= TITANS =================

  {
    name: "Yashas",
    fullName: "Yashas",
    team: "Titans",
    captain: true,
    place: "Tumkur, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Medium-Fast Bowler",
    jersey: "07",
    country: "India",
    international: false
  },

  {
    name: "S. Gill",
    fullName: "Shubman Gill",
    team: "Titans",
    captain: false,
    place: "Fazilka, Punjab, India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "77",
    country: "India",
    international: true
  },

  {
    name: "Vishnu",
    fullName: "Vishnu",
    team: "Titans",
    captain: false,
    place: "Chitradurga, Karnataka",
    role: "Batsman",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Fast-Medium Bowler",
    jersey: "18",
    country: "India",
    international: false
  },

  {
    name: "Sai",
    fullName: "Sai",
    team: "Titans",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "India",
    international: false
  },

  {
    name: "Manav Suthar",
    fullName: "Manav Suthar",
    team: "Titans",
    captain: false,
    place: "India",
    role: "All-Rounder",
    batting: "Left-Handed",
    bowling: "Slow Left-Arm Orthodox",
    jersey: "—",
    country: "India",
    international: true
  },

  {
    name: "Salt",
    fullName: "Phil Salt",
    team: "Titans",
    captain: false,
    place: "England",
    role: "Wicket Keeper",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "—",
    country: "England",
    international: true
  },

  {
    name: "Prince Yadav",
    fullName: "Prince Yadav",
    team: "Titans",
    captain: false,
    place: "India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "—",
    country: "India",
    international: true
  },

  {
    name: "Raghuvanshi",
    fullName: "Angkrish Raghuvanshi",
    team: "Titans",
    captain: false,
    place: "India",
    role: "Wicket Keeper",
    batting: "Right-Handed",
    bowling: "Slow Left-Arm Orthodox",
    jersey: "18",
    country: "India",
    international: true
  },


  // ================= CHESARA =================

  {
    name: "Likith",
    fullName: "Likith",
    team: "Chesara",
    captain: true,
    place: "Hassan, Karnataka",
    role: "All-Rounder",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Fast Bowler",
    jersey: "18",
    country: "India",
    international: false
  },

  {
    name: "Prajwal P.K.",
    fullName: "Prajwal P.K.",
    team: "Chesara",
    captain: false,
    place: "Bagalkot, Karnataka",
    role: "Batsman",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Medium-Pace Bowler",
    jersey: "06",
    country: "India",
    international: false
  },

  {
    name: "Root",
    fullName: "Joe Root",
    team: "Chesara",
    captain: false,
    place: "England",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Off Break",
    jersey: "66",
    country: "England",
    international: true
  },

  {
    name: "Smith",
    fullName: "Steve Smith",
    team: "Chesara",
    captain: false,
    place: "Australia",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Leg-Break Goog­ly",
    jersey: "49",
    country: "Australia",
    international: true
  },

  {
    name: "Vaibhav",
    fullName: "Vaibhav",
    team: "Chesara",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "India",
    international: false
  },

  {
    name: "Rahane",
    fullName: "Ajinkya Rahane",
    team: "Chesara",
    captain: false,
    place: "India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Right-Arm Medium",
    jersey: "3",
    country: "India",
    international: true
  },

  {
    name: "MS D",
    fullName: "MS Dhoni",
    team: "Chesara",
    captain: false,
    place: "Ranchi, Jharkhand, India",
    role: "Wicket Keeper-Batter",
    batting: "Right-Handed",
    bowling: "—",
    jersey: "7",
    country: "India",
    international: true
  },

  {
    name: "Umesh",
    fullName: "Umesh Yadav",
    team: "Chesara",
    captain: false,
    place: "India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "—",
    country: "India",
    international: true
  },


  // ================= STARS =================

  {
    name: "Karan",
    fullName: "Karan",
    team: "Stars",
    captain: true,
    place: "Rajasthan",
    role: "All-Rounder",
    batting: "Left-Hand Batsman",
    bowling: "Left-Arm Fast Bowler",
    jersey: "12",
    country: "India",
    international: false
  },

  {
    name: "Mohit",
    fullName: "Mohit",
    team: "Stars",
    captain: false,
    place: "Bihar",
    role: "Batsman",
    batting: "Right-Hand Batsman",
    bowling: "Right-Arm Off-Spinner",
    jersey: "44",
    country: "India",
    international: false
  },

  {
    name: "Rabada",
    fullName: "Kagiso Rabada",
    team: "Stars",
    captain: false,
    place: "South Africa",
    role: "Bowler",
    batting: "Left-Handed",
    bowling: "Right-Arm Fast",
    jersey: "25",
    country: "South Africa",
    international: true
  },

  {
    name: "Mohammed Siraj",
    fullName: "Mohammed Siraj",
    team: "Stars",
    captain: false,
    place: "Hyderabad, India",
    role: "Bowler",
    batting: "Right-Handed",
    bowling: "Right-Arm Fast",
    jersey: "73",
    country: "India",
    international: true
  },

  {
    name: "Ben Mayers",
    fullName: "Ben Mayers",
    team: "Stars",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "—",
    international: false
  },

  {
    name: "Rickelton",
    fullName: "Ryan Rickelton",
    team: "Stars",
    captain: false,
    place: "South Africa",
    role: "Wicket Keeper",
    batting: "Left-Handed",
    bowling: "—",
    jersey: "—",
    country: "South Africa",
    international: true
  },

  {
    name: "S. Iyer",
    fullName: "Shreyas Iyer",
    team: "Stars",
    captain: false,
    place: "Mumbai, India",
    role: "Batter",
    batting: "Right-Handed",
    bowling: "Leg-Break Goog­ly",
    jersey: "96",
    country: "India",
    international: true
  },

  {
    name: "Yashraj Punja",
    fullName: "Yashraj Punja",
    team: "Stars",
    captain: false,
    place: "—",
    role: "—",
    batting: "—",
    bowling: "—",
    jersey: "—",
    country: "—",
    international: false
  }


];
];
