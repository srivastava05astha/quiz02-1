var readlineSync = require('readline-sync');
var score=0;

var userName = readlineSync.question("May I know your name? ");

const chalk = require('chalk');
const log = console.log;

log(chalk.cyanBright("Welcome "+userName+" to the game!!"));

var highScores = [
  {
    name : "Astha",
    score : 6 
  },
]

var questions = [{
    question : "What does Sheldon's mom call him? ",
    answer : "Shelly"
  },
  {
    question : "Who is the only member of cast to hold a PhD in real life? ",
    answer : "Mayim Bialik"
  },
  {
    question : "What astronaut nickname was Howard given by his space friends? ", 
    answer : "Froot Loops",
  }];

  var questionsOne = [{
    question : "What is the name of the science show host played by Bob Newhart that Sheldon and Leonard love so much?",
    answer : "Professor Proton"
  },
  {
    question : "Who plays Sheldon's older brother, Georgie?",
    answer : "Jerry O'Connell"
  },
  {
    question : "Amy brings home one of her monkeys from the lab in season four, and he has a terrible habit. What is it?",
    answer : "Smoking"
  }
  ]

function playQuiz(question,answer)
{
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.blue("You are right "))
    score=score+1;
  }
  else
  {
    console.log(chalk.red("Oops wrong answer"))
  }

  console.log(chalk.green("Current score " + score))
  console.log("        ")
}

function quiz(){
  for(var i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i];
    playQuiz(currentQuestion.question,currentQuestion.answer)
  }
  if(score == 3)
  {
    console.log(chalk.blueBright("Congrats,You are qualified for level 2"))
    console.log("      ")
    quizOne()
  }
  else
  {
    console.log(chalk.redBright("Apologies, You are not qualified for level 2"))
  }
}

function quizOne(){
  for(var i=0;i<questionsOne.length;i++)
  {
    var currentQuestion = questionsOne[i];
    playQuiz(currentQuestion.question,currentQuestion.answer)
  }

}  

console.log("      ")
function finalScore(){
  console.log(chalk.yellow("YEAH you scored : " +score+" !!"))
  console.log("        ")

  console.log("Check out high score , if you had beaten the high score then send screenshot and I'll update it ")
  console.log("      ")
  highScores.map(score => console.log(score.name, " : ",score.score))

}

quiz()

finalScore()