/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Page } from "../../components/Child/Page";
import { searchQuestions } from "../../data/QuestionData";
import { QuestionList } from "../../components/Question/QuestionList";
import { useSelector, useDispatch } from "react-redux";
import { AppState, searchedQuestionsAction, searchingQuestionsAction } from "../../components/redux/store/Store";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("criteria") || "";
  const questions = useSelector((state: AppState) => state.questions.searched);

  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      dispatch(searchingQuestionsAction());
      const foundResults = await searchQuestions(criteria);
      dispatch(searchedQuestionsAction(foundResults));
    };
    doSearch(search);
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
