/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Page } from "../../components/Child/Page";
import { QuestionData } from "../../interfaces/interface";
import { searchQuestions } from "../../data/QuestionData";
import { QuestionList } from "../../components/Question/QuestionList";

export const SearchPage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("criteria") || "";

  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      setQuestions(foundResults);
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
      <QuestionList data={questions}/>
    </Page>
  );
};
