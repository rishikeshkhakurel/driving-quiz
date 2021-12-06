import React from "react";
import useQuestion from "../hooks/useQuestion";
import QuestionWrapper from "./index.style";
import { FcClock } from "react-icons/fc";
import { Button } from "@mui/material";

function QuestionAnswer() {
  const {
    nextQuestion,
    Questions,
    Answer,
    Answer1,
    Answer2,
    Answer3,
    Answer4,
    showAnswer,
    Answerstate,
    seconds
  } = useQuestion();

  return (
    <QuestionWrapper>
      <div id="question-answer-container">
        <div id="clock-question">

        <span id="question">{Questions}</span><div id="clock"><FcClock/><span id="seconds">{seconds}</span></div>
        </div>
        <div id="answer-list">
          <span className="answer">1. {Answer1}</span>
          <span className="answer">2. {Answer2}</span>
          <span className="answer">3. {Answer3}</span>
          <span className="answer">4. {Answer4}</span>
        </div>
        <Button color="primary" variant="contained" id="show-question" onClick={showAnswer}>
          Show Ans
        </Button>
        {Answerstate && (
          <div>
            <br />
            <span id="correct-answer">{Answer}</span>
          </div>
        )}
        <br />
        <Button color="primary" variant="contained" id="next-question" onClick={nextQuestion}>
          Next Question
        </Button>
      </div>
    </QuestionWrapper>
  );
}

export default QuestionAnswer;
