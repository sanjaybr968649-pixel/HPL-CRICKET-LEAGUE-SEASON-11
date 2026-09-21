const TEAMS = [
  {id:'rk', name:'Royal Kings', short:'RK', ground:'Bangalore International Ground', logo:'assets/royal-kings.png', players:['Sanjay','Darshan','Jordan Cox','Bhuvneshwar Kumar','Jacob Bethell','Jasprit Bumrah','Rashid Khan','Rajat Patidar']},
  {id:'ti', name:'Titans', short:'TI', ground:'Gujarat International Ground', logo:'assets/titans.png', players:['Yashas','Vishnu','Shubman Gill','Manav S.','Phil Salt','Prince Yadav','Angkrish Raghuvanshi','Sai']},
  {id:'ch', name:'Chasers', short:'CH', ground:'Hyderabad International Ground', logo:'assets/chasers.png', players:['Likith','Prajwal P.K','Joe Root','Steve Smith','Vaibhav Sooryavanshi','Ajinkya Rahane','Mahendra Singh Dhoni','Umesh Yadav']},
  {id:'st', name:'Stars', short:'ST', ground:'Rajasthan International Ground', logo:'assets/stars.png', players:['Karan','Mohith','Ryan David Rickelton','Ben Angus Mayes','Mohammed Siraj','Yash Raj Punja','Shreyas Iyer','Kagiso Rabada']}
];

