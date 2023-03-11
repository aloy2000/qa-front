/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { QuestionData } from "../../interfaces/interface";
import { Question } from "./Question";
import { accent2, gray5 } from "../../Styles";

export const QuestionList = (props: IProps) => {
  return (
    <ul
      css={css`
        list-style: none;
        margin: 10px 0 0 0;
        padding: 0px 20px;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top: 3px solid ${accent2};
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
      `}
    >
      {props.data.map((question) => {
        return (
          <li
            key={question.questionId}
            css={css`
              border-top: 1px solid ${gray5};
              :first-of-type {
                border-top: none;
              }
            `}
          >
            {props.renderItem ? (
              props.renderItem(question)
            ) : (
              <Question data={question} showContent={true}/>
            )}{" "}
          </li>
        );
      })}
    </ul>
  );
};

interface IProps {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}
