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

  #licence-img{
    height:250px;
    width:250px;
    object-fit:cover;
    margin: 20px 0;
  }

  #correct-answer{
    font-size: 26px;
    font-weight: 600;
    color:#4caf50;

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