const LOCAL_PLAYERS = [
 {name:'Sanjay',team:'Royal Kings',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Mandya, Karnataka',number:2,photo:'assets/sanjay.jpg',pre:{matches:110,runs:6284,avg:69.0,fifties:25,hundreds:22,highest:247},s11:{runs:402,matches:4,fifties:1,hundreds:1,highest:206,wickets:0}},
 {name:'Darshan',team:'Royal Kings',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Tumakuru, Karnataka',number:46,photo:'assets/darshan.jpg',pre:{matches:111,runs:5638,avg:67.1,fifties:25,hundreds:17,highest:368},s11:{runs:42,matches:4,fifties:0,hundreds:0,highest:38,wickets:0}},
 {name:'Yashas',team:'Titans',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Hassan, Karnataka',number:7,photo:'assets/player-placeholder.svg',pre:{matches:112,runs:7025,avg:103.3,fifties:26,hundreds:25,highest:307},s11:{runs:148,matches:3,fifties:0,hundreds:1,highest:124,wickets:0}},
 {name:'Likith',team:'Chasers',role:'All-rounder',bat:'Right-hand batsman',bowl:'Right-arm fast bowler',place:'Hassan, Karnataka',number:18,photo:'assets/player-placeholder.svg',pre:{matches:115,runs:6266,avg:66.6,fifties:18,hundreds:19,highest:386},s11:{runs:30,matches:3,fifties:0,hundreds:0,highest:21,wickets:0}},
 {name:'Vishnu',team:'Titans',role:'Top-order batsman',bat:'Right-hand batsman',bowl:'Right-arm off-spin',place:'Chitradurga, Karnataka',number:18,photo:'assets/player-placeholder.svg',pre:{matches:95,runs:4335,avg:51.6,fifties:18,hundreds:17,highest:238},s11:{runs:62,matches:3,fifties:0,hundreds:0,highest:46,wickets:0}},
 {name:'Karan',team:'Stars',role:'All-rounder',bat:'Left-hand batsman',bowl:'Right-arm fast bowler',place:'Rajasthan, India',number:10,photo:'assets/player-placeholder.svg',pre:null,s11:{runs:129,matches:3,fifties:1,hundreds:0,highest:55,wickets:0}},
 {name:'Mohith',team:'Stars',role:'Middle-order batsman',bat:'Right-hand batsman',bowl:'Right-arm off-spin',place:'Bihar, India',number:44,photo:'assets/player-placeholder.svg',pre:null,s11:{runs:142,matches:3,fifties:1,hundreds:0,highest:63,wickets:0}},
 {name:'Prajwal',team:'Chasers',role:'Top-order batsman',bat:'Right-hand batsman',bowl:'Right-arm off-spin',place:'Bagalkot, Karnataka',number:6,photo:'assets/player-placeholder.svg',pre:null,s11:{runs:143,matches:3,fifties:2,hundreds:0,highest:73,wickets:0}}
];

const REAL_PLAYERS = [
 ['Jordan Cox','Royal Kings'],['Bhuvneshwar Kumar','Royal Kings'],['Jacob Bethell','Royal Kings'],['Jasprit Bumrah','Royal Kings'],['Rashid Khan','Royal Kings'],['Rajat Patidar','Royal Kings'],
 ['Shubman Gill','Titans'],['Manav S.','Titans'],['Phil Salt','Titans'],['Prince Yadav','Titans'],['Angkrish Raghuvanshi','Titans'],['Sai','Titans'],
 ['Joe Root','Chasers'],['Steve Smith','Chasers'],['Vaibhav Sooryavanshi','Chasers'],['Ajinkya Rahane','Chasers'],['Mahendra Singh Dhoni','Chasers'],['Umesh Yadav','Chasers'],
 ['Ryan David Rickelton','Stars'],['Ben Angus Mayes','Stars'],['Mohammed Siraj','Stars'],['Yash Raj Punja','Stars'],['Shreyas Iyer','Stars'],['Kagiso Rabada','Stars']
].map(([name,team])=>({name,team,role:'Player',bat:'—',bowl:'—',place:'—',number:'—',photo:'assets/player-placeholder.svg',pre:null,s11:{runs:0,matches:0,fifties:0,hundreds:0,highest:0,wickets:0}}));
const PLAYERS=[...LOCAL_PLAYERS,...REAL_PLAYERS];

const MATCHES=[
 {id:1,a:'Titans',b:'Chasers',scores:['222/3','219/5'],result:'Titans won by 2 wickets',batA:[['Shubman Gill',86],['Vishnu',16],['Yashas',11],['Sai',40],['Manav S.',0]],batB:[['Joe Root',49],['Prajwal P.K',70],['Likith',21],['Ajinkya Rahane',19],['Vaibhav Sooryavanshi',20]],potm:'Shubman Gill'},
 {id:2,a:'Royal Kings',b:'Stars',scores:['134/2','126/5'],result:'Royal Kings won by 3 wickets',batA:[['Sanjay',40],['Darshan',38],['Jacob Bethell',56],['Jordan Cox',0],['Jasprit Bumrah',0]],batB:[['Karan',31],['Mohith',42],['Ryan David Rickelton',4],['Ben Angus Mayes',44],['Mohammed Siraj',5]],potm:'Jacob Bethell'},
 {id:3,a:'Royal Kings',b:'Chasers',scores:['222/5','230/4'],result:'Chasers won by 1 wicket',batA:[['Sanjay',94],['Darshan',4],['Jacob Bethell',60],['Jordan Cox',20],['Jasprit Bumrah',34]],batB:[['Joe Root',34],['Prajwal P.K',0],['Likith',0],['Ajinkya Rahane',20],['Vaibhav Sooryavanshi',176]],potm:'Vaibhav Sooryavanshi'},
 {id:4,a:'Titans',b:'Royal Kings',scores:['251/5','135/5'],result:'Titans won by 116 runs',batA:[['Shubman Gill',32],['Vishnu',46],['Yashas',124],['Sai',19],['Manav S.',30]],batB:[['Sanjay',62],['Darshan',0],['Jacob Bethell',31],['Jordan Cox',31],['Jasprit Bumrah',11]],potm:'Yashas'},
 {id:5,a:'Titans',b:'Stars',scores:['34/5','39/1'],result:'Stars won by 4 wickets',batA:[['Shubman Gill',8],['Vishnu',0],['Yashas',13],['Sai',1],['Manav S.',12]],batB:[['Karan',31],['Mohith',8],['Ryan David Rickelton',0],['Ben Angus Mayes',0],['Mohammed Siraj',0]],potm:'Karan'},
 {id:6,a:'Stars',b:'Chasers',scores:['170/5','238/5'],result:'Chasers won by 68 runs',batA:[['Karan',43],['Mohith',29],['Ryan David Rickelton',27],['Ben Angus Mayes',34],['Mohammed Siraj',37]],batB:[['Joe Root',17],['Prajwal P.K',73],['Likith',9],['Ajinkya Rahane',0],['Vaibhav Sooryavanshi',139]],potm:'Vaibhav Sooryavanshi'},
 {id:7,a:'Royal Kings',b:'Stars',scores:['240/2','235/5'],result:'Royal Kings won by 3 wickets',batA:[['Sanjay',206],['Darshan',0],['Jacob Bethell',34],['Jordan Cox',0],['Jasprit Bumrah',0]],batB:[['Karan',55],['Mohith',63],['Ryan David Rickelton',0],['Ben Angus Mayes',20],['Mohammed Siraj',0]],potm:'Sanjay'}
];

// Auto-calculated Season 11 local-player totals from the recorded match scorecards.
function seasonStats(name){
 const p=LOCAL_PLAYERS.find(x=>x.name===name); if(!p)return null;
 return MATCHES.reduce((s,m)=>{
  for(const side of [m.batA,m.batB]) for(const [n,r] of side) if(n===name){s.runs+=Number(r);s.matches++;s.highest=Math.max(s.highest,Number(r));if(r>=100)s.hundreds++;else if(r>=50)s.fifties++;}
  return s;
 },{runs:0,matches:0,fifties:0,hundreds:0,highest:0,wickets:p.s11.wickets||0});
}
for(const p of LOCAL_PLAYERS) p.s11=seasonStats(p.name);
