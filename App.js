import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>🏏 HPL</h1>
        <p>HAND CRICKET LEAGUE</p>
      </header>

      <nav>
        <button>Home</button>
        <button>Teams</button>
        <button>Matches</button>
        <button>Stats</button>
      </nav>

      <main>
        <section className="hero">
          <h1>🏆 HPL</h1>
          <h2>Hand Cricket League</h2>
          <p>Welcome to HPL</p>
        </section>

        <h2>Teams</h2>

        <div className="teams">
          <div className="team">🏏<br />Titans</div>
          <div className="team">🏆<br />Royal Kings</div>
          <div className="team">⭐<br />Chasers</div>
          <div className="team">🔥<br />Stars</div>
        </div>

        <h2>Latest Match</h2>

        <div className="match">
          <h3>Titans vs Royal Kings</h3>
          <p>Titans: <b>25/5</b></p>
          <p>Royal Kings: <b>135/5</b></p>
          <strong>🏆 Royal Kings won by 110 runs</strong>
        </div>
      </main>

      <footer>
        🏏 HPL - Hand Cricket League
      </footer>
    </div>
  );
}

export default App;
