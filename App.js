import React, { useState } from "react";
import "./App.css";

const teams = {
  Titans: [
    "Yashas",
    "S.Gill",
    "Vishnu",
    "Sai",
    "Manau",
    "Juli",
    "Prince Yadav",
    "Raghuvanshi",
  ],

  "Royal Kings": [
    "Sanjay",
    "Dhurvhan",
    "Bethall",
    "Lal",
    "Bumrah",
    "Bhui",
    "Rashid",
    "Patidar",
  ],

  Chasers: [
    "J.Root",
    "P.K",
    "Rohith",
    "Rahana",
    "Vaibhav",
    "MSD",
    "Lokesh",
  ],

  Stars: [
    "Karan",
    "Mohit",
    "Rohithan",
    "Ben Mayers",
    "M.Sury",
    "Labanda",
    "Yash Raj",
    "S.Taylor",
  ],
};

const matches = [
  {
    match: "4th",
    team1: "Titans",
    score1: "25/5",
    team2: "Royal Kings",
    score2: "135/5",
    winner: "Royal Kings",
    result: "won by 110 runs",
  },
  {
    match: "5th",
    team1: "Titans",
    score1: "34/5",
    team2: "Stars",
    score2: "39/1",
    winner: "Stars",
    result: "won by 4 wickets",
  },
  {
    match: "6th",
    team1: "Stars",
    score1: "170/5",
    team2: "Chasers",
    score2: "238/5",
    winner: "Chasers",
    result: "won by 68 runs",
  },
  {
    match: "7th",
    team1: "Royal Kings",
    score1: "240/2",
    team2: "Stars",
    score2: "235/5",
    winner: "Royal Kings",
    result: "won by 3 wickets",
  },
  {
    match: "Season II - 1st",
    team1: "Titans",
    score1: "222/3",
    team2: "Chasers",
    score2: "219/5",
    winner: "Titans",
    result: "won by 2 wickets",
  },
  {
    match: "Season II - 2nd",
    team1: "Royal Kings",
    score1: "134/2",
    team2: "Stars",
    score2: "126/5",
    winner: "Royal Kings",
    result: "won by 3 wickets",
  },
  {
    match: "Season II - 3rd",
    team1: "Royal Kings",
    score1: "224/5",
    team2: "Chasers",
    score2: "230/4",
    winner: "Chasers",
    result: "won by 1 wicket",
  },
];

const playerStats = [
  {
    name: "Yashas",
    matches: 112,
    runs: 7025,
    avg: "103.3",
    fifties: 26,
    hundreds: 25,
  },
  {
    name: "Sanjay",
    matches: 110,
    runs: 6284,
    avg: "69.0",
    fifties: 25,
    hundreds: 22,
  },
  {
    name: "Rohith",
    matches: 115,
    runs: 6266,
    avg: "66.6",
    fifties: 18,
    hundreds: 19,
  },
  {
    name: "Darshan",
    matches: 111,
    runs: 5838,
    avg: "67.1",
    fifties: 25,
    hundreds: 17,
  },
  {
    name: "Vishnu",
    matches: 95,
    runs: 4335,
    avg: "54.6",
    fifties: 18,
    hundreds: 17,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          🏏 <span>HPL</span>
        </div>

        <p>HAND CRICKET LEAGUE</p>
      </header>

      {/* NAVIGATION */}
      <nav className="navbar">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("teams")}>Teams</button>
        <button onClick={() => setPage("matches")}>Matches</button>
        <button onClick={() => setPage("stats")}>Stats</button>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <main className="container">

          <section className="hero">
            <h1>🏆 HPL</h1>
            <h2>HAND CRICKET LEAGUE</h2>
            <p>
              Welcome to the official Hand Cricket League
            </p>

            <button
              className="main-button"
              onClick={() => setPage("matches")}
            >
              View Matches
            </button>
          </section>

          <h2 className="section-title">Teams</h2>

          <div className="team-grid">
            {Object.keys(teams).map((team) => (
              <div
                className="team-card"
                key={team}
                onClick={() => {
                  setSelectedTeam(team);
                  setPage("team");
                }}
              >
                <div className="team-icon">🏏</div>
                <h3>{team}</h3>
                <p>{teams[team].length} Players</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">Latest Results</h2>

          {matches.slice(-3).reverse().map((match, index) => (
            <div className="match-card" key={index}>
              <span>{match.match}</span>

              <div>
                <strong>{match.team1}</strong>
                <b>{match.score1}</b>
              </div>

              <div className="vs">VS</div>

              <div>
                <strong>{match.team2}</strong>
                <b>{match.score2}</b>
              </div>

              <p>
                🏆 {match.winner} {match.result}
              </p>
            </div>
          ))}
        </main>
      )}

      {/* TEAMS */}
      {page === "teams" && (
        <main className="container">
          <h1 className="page-title">🏏 HPL Teams</h1>

          <div className="team-grid">
            {Object.keys(teams).map((team) => (
              <div
                className="team-card"
                key={team}
                onClick={() => {
                  setSelectedTeam(team);
                  setPage("team");
                }}
              >
                <div className="team-icon">🏆</div>
                <h2>{team}</h2>
                <p>{teams[team].length} Players</p>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* SINGLE TEAM */}
      {page === "team" && selectedTeam && (
        <main className="container">

          <button
            className="back-button"
            onClick={() => setPage("teams")}
          >
            ← Back
          </button>

          <div className="team-header">
            <div className="big-icon">🏏</div>
            <h1>{selectedTeam}</h1>
            <p>HPL Team Squad</p>
          </div>

          <div className="players">
            {teams[selectedTeam].map((player, index) => (
              <div className="player-card" key={player}>
                <span>{index + 1}</span>
                <strong>{player}</strong>
              </div>
            ))}
          </div>

        </main>
      )}

      {/* MATCHES */}
      {page === "matches" && (
        <main className="container">
          <h1 className="page-title">🏏 Match Results</h1>

          {matches.map((match, index) => (
            <div className="match-card large" key={index}>

              <h3>{match.match} Match</h3>

              <div className="score-row">
                <div>
                  <strong>{match.team1}</strong>
                  <b>{match.score1}</b>
                </div>

                <span>VS</span>

                <div>
                  <strong>{match.team2}</strong>
                  <b>{match.score2}</b>
                </div>
              </div>

              <div className="winner">
                🏆 Winner: {match.winner}
                <br />
                {match.result}
              </div>

            </div>
          ))}
        </main>
      )}

      {/* STATS */}
      {page === "stats" && (
        <main className="container">

          <h1 className="page-title">📊 Player Statistics</h1>

          <div className="stats-table">

            <div className="stats-head">
              <span>Player</span>
              <span>MAT</span>
              <span>Runs</span>
              <span>Avg</span>
              <span>50s</span>
              <span>100s</span>
            </div>

            {playerStats.map((player) => (
              <div className="stats-row" key={player.name}>
                <strong>{player.name}</strong>
                <span>{player.matches}</span>
                <span>{player.runs}</span>
                <span>{player.avg}</span>
                <span>{player.fifties}</span>
                <span>{player.hundreds}</span>
              </div>
            ))}

          </div>

        </main>
      )}

      {/* FOOTER */}
      <footer>
        <h3>🏏 HPL - Hand Cricket League</h3>
        <p>Play • Compete • Win</p>
        <small>© 2026 HPL</small>
      </footer>

    </div>
  );
}

export default App;
