const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = {
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
  userDescription: '',
  generateUserDescription: function() {
    this.userDescription = `${this.q01.answer} loves listening to ${this.q03.answer} while ${this.q02.answer}, devouring ${this.q05.answer} for ${this.q04.answer}, prefers ${this.q06.answer} over any other sport, and is amazing at ${this.q07.answer}.`;
  }
}

rl.question(survey.q01.question, (answer) => {
  storeAnswer('q01', answer);
  rl.question(survey.q02.question, (answer) => {
    storeAnswer('q02', answer);
    rl.question(survey.q03.question, (answer) => {
      storeAnswer('q03', answer);
      rl.question(survey.q04.question, (answer) => {
        storeAnswer('q04', answer);
        rl.question(survey.q05.question, (answer) => {
          storeAnswer('q05', answer);
          rl.question(survey.q06.question, (answer) => {
            storeAnswer('q06', answer);
            rl.question(survey.q07.question, (answer) => {
              storeAnswer('q07', answer);
              survey.generateUserDescription();
              console.log(survey.userDescription);
              rl.close();
           });
          });
        });
      });
    });
  });
});

const storeAnswer = (questionId, answer) => survey[questionId].answer = answer;