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

const getQuestions = async (count) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${count}&category=18&difficulty=medium&type=multiple`
    );
    const data = await response.json();
    const questions = await data.results;
    const formattedQuestions = parseQuestions(questions);
    if (questions.length === 0) {
      console.log("Please check the url");
    }
    return formattedQuestions;
  } catch (error) {
    console.log(error);
  }
};
getQuestions(3);

const getCorrectAnswers = (questions) => {
  let answers = [];
  for (let q of questions) {
    answers.push(q.correct_answer);
  }
  return answers;
};
const getOptions = (questions) => {
  let options = [];
  for (let q of questions) {
    options.push(q.options);
  }
  return options;
};

const calculateScore = async (correctAns, userAns) => {
  let correctCount = 0;
  // Assuming ans and question array have same length
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAns[i] === correctAns[i]) {
      correctCount++;
    }
  }
  return {
    score: correctCount,
    questionCount: correctAns.length,
  };
};

// FOR SIMULATION ONLY
const getSimulatedAnswers = (questions) => {
  let answers = [];
  for (let q of questions) {
    const randomOpt = randInt(0, 4);

    answers.push(q.options[randomOpt]);
  }
  return answers;
};

const calculateSimulatedScore = async () => {
  let questions = await getQuestions(5);
  let correctCount = 0;
  let answers = getCorrectAnswers(questions);
  let userAnswers = getSimulatedAnswers(questions);
  // Assuming ans and question array have same length
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === answers[i]) {
      correctCount++;
    }
  }
  return correctCount;
};
