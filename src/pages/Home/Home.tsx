/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { QuestionList } from "../../components/Question/QuestionList";
import { getUnansweredQuestions } from "../../data/QuestionData";
import { Page } from "../../components/Child/Page";
import { PageTitle } from "../../components/Child/PageTitle";
import { PrimaryButton } from "../../Styles";
import { useSelector, useDispatch } from "react-redux";
import {
  AppState,
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
} from "../../components/redux/store/Store";

export const Home = () => {
  // const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  // const [questionLoading, setQuestionLoading] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered
  );
  const questionsLoading = useSelector(
    (state: AppState) => state.questions.loading
  );
  React.useEffect(() => {
    async function doGetUnansweredQuestions() {
      dispatch(gettingUnansweredQuestionsAction());
      const unansweredQuestions = await getUnansweredQuestions();
      dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
    }
    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    navigate("ask");
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
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions} />
      )}
    </Page>
  );
};
