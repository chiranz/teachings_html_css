// // Load data from api
// const questionObjectFromApi = [
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "medium",
//     question:
//       "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
//     correct_answer: "C#",
//     incorrect_answers: ["Java", "C++", "Objective-C"],
//   },
// ];

function parseQuestions(rawQuestions) {
  const formattedQuestions = [];
  for (let question of rawQuestions) {
    const formattedQuestion = {
      question: question.question,
      options: [question.correct_answer, ...question.incorrect_answers],
      correct_answer: question.correct_answer,
    };
    formattedQuestions.push(formattedQuestion);
  }
  return formattedQuestions;
}
// <buttton> if (currentQuestionIndex === questions.length-1) ? "Submit" : "Next"

// const clientQuestionFormat = [
//   {
//     question: "",
//     options: [],
//     ans: "ans",
//   },
// ];
// answers[0] === questions[0].ans

// ["ans1", "ans2"]

const getQuestions = async (count) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${count}&category=18&difficulty=medium&type=multiple`
    );
    const data = await response.json();
    const questions = data.results;
    const formattedQuestions = parseQuestions(questions);
    if (questions.length === 0) {
      console.log("Please check the url");
    }
    console.log(formattedQuestions);
  } catch (error) {
    console.log(error);
  }
};

getQuestions(3);

// TODO: Write a function that will return a random array of elements

// getRandom(["a", "b", "c", "d"])
// returns items in random order
// ["d", "a", "c" , "b"]

const calculateScore = () => {
  let correctCount = 0;
  let answers = [];
  let questions = [];
  // Assuming ans and question array have same length
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === questions[i].ans) {
      correctCount++;
    }

    return correctCount;
  }
};
