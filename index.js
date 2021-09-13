var readlineSync = require("readline-sync");
var chalk = require("chalk");

let userName = readlineSync.question(chalk.red("What's your name? "));
console.log(chalk.blue("Hi " + userName + "! Let's test how much do you know about F.R.I.E.N.D.S \n"));
console.log(chalk.bold("If you have beaten highest score then send screenshot to admin \n")) ;

let score = 0;

function play(question, answer){
  let userAnswer= readlineSync.question(question);
  if(userAnswer == answer){
    console.log(chalk.green("Correct answer! \n"));
    score+=1;
  }
  else{
    console.log(chalk.red("Oops!, Wrong! \n"));
  }
  console.log("Current Score: " + score);
}

var questions = [
  {
    question: chalk.yellow("What’s the name of Joey’s penguin? \n a. Snowflake \n b. Waddle \n c. Huggsy \n d. Bobber \n"),
    
    answer: 'c'
  },
  {
    question: chalk.yellow("\n What song is Phoebe best known for? \n a. Smelly Cat \n b. Smelly Dog \n c. Smelly Rabbit \n d. Smelly Worm \n"),
    
    answer: 'a'
  },
  {
    question: chalk.yellow("\n What is Janice most likely to say? \n a. Talk to the hand! \n b. Get me a coffee! \n c. Oh… my… God! \n d. No way! \n"),

    answer: 'c'
  },
  {
    question: chalk.yellow("\n What job does Ross have? \n a. Paleontologist \n b. Artist \n c. Photographer \n d. Insurance salesman \n"),
  
    answer: 'a'
  },
  {
    question: chalk.yellow("\n What does Joey never share? \n a. His books \n b. His information \n c. His food \n d. His DVDs \n"),

    answer: 'c'
  }
];

//Loop
for(i=0; i<questions.length; i++){
  let currentQuestion = questions[i]

  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.blue("\n Great attempt!, Total score is:", score));

// Previous high scores
console.log(chalk.bold.hex('#EE8800').underline("Score Board \n"));
var highScore = [
  {
    quizScore: 4
  },
  {
    quizScore: 3
  }
];

for(var i=0;i<highScore.length ;i++){
  var currentScore = highScore[i];

  if(currentScore.quizScore > score){
    score =currentScore.quizScore;
  }
}

console.log(chalk.blue("Highest Score: "+score));