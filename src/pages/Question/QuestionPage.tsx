/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useParams } from "react-router-dom";
import { getQuestion } from "../../data/QuestionData";
import { QuestionData } from "../../interfaces/interface";
import { gray3, gray6 } from "../../Styles";
import { Page } from "../../components/Child/Page";
import { AnswerList } from "../../components/Answer/AnswerList";

export const QuestionPage = () => {
  const { questionId } = useParams();
  const [question, setQuestion] = React.useState<QuestionData | null>(null);

  React.useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
    };

    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0px 5px;
          `}
        >
          {question === null ? "" : question.title}
        </div>
        {question !== null && (
          <React.Fragment>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
              `}
            >
              {question.content}
            </p>
            <div
              css={css`
                  font-size: 12px;
                  font-style: italic;166
                  Routing with React Router
                  color: ${gray3};
              `}
            >
              {`Asked by ${question.userName} on
              ${question.created.toLocaleDateString()}
              ${question.created.toLocaleTimeString()}`}
            </div>
            <AnswerList data={question.answers} />
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};
