let readlineSync = require('readline-sync');
const chalk = require('chalk');

const figlet = require("figlet");


// Chalk Styling 
const  welcome = chalk.bold.greenBright;
const  italic = chalk.italic;
const correct = chalk.bgGreen.bold.red;
const  wrong = chalk.bgRedBright.bold.white;
const scoreColor = chalk.bgYellow.bold.white;
const underline = chalk.underline
const  colorGreen = chalk.bold.green;
const  colorRed = chalk.bold.red;
const  colorBlue = chalk.blueBright;
const  level1 = chalk.bold.magenta.bgWhite;
const  horizontalLayout = chalk.bgMagentaBright.bold.white;
const  note = chalk.bgRed.bold.whiteBright;

// Variables 
let  u = 0;
let  score = 0;
let  level = 1;
let  userName;

//Questions
var questions = [
{
  que: ` IRON MAN: What song plays at the beginning of the movie? 
  a)"Iron Man" by Black Sabbath 
  b)"Stairway to Heaven" by Led Zeppelin 
  c)"Ordinary World" by Duran Duran 
  d)"Back In Black" by AC/DC
  `,
  ans: "d"
  
},
{
  que: `
  THE INCREDIBLE HULK: What does Tony tell Thaddeus Ross at the end of the film?
  a)That he wants to study The Hulk
  b)That he knows about S.H.I.E.L.D.
  c)That Thaddeus owes him money
  c)That they are putting a team together
   `,
  ans: "d"
},{
  que: `
   IRON MAN 2: What fake name does Natasha use when she first meets Tony?
  a)Natalie Rushman
  b)Nas Haven
  c)Deepika
  d)Amber Heard
  `,
  ans: "a"
},{
  que: `
  THOR: What does Thor want "another" of when he's in the diner?
  a)A slice of pie
  b)A cup of coffee
  c)A stack of pancake
  d)bear
  `,
  ans: "b"
},{
  que: `
  CAPTAIN AMERICA: THE FIRST AVENGER: Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?
  a)The Cotton Club
  b)El Morocco
  c)The Stork Club
  d)The RAD Club
  `,
  ans: "c"
},{
  que: `
  THE AVENGERS: Natasha remarks to Clint that the Battle of New York is a lot like what? 
  a)Their time in Budapest
Their 
  b)Their time in Istanbul
  c)Their time in Sokovia
  d)JTheir time in China
  `,
  ans: "a"
},{
  que: `
  IRON MAN 3: What is the name of the little boy Tony befriends while stranded?
  a)Harry
  b)Harley
  c)Henry
  d)Hamer
  `,
  ans: "b"
},{
  que: `
  THOR: THE DARK WORLD: Where do Sif and Volstagg hide the Reality Stone at the end of the movie?
  a)They give it to the Collector
  b)In a vault on Asgard
  c)In a RAB on CSF
  d)Inside Sif's sword
  `,
  ans: "a"
},{
  que: `
CAPTAIN AMERICA: THE WINTER SOLDIER: What does the Winter Soldier say after Steve recognizes him for the first time?  
  a)"He's alive."
  b)"Who the hell is Bucky?"
  c)"He's gone."
  d)"He is Dead"
  `,
  ans: "b"
}
];


var highScores = [
  {
    name: "Abhi",
    score: 9
  },

  {
    name: "Multani",
    score: 7
  },
]


//Functions



function welcomeUser(){
  function init () {

    console.log(
        chalk.redBright(
            figlet.textSync('Marvel World', {
                horizontalLayout: 'full',
            })
        )
    )
}
init();
  console.log()
  userName = readlineSync.question('Enter Your Name Mate : ');
  console.log(welcome('Hi ! ' + userName + italic(' Welcome To The "Marvel World". ')));
}

// Creating Game the main function

function gamePlay(){
  for (let i= 0; i< questions.length; i++){
    let currentQuestion = questions[i]
    play(currentQuestion.que, currentQuestion.ans)
  }
}



function play(que,ans){
  console.log(que);
  var userAnswer = readlineSync.question("Choose The Correct Option : ");

  // Branching
  if (userAnswer.toUpperCase() === ans.toUpperCase()){
    score++;
    console.log("Hurray " + underline(userName) + " Your Answer Is " + correct("Correct.") + colorGreen(" !!! "));
  } else {
    score--;
    console.log(underline(userName) + " Your Answer Is " + wrong("Wrong") + ", sorry" + colorRed(" !!!"));
    console.log('The Correct Answer is : ' + '"' + correct(" " + ans + " ") + '"');
  }
  console.log("Your " + underline("Current Score") + " is : " + "" +scoreColor(" " + score + " "));

  //Introducing levels:
  if (score == 5 || score == 9){
   level = "TRUE MARVEL FAN";
  console.log(level1("CONGRATULATIONS " + "YOU HAVE REACHED " + " LEVEL OF: " + level + " "));
}
  console.log(colorBlue("------------------------------------------------"));
}

// Scores related functions
function highScoresOfGame(){
  console.log(colorBlue("------------------------------------------------"));
  console.log(note(" NOTE: ") + " Check out the high scores after playing the game.");
  console.log(colorBlue("------------------------------------------------"));
  console.log(colorBlue("List Of High Scorers " + colorGreen(underline(" so far !!! "))));
  for(let i=0;i<highScores.length;i++){
    let ch = highScores[i];
    console.log(colorGreen(ch.name));
    console.log(colorGreen(ch.score));
    console.log('---------------');
  }
}

function highScoreCheck(){
  for(let i=0;i<highScores.length;i++){
    let ch = highScores[i];
    if (score >= ch.score){
      console.log(g(userName));
      console.log(g(score));
      console.log('---------------');
      highScores.push({
        name: userName,
        score: score
        },);
      break;
      }
    }
}

function fullScoreCheck(){
  if (score == 9){
    console.log(colorBlue("CONGRATULATIONS " + userName + " You are true Marvel FAN (__IRON__) :)"));
    console.log(colorBlue("List Of Full Scorers : "));
    let fullScores = [userName,"Developer","Admin,.....",];
    for(let i=0;i<fullScores.length;i++){
    console.log(fullScores[i]);
    }
  }
}


function leaderBoard() {
  console.log(note("leaderBoard MARVEL"));
  Console.log(horizontalLayout('.........................'))
console.log("....,Here you Will Find The List Of Full And High Scorers");
}


function finalScore(){
console.log("Your " + underline("Final Score") + " is : " + "" +scoreColor(" " + score + " "));
console.log(colorBlue("------------------------------------------------"));
}

//  
function finalScore(){
  console.log(note("Final High scores : "))
  for(let i=0;i<highScores.length;i++){
    console.log(highScores[i]);
  }
}


welcomeUser();        
highScoresOfGame(); 
gamePlay();             
finalScore();      
leaderBoard();        
highScoresOfGame(); 
highScoreCheck();   
fullScoreCheck();  
finalScore();