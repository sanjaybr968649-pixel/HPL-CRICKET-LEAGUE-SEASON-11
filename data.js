const TEAMS = {
  "Royal Kings": {short:"RK",logo:"assets/logos/royal-kings.png",ground:"M. Chinnaswamy Stadium, Bengaluru",captain:"Sanjay"},
  "Titans": {short:"TI",logo:"assets/logos/titans.png",ground:"Narendra Modi Stadium, Ahmedabad",captain:"Yashas"},
  "Chasers": {short:"CH",logo:"assets/logos/chasers.png",ground:"Rajiv Gandhi International Cricket Stadium, Hyderabad",captain:"Likith"},
  "Stars": {short:"ST",logo:"assets/logos/stars.png",ground:"Sawai Mansingh Stadium, Jaipur",captain:"Karan"}
};
const PLAYERS = [
 {id:"sanjay",name:"Sanjay",team:"Royal Kings",jersey:"02",role:"All-rounder",bat:"Right-hand batsman",bowl:"Right-arm fast bowler",place:"Mandya, Karnataka",photo:"assets/players/sanjay.jpg",debut:false,past:{matches:110,runs:6284,avg:"69.0",hundreds:22,fifties:25,highest:217}},
 {id:"darshan",name:"Darshan",team:"Royal Kings",jersey:"46",role:"All-rounder",bat:"Right-hand batsman",bowl:"Right-arm fast bowler",place:"Tumakuru, Karnataka",photo:"assets/players/darshan.png",debut:false,past:{matches:111,runs:5638,avg:"67.1",hundreds:17,fifties:25,highest:318}},
 {id:"yashas",name:"Yashas",team:"Titans",jersey:"07",role:"All-rounder",bat:"Right-hand batsman",bowl:"Right-arm fast bowler",place:"Hassan, Karnataka",photo:null,debut:false,past:{matches:112,runs:7025,avg:"103.3",hundreds:25,fifties:26,highest:307}},
 {id:"likith",name:"Likith",team:"Chasers",jersey:"18",role:"All-rounder",bat:"Right-hand batsman",bowl:"Right-arm fast bowler",place:"Hassan, Karnataka",photo:null,debut:false,past:{matches:115,runs:6266,avg:"66.6",hundreds:19,fifties:18,highest:386}},
 {id:"vishnu",name:"Vishnu",team:"Titans",jersey:"18",role:"Top-order batsman",bat:"Right-hand batsman",bowl:"Right-arm off-spin",place:"Chitradurga, Karnataka",photo:null,debut:false,past:{matches:95,runs:4335,avg:"51.6",hundreds:17,fifties:18,highest:238}},
 {id:"karan",name:"Karan",team:"Stars",jersey:"10",role:"All-rounder",bat:"Left-hand batsman",bowl:"Right-arm fast bowler",place:"Rajasthan, India",photo:null,debut:true,past:null},
 {id:"mohith",name:"Mohith",team:"Stars",jersey:"44",role:"Middle-order batsman",bat:"Right-hand batsman",bowl:"Right-arm off-spin",place:"Bihar, India",photo:null,debut:true,past:null},
 {id:"prajwal",name:"Prajwal",team:"Chasers",jersey:"06",role:"Top-order batsman",bat:"Right-hand batsman",bowl:"Right-arm off-spin",place:"Bagalkot, Karnataka",photo:null,debut:true,past:null},
 {id:"jordan-cox",name:"Jordan Cox",team:"Royal Kings",jersey:"",role:"Wicketkeeper-batter",bat:"Right-hand batsman",bowl:"—",place:"England",photo:null,debut:false,past:null},
 {id:"bhuvneshwar-kumar",name:"Bhuvneshwar Kumar",team:"Royal Kings",jersey:"",role:"Bowler",bat:"Right-hand batsman",bowl:"Right-arm medium",place:"India",photo:null,debut:false,past:null},
 {id:"jacob-bethell",name:"Jacob Bethell",team:"Royal Kings",jersey:"",role:"All-rounder",bat:"Left-hand batsman",bowl:"Slow left-arm orthodox",place:"England",photo:null,debut:false,past:null},
 {id:"jasprit-bumrah",name:"Jasprit Bumrah",team:"Royal Kings",jersey:"",role:"Bowler",bat:"Right-hand batsman",bowl:"Right-arm fast",place:"India",photo:null,debut:false,past:null},
 {id:"rashid-khan",name:"Rashid Khan",team:"Royal Kings",jersey:"",role:"Bowler",bat:"Right-hand batsman",bowl:"Right-arm leg-spin",place:"Afghanistan",photo:null,debut:false,past:null},
 {id:"rajat-patidar",name:"Rajat Patidar",team:"Royal Kings",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"Right-arm off-spin",place:"India",photo:null,debut:false,past:null},
 {id:"shubman-gill",name:"Shubman Gill",team:"Titans",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"Right-arm off-spin",place:"India",photo:null,debut:false,past:null},
 {id:"phil-salt",name:"Phil Salt",team:"Titans",jersey:"",role:"Wicketkeeper-batter",bat:"Right-hand batsman",bowl:"Right-arm off-spin",place:"England",photo:null,debut:false,past:null},
 {id:"prince-yadav",name:"Prince Yadav",team:"Titans",jersey:"",role:"Bowler",bat:"Right-hand batsman",bowl:"—",place:"India",photo:null,debut:false,past:null},
 {id:"angkrish-raghuvanshi",name:"Angkrish Raghuvanshi",team:"Titans",jersey:"",role:"Batter",bat:"Left-hand batsman",bowl:"Right-arm off-spin",place:"India",photo:null,debut:false,past:null},
 {id:"sai",name:"Sai",team:"Titans",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"—",place:"India",photo:null,debut:false,past:null},
 {id:"joe-root",name:"Joe Root",team:"Chasers",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"Right-arm off-spin",place:"England",photo:null,debut:false,past:null},
 {id:"steve-smith",name:"Steve Smith",team:"Chasers",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"Right-arm leg-spin",place:"Australia",photo:null,debut:false,past:null},
 {id:"ajinkya-rahane",name:"Ajinkya Rahane",team:"Chasers",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"Right-arm medium",place:"India",photo:null,debut:false,past:null},
 {id:"mahendra-singh-dhoni",name:"Mahendra Singh Dhoni",team:"Chasers",jersey:"",role:"Wicketkeeper-batter",bat:"Right-hand batsman",bowl:"—",place:"India",photo:null,debut:false,past:null},
 {id:"umesh-yadav",name:"Umesh Yadav",team:"Chasers",jersey:"",role:"Bowler",bat:"Right-hand batsman",bowl:"Right-arm fast",place:"India",photo:null,debut:false,past:null},
 {id:"vaibhav-sooryavanshi",name:"Vaibhav Sooryavanshi",team:"Chasers",jersey:"",role:"Batter",bat:"Left-hand batsman",bowl:"—",place:"India",photo:null,debut:false,past:null},
 {id:"ryan-rickelton",name:"Ryan David Rickelton",team:"Stars",jersey:"",role:"Wicketkeeper-batter",bat:"Left-hand batsman",bowl:"—",place:"South Africa",photo:null,debut:false,past:null},
 {id:"ben-mayes",name:"Ben Angus Mayes",team:"Stars",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"—",place:"England",photo:null,debut:false,past:null},
 {id:"mohammed-siraj",name:"Mohammed Siraj",team:"Stars",jersey:"",role:"Bowler",bat:"Right-hand batsman",bowl:"Right-arm fast",place:"India",photo:null,debut:false,past:null},
 {id:"yash-raj-punja",name:"Yash Raj Punja",team:"Stars",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"—",place:"India",photo:null,debut:false,past:null},
 {id:"shreyas-iyer",name:"Shreyas Iyer",team:"Stars",jersey:"",role:"Batter",bat:"Right-hand batsman",bowl:"Right-arm leg-spin",place:"India",photo:null,debut:false,past:null},
 {id:"kagiso-rabada",name:"Kagiso Rabada",team:"Stars",jersey:"",role:"Bowler",bat:"Right-hand batsman",bowl:"Right-arm fast",place:"South Africa",photo:null,debut:false,past:null}
];
const MATCHES = [
 {id:1,a:"Titans",b:"Chasers",sa:"222/3",sb:"219/5",result:"Titans won by 2 wickets",venue:"Narendra Modi Stadium, Ahmedabad",bat:[["Shubman Gill",86],["Vishnu",16],["Yashas",11],["Sai",40]],potm:null},
 {id:2,a:"Royal Kings",b:"Stars",sa:"134/2",sb:"126/5",result:"Royal Kings won by 3 wickets",venue:"M. Chinnaswamy Stadium, Bengaluru",bat:[["Sanjay",40],["Darshan",38],["Jacob Bethell",56]],potm:null},
 {id:3,a:"Royal Kings",b:"Chasers",sa:"222/5",sb:"230/4",result:"Chasers won by 1 wicket",venue:"M. Chinnaswamy Stadium, Bengaluru",bat:[["Sanjay",94],["Jacob Bethell",60],["Vaibhav Sooryavanshi",176]],potm:null},
 {id:4,a:"Titans",b:"Royal Kings",sa:"251/5",sb:"135/5",result:"Titans won by 116 runs",venue:"Narendra Modi Stadium, Ahmedabad",bat:[["Yashas",124],["Vishnu",46],["Sanjay",62]],potm:null},
 {id:5,a:"Titans",b:"Stars",sa:"34/5",sb:"39/1",result:"Stars won by 4 wickets",venue:"Sawai Mansingh Stadium, Jaipur",bat:[["Karan",31],["Mohith",8]],potm:null},
 {id:6,a:"Stars",b:"Chasers",sa:"170/5",sb:"238/5",result:"Chasers won by 68 runs",venue:"Rajiv Gandhi International Cricket Stadium, Hyderabad",bat:[["Karan",43],["Mohith",29],["Vaibhav Sooryavanshi",139]],potm:null},
 {id:7,a:"Royal Kings",b:"Stars",sa:"240/2",sb:"235/5",result:"Royal Kings won by 3 wickets",venue:"M. Chinnaswamy Stadium, Bengaluru",bat:[["Sanjay",206],["Karan",55],["Mohith",63]],potm:null}
];
