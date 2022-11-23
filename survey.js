const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = {
  questions: [
    'q01',
    'q02',
    'q03',
    'q04',
    'q05',
    'q06',
    'q07'
  ],
  q01: {
    question: `What's your name? Nicknames are also acceptable :)`,
    answer: ''
  },
  q02: {
    question: `What's an activity you like doing?`,
    answer: ''
  },
  q03: {
    question: `What do you listen to while doing that?`,
    answer: ''
  },
  q04: {
    question: `Which meal is your favourite (eg: dinner, brunch, etc.)`,
    answer: ''
  },
  q05: {
    question: `What's your favourite thing to eat for that meal?`,
    answer: ''
  },
  q06: {
    question: `Which sport is your absolute favourite?`,
    answer: ''
  },
  q07: {
    question: `What is your superpower? In a few words, tell us what you are amazing at!`,
    answer: ''
  },
}

rl.question(survey.q01.question, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(survey.q02.question, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question(survey.q03.question, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question(survey.q04.question, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question(survey.q05.question, (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          rl.question(survey.q06.question, (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question(survey.q07.question, (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              rl.close();
           });
          });
        });
      });
    });
  });
});

/*
QUESTIONS TO ASK:
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/