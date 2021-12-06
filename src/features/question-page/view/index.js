import React from "react";
import useQuestion from "../hooks/useQuestion";
import QuestionWrapper from "./index.style";

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
  } = useQuestion();

  return (
    <QuestionWrapper>
      <div id="question-answer-container">
        <span id="question">{Questions}</span>
        <div id="answer-list">
          <span className="answer">1. {Answer1}</span>
          <span className="answer">2. {Answer2}</span>
          <span className="answer">3. {Answer3}</span>
          <span className="answer">4. {Answer4}</span>
        </div>
        <button id="show-answer" onClick={showAnswer}>
          Show Ans
        </button>
        {Answerstate && (
          <div>
            <br />
            <span id="question">{Answer}</span>
          </div>
        )}
        <br />
        <button id="next-question" onClick={nextQuestion}>
          Next Question
        </button>
      </div>
    </QuestionWrapper>
  );
}

export default QuestionAnswer;
