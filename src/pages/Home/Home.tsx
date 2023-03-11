/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { QuestionList } from "../../components/Question/QuestionList";
import { getUnansweredQuestions } from "../../data/QuestionData";
import { Page } from "../../components/Child/Page";
import { PageTitle } from "../../components/Child/PageTitle";
import { QuestionData } from "../../interfaces/interface";
import { PrimaryButton } from "../../Styles";

export const Home = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionLoading, setQuestionLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function doGetUnansweredQuestions() {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionLoading(false);
    }
    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    navigate("ask")
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions}  />
      )}
    </Page>
  );
};
