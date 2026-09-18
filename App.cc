* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f2f2f2;
}

.app {
  min-height: 100vh;
}

header {
  background: #111827;
  color: white;
  text-align: center;
  padding: 25px;
}

header h1 {
  margin: 0;
  font-size: 42px;
  color: orange;
}

header p {
  margin: 8px 0 0;
}

nav {
  background: white;
  padding: 12px;
  text-align: center;
}

nav button {
  padding: 10px 15px;
  margin: 4px;
  border: 0;
  border-radius: 8px;
  background: #ff9800;
  color: white;
  font-weight: bold;
}

main {
  width: 92%;
  max-width: 1000px;
  margin: auto;
  padding: 25px 0;
}

.hero {
  text-align: center;
  background: linear-gradient(135deg, orange, orangered);
  color: white;
  padding: 45px 15px;
  border-radius: 20px;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 55px;
  margin: 0;
}

.teams {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.team {
  background: white;
  padding: 25px 10px;
  text-align: center;
  border-radius: 15px;
  font-size: 22px;
  font-weight: bold;
  box-shadow: 0 3px 10px #ddd;
}

.match {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 3px 10px #ddd;
  text-align: center;
}

.match b {
  color: orangered;
  font-size: 20px;
}

.match strong {
  display: block;
  margin-top: 15px;
  color: green;
}

footer {
  background: #111827;
  color: white;
  text-align: center;
  padding: 25px;
  margin-top: 30px;
}

@media (max-width: 600px) {
  .teams {
    grid-template-columns: repeat(2, 1fr);
  }
}
