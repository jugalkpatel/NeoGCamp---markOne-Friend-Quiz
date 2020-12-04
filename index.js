const readlineSync = require('readline-sync')
let score = 0;
const questions = [
    {
      question: "Which is my Favorite Food?",
      answer: "pizza"
    },
    {
      question: "which is my Favorite Movie Series?",
      answer: "pirates of caribbean"
    },
    {
      question: "which is my Favorite Laptops?",
      answer: "thinkpad"
    },
    {
      question: "which is my Favorite Programming Language?",
      answer: "javascript"
    },
    {
      question: "which is my Favorite car company?",
      answer: "tesla"
    },
    {
      question: "which is my Favorite mobile game?",
      answer: "clash royale"
    },
    {
      question: "which is my Favorite Footballer?",
      answer: "cristiano ronaldo"
    },
    {
      question: "which is my Favorite cricketer?",
      answer: "suresh raina"
  },
  {
      question: "which is my Favorite song?",
      answer: "the box"
  }
  ,{
      question: "which is my Favorite football team?",
      answer: "real madrid"
  }
]

//this function ask questions, check answers and mark score.
function askQuestion(question, answer) {
  let getResponse = readlineSync.question(question);
  if (getResponse.toLowerCase() === answer.toLowerCase()) {
     score = score + 1;
  }
  console.log('Your score is: ',score);
  console.log('***********************');
  console.log()
}

//high score logic
const highestScorers = [
  {
    name: "Jugal",
    score: 8
  },
  {
    name: "jimmy",
    score: 9
  }
]

function checkHighScore(score, name) {
  for (let i = 0; i < highestScorers.length; i++) {
    if(highestScorers[i].score < score) {
      console.log('congratulations you are on high score board')
      highestScorers.push({name: name, score: score})
      break;
    }
  }
}
