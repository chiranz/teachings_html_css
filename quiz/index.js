const root = document.getElementById("root");
console.log(root);
let playButton = document.createElement("button");
let nextButton = document.createElement("button");
let heading = document.createElement("h1");
let question = document.createElement("h3");
const inputField = document.createElement("input");
// Loading Screeen
const loadingScreen = document.createElement("h1");
loadingScreen.innerText = "Loading....";
// STATE VARIABLES
let questionCount;
let questions;
let questionId = 0;

const paintLandingPage = () => {
  inputField.type = "number";
  inputField.min = 3;
  inputField.max = 10;
  playButton.innerText = "Play";

  heading.innerText = "Play Quiz";
  root.appendChild(heading);
  root.appendChild(inputField);
  root.appendChild(playButton);
};

paintLandingPage();

const paintQuestion = (questionId, buttonText) => {
  root.innerHTML = null;
  heading.innerText = "Questions";
  question.innerText = questionId + 1;
  nextButton.innerText = buttonText;
  root.appendChild(heading);
  root.appendChild(question);
  root.appendChild(nextButton);
};

playButton.addEventListener("click", async () => {
  // Check if input value is more than 3
  questionCount = inputField.value;
  if (questionCount >= 3) {
    // Fetch question
    // Paint screen with first question
    // Show loading screen
    root.innerHTML = null;
    root.appendChild(loadingScreen);
    questions = await getQuestions(questionCount);
    root.innerHTML = null;
    paintQuestion(questionId, "Next");
  }

  return;
});

const showResultPage = () => {
  // TODO: Call get score function and  change score inner text
  // TODO: Add replay button so that the dom paints landing page screen
  root.innerHTML = null;
  heading.innerText = "Result";
  const score = document.createElement("h1");
  score.innerText = "3/5";
  root.appendChild(heading);
  root.appendChild(score);
};

// NEXT BUTTON LOGIC
nextButton.addEventListener("click", () => {
  //TODO:  Save Answer
  let nextButtonText = questionId < questions.length - 2 ? "Next" : "Submit";
  console.log({ questions, questionId });
  console.log(nextButtonText);
  console.log(questions.length);
  if (questionId < questions.length - 1) {
    // Save Answer here

    questionId++;
    paintQuestion(questionId, nextButtonText);
  } else {
    console.log("Show result page");
    showResultPage();
  }
});
