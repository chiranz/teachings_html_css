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

// const clientQuestionFormat = [
//   {
//     question: "",
//     options: [],
//     ans: "ans",
//   },
// ];

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
