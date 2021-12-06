import { useEffect, useState } from "react";
import { questionmodel } from "../../../data/QuestionAnswer.Model";

const useQuestion = () => {
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [Questions, setQuestions] = useState("");
  const [Answer, setAnswer] = useState("");
  const [Answer1, setAnswer1] = useState("");
  const [Answer2, setAnswer2] = useState("");
  const [Answer3, setAnswer3] = useState("");
  const [Answer4, setAnswer4] = useState("");
  const [Answerstate, setAnswerstate] = useState(false);

  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
        setAnswerstate(true)
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    setQuestions(questionmodel[QuestionNumber].question);
    setAnswer(questionmodel[QuestionNumber].answers[questionmodel[QuestionNumber].correctAnswer]);
    setAnswer1(questionmodel[QuestionNumber].answers[0]);
    setAnswer2(questionmodel[QuestionNumber].answers[1]);
    setAnswer3(questionmodel[QuestionNumber].answers[2]);
    setAnswer4(questionmodel[QuestionNumber].answers[3]);
    setAnswerstate(false);
    setSeconds(10)
  }, [QuestionNumber]);

  const nextQuestion = () => {
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
  };

  const showAnswer = () => {
    setAnswerstate(true);
    setSeconds(0)
  };

  return {
    nextQuestion,
    Questions,
    Answer,
    Answer1,
    Answer2,
    Answer3,
    Answer4,
    showAnswer,
    Answerstate,
    seconds,
  };
};

export default useQuestion;
