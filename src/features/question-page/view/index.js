import React from "react";
import useQuestion from "../hooks/useQuestion";
import QuestionWrapper from "./index.style";
import { FcClock } from "react-icons/fc";
import { Button } from "@mui/material";
import Licenceimg from "../../../common/assets/license.jpg"

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
          <img src={Licenceimg} alt="licence" id="licence-img" />
          <span className="answer">क. {Answer1}</span>
          <span className="answer">ख. {Answer2}</span>
          <span className="answer">ग. {Answer3}</span>
          <span className="answer">घ. {Answer4}</span>
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
