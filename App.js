/* =========================================================
   HAND CRICKET PREMIER LEAGUE
   HPL SEASON 11 - NEW APP.JS
   ========================================================= */

"use strict";

/* =========================
   HPL DATA
========================= */

const HPL = {
  season: "Season 11",

  teams: [
    {
      id: "royal-kings",
      name: "Royal Kings",
      short: "RK",
      logo: "royal-kings.png",
      ground: "M. Chinnaswamy Stadium, Bengaluru",
      captain: "Sanjay"
    },
    {
      id: "titans",
      name: "Titans",
      short: "TIT",
      logo: "titans.png",
      ground: "Narendra Modi Stadium, Ahmedabad",
      captain: "Yashas"
    },
    {
      id: "chesara",
      name: "Chesara",
      short: "CHE",
      logo: "chesara.png",
      ground: "Rajiv Gandhi International Cricket Stadium, Hyderabad",
      captain: "Likith"
    },
    {
      id: "stars",
      name: "Stars",
      short: "STR",
      logo: "stars.png",
      ground: "Rajasthan International Stadium, Jaipur",
      captain: "Karan"
    }
  ],

  players: [
    /* Royal Kings */
    {
      id: "sanjay",
      name: "Sanjay B R",
      displayName: "Sanjay",
      team: "Royal Kings",
      place: "Mandya, Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Fast Bowler",
      jersey: "02",
      captain: true,
      photo: "",
      record: {
        matches: 4,
        runs: 402,
        wickets: 1,
        best: 206,
        fifties: 0,
        hundreds: 1
      }
    },

    {
      id: "darshan",
      name: "Darshan",
      team: "Royal Kings",
      place: "Tumkur, Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Off-Spin",
      jersey: "46",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 42,
        wickets: 17,
        best: 38,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "bethell",
      name: "Jacob Bethell",
      displayName: "Bethell",
      team: "Royal Kings",
      place: "",
      role: "All-Rounder",
      batting: "Left-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 181,
        wickets: 0,
        best: 60,
        fifties: 2,
        hundreds: 0
      }
    },

    {
      id: "cox",
      name: "Jordan Cox",
      displayName: "Cox",
      team: "Royal Kings",
      place: "",
      role: "Batsman",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 51,
        wickets: 0,
        best: 31,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "bumrah",
      name: "Jasprit Bumrah",
      displayName: "Bumrah",
      team: "Royal Kings",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast Bowler",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 45,
        wickets: 0,
        best: 34,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "bhuvi",
      name: "Bhuvneshwar Kumar",
      displayName: "Bhuvi",
      team: "Royal Kings",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Medium-Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "rashid",
      name: "Rashid Khan",
      displayName: "Rashid",
      team: "Royal Kings",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "Right-Arm Leg Spin",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "patidar",
      name: "Rajat Patidar",
      displayName: "Patidar",
      team: "Royal Kings",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    /* Titans */
    {
      id: "yashas",
      name: "Yashas",
      team: "Titans",
      place: "Tumkur, Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Medium-Fast Bowler",
      jersey: "07",
      captain: true,
      photo: "",
      record: {
        matches: 3,
        runs: 148,
        wickets: 0,
        best: 124,
        fifties: 0,
        hundreds: 1
      }
    },

    {
      id: "shubman-gill",
      name: "Shubman Gill",
      displayName: "S. Gill",
      team: "Titans",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 105,
        wickets: 0,
        best: 65,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "vishnu",
      name: "Vishnu",
      team: "Titans",
      place: "Chitradurga, Karnataka",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Fast-Medium Bowler",
      jersey: "18",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 62,
        wickets: 0,
        best: 46,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "sai",
      name: "Sai",
      team: "Titans",
      place: "",
      role: "Batsman",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 60,
        wickets: 0,
        best: 40,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "manav-suthar",
      name: "Manav Suthar",
      displayName: "Manav Suthar",
      team: "Titans",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Left-Arm Spin",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 46,
        wickets: 9,
        best: 30,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "salt",
      name: "Phil Salt",
      displayName: "Salt",
      team: "Titans",
      place: "",
      role: "Wicket-Keeper Batter",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "prince-yadav",
      name: "Prince Yadav",
      team: "Titans",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "raghuvanshi",
      name: "Angkrish Raghuvanshi",
      displayName: "Raghuvanshi",
      team: "Titans",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    /* Chesara */
    {
      id: "likith",
      name: "Likith",
      team: "Chesara",
      place: "Karnataka",
      role: "All-Rounder",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Fast Bowler",
      jersey: "18",
      captain: true,
      photo: "",
      record: {
        matches: 3,
        runs: 30,
        wickets: 0,
        best: 21,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "prajwal-pk",
      name: "Prajwal P.K.",
      displayName: "Prajwal P.K.",
      team: "Chesara",
      place: "Bagalkot, Karnataka",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Medium-Pace Bowler",
      jersey: "06",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 143,
        wickets: 0,
        best: 73,
        fifties: 2,
        hundreds: 0
      }
    },

    {
      id: "root",
      name: "Joe Root",
      displayName: "Root",
      team: "Chesara",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Off Spin",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 80,
        wickets: 0,
        best: 34,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "smith",
      name: "Steve Smith",
      displayName: "Smith",
      team: "Chesara",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "vaibhav",
      name: "Vaibhav",
      team: "Chesara",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 335,
        wickets: 12,
        best: 176,
        fifties: 0,
        hundreds: 1
      }
    },

    {
      id: "rahane",
      name: "Ajinkya Rahane",
      displayName: "Rahane",
      team: "Chesara",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 69,
        wickets: 0,
        best: 49,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "ms-d",
      name: "MS Dhoni",
      displayName: "MS D",
      team: "Chesara",
      place: "",
      role: "Wicket-Keeper Batter",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "umesh",
      name: "Umesh Yadav",
      displayName: "Umesh",
      team: "Chesara",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    /* Stars */
    {
      id: "karan",
      name: "Karan",
      team: "Stars",
      place: "Rajasthan",
      role: "All-Rounder",
      batting: "Left-Hand Batsman",
      bowling: "Left-Arm Fast Bowler",
      jersey: "12",
      captain: true,
      photo: "",
      record: {
        matches: 4,
        runs: 160,
        wickets: 10,
        best: 55,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "mohit",
      name: "Mohit",
      team: "Stars",
      place: "Bihar",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "Right-Arm Off-Spinner",
      jersey: "44",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 142,
        wickets: 0,
        best: 63,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "rabada",
      name: "Kagiso Rabada",
      displayName: "Rabada",
      team: "Stars",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "siraj",
      name: "Mohammed Siraj",
      displayName: "Mohammed Siraj",
      team: "Stars",
      place: "",
      role: "Bowler",
      batting: "",
      bowling: "Right-Arm Fast",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 1,
        runs: 97,
        wickets: 0,
        best: 97,
        fifties: 1,
        hundreds: 0
      }
    },

    {
      id: "ben-mayers",
      name: "Ben Mayers",
      team: "Stars",
      place: "",
      role: "All-Rounder",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 98,
        wickets: 0,
        best: 44,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "rickelton",
      name: "Ryan Rickelton",
      displayName: "Rickelton",
      team: "Stars",
      place: "",
      role: "Wicket-Keeper Batter",
      batting: "Left-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 4,
        runs: 31,
        wickets: 0,
        best: 27,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "yashraj-punja",
      name: "Yashraj Punja",
      team: "Stars",
      place: "",
      role: "Batsman",
      batting: "",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 0,
        runs: 0,
        wickets: 0,
        best: 0,
        fifties: 0,
        hundreds: 0
      }
    },

    {
      id: "shreyas-iyer",
      name: "Shreyas Iyer",
      displayName: "S. Iyer",
      team: "Stars",
      place: "",
      role: "Batsman",
      batting: "Right-Hand Batsman",
      bowling: "",
      jersey: "",
      captain: false,
      photo: "",
      record: {
        matches: 3,
        runs: 42,
        wickets: 0,
        best: 37,
        fifties: 0,
        hundreds: 0
      }
    }
  ],

  /* =========================
     MATCHES
  ========================= */

  matches: [
    {
      id: 1,
      home: "Titans",
      away: "Chesara",
      homeScore: "222/3",
      awayScore: "219/5",
      result: "Titans won by 2 wickets",
      ground: "Narendra Modi Stadium, Ahmedabad"
    },

    {
      id: 2,
      home: "Royal Kings",
      away: "Stars",
      homeScore: "134/2",
      awayScore: "126/5",
      result: "Royal Kings won by 3 wickets",
      ground: "M. Chinnaswamy Stadium, Bengaluru"
    },

    {
      id: 3,
      home: "Royal Kings",
      away: "Chesara",
      homeScore: "224/5",
      awayScore: "230/4",
      result: "Chesara won by 1 wicket",
      ground: "M. Chinnaswamy Stadium, Bengaluru"
    },

    {
      id: 4,
      home: "Titans",
      away: "Royal Kings",
      homeScore: "251/5",
      awayScore: "135/5",
      result: "Titans won by 116 runs",
      ground: "Narendra Modi Stadium, Ahmedabad"
    },

    {
      id: 5,
      home: "Titans",
      away: "Stars",
      homeScore: "34/5",
      awayScore: "39/1",
      result: "Stars won by 4 wickets",
      ground: "Narendra Modi Stadium, Ahmedabad"
    },

    {
      id: 6,
      home: "Stars",
      away: "Chesara",
      homeScore: "170/5",
      awayScore: "238/5",
      result: "Chesara won by 68 runs",
      ground: "Rajasthan International Stadium, Jaipur"
    },

    {
      id: 7,
      home: "Royal Kings",
      away: "Stars",
      homeScore: "240/2",
      awayScore: "235/3",
      result: "Royal Kings won by 3 wickets",
      ground: "M. Chinnaswamy Stadium, Bengaluru"
    }
  ],

  points: [
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
  ],

  scorecards: {
    1: {
      home: [
        ["S. Gill", 65, 0],
        ["Vishnu", 16, 0],
        ["Yashas", 11, 0],
        ["Sai", 40, 0],
        ["Manav Suthar", 0, 4]
      ],
      away: [
        ["J. Root", 29, 0],
        ["P.K.", 70, 0],
        ["Likith", 21, 0],
        ["Rahane", 49, 0],
        ["Vaibhav", 20, 3]
      ]
    },

    2: {
      home: [
        ["Sanjay", 40, 0],
        ["Darshan", 38, 5],
        ["Bethell", 56, 0],
        ["Cox", null, 0],
        ["Bumrah", null, 0]
      ],
      away: [
        ["Karan", 31, 1],
        ["Mohit", 42, 0],
        ["Rickelton", 4, 0],
        ["Ben Mayers", 44, 0],
        ["M. Iyer", 5, 0]
      ]
    },

    3: {
      home: [
        ["Sanjay", 94, 1],
        ["Darshan", 4, 3],
        ["Bethell", 60, 0],
        ["Cox", 20, 0],
        ["Bumrah", 34, 0]
      ],
      away: [
        ["J. Root", 34, 0],
        ["P.K.", 0, 0],
        ["Likith", 0, 0],
        ["Rahane", 20, 0],
        ["Vaibhav", 176, 4]
      ]
    },

    4: {
      home: [
        ["S. Gill", 32, 0],
        ["Vishnu", 46, 0],
        ["Yashas", 124, 0],
        ["Sai", 19, 0],
        ["Manav Suthar", 30, 4]
      ],
      away: [
        ["Sanjay", 62, 0],
        ["Darshan", 0, 4],
        ["Bethell", 31, 0],
        ["Cox", 31, 0],
        ["Bumrah", 11, 0]
      ]
    },

    5: {
      home: [
        ["S. Gill", 8, 0],
        ["Vishnu", 0, 0],
        ["Yashas", 13, 0],
        ["Sai", 1, 0],
        ["Manav Suthar", 12, 1]
      ],
      away: [
        ["Karan", 31, 4],
        ["Mohit", 8, 0],
        ["Rickelton", 0, 0],
        ["Ben Mayers", 0, 0],
        ["M. Iyer", 0, 0]
      ]
    },

    6: {
      home: [
        ["Karan", 43, 4],
        ["Mohit", 29, 0],
        ["Rickelton", 27, 0],
        ["Ben Mayers", 34, 0],
        ["M. Iyer", 37, 0]
      ],
      away: [
        ["J. Root", 17, 0],
        ["P.K.", 73, 0],
        ["Likith", 9, 0],
        ["Rahane", 0, 0],
        ["Vaibhav", 139, 5]
      ]
    },

    7: {
      home: [
        ["Sanjay", 206, 0],
        ["Darshan", 0, 5],
        ["Bethell", 34, 0],
        ["Cox", null, 0],
        ["Bumrah", null, 0]
      ],
      away: [
        ["Karan", 55, 1],
        ["Mohit", 63, 0],
        ["Rickelton", 0, 0],
        ["Ben Mayers", 20, 0],
        ["Mohammed Siraj", 97, 0]
      ]
    }
  }
};


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function safe(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function teamData(name) {
  return HPL.teams.find(t => t.name === name);
}

function playerData(id) {
  return HPL.players.find(p => p.id === id);
}

function teamLogo(teamName) {
  const team = teamData(teamName);
  return team ? team.logo : "";
}

function playerName(player) {
  return player.displayName || player.name;
}

function avatar(player) {
  if (player.photo) {
    return `
      <img
        class="player-photo"
        src="${safe(player.photo)}"
        alt="${safe(playerName(player))}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      >
      <div class="player-avatar" style="display:none;">
        ${safe(playerName(player).charAt(0))}
      </div>
    `;
  }

  return `
    <div class="player-avatar">
      ${safe(playerName(player).charAt(0))}
    </div>
  `;
}


/* =========================================================
   MAIN CSS
========================================================= */

const style = document.createElement("style");

style.textContent
