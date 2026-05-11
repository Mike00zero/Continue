import * as C from '/src/constants/';

export const questions = {
  "whatsYourName": {
    "step": 1,
    "questionType": C.WHATS_YOUR_NAME,
    "questionTitle": "Lets start off easy...What is your name?",
    "textboxPlaceholderText": "Type your name... or something profound... or just lie.",
    "questions": [
      {
        "nextQuestionKey": "lightOrDarkBackground"
      }
    ]
  },
  "lightOrDarkBackground": {
    "step": 2,
    "questionType": C.MULTIPLE_CHOICE,
    "response": "Dont' worry...you can change this later on.",
    "questionTitle": "What background mode do you prefer?",
    "questions": [
      {
        "text": "Light?",
        "nextQuestionKey": ""
      },
      {
        "text": "Dark?",
        "nextQuestionKey": ""
      }
    ]
  }
}