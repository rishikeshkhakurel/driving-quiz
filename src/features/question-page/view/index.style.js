import styled from "styled-components";

const QuestionWrapper = styled.div`
  background: #f0f2f5;
  height: 100vh;

  #question-answer-container {
    padding: 20px;
  }

  #question {
    font-size: 26px;
    font-weight: 600;
  }

  #answer-list {
    display: flex;
    flex-direction: column;
  }

  .answer{
      margin: 3px 0 !important;
  }

  #show-answer,
  #next-question {
    margin: 10px 0;
  }

  #clock-question{
    display:flex;

    #clock{
      margin-left:10px;
      font-size:26px;
    }

    #seconds{
      margin-left:10px;
    }
  }
`;

export default QuestionWrapper;
