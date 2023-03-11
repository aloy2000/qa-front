/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { AnswerData } from "../../interfaces/interface";
import { gray5 } from "../../Styles";
import { Answer } from "./Answer";

export const AnswerList = ({ data }: IProps) => {
  return (
    <ul
      css={css`
        list-style: none;
        margin: 10px 0 0 0;
        padding: 0;
      `}
    >
      {data.map((answer) => (
        <li
          css={css`
            border-top: 1px solid ${gray5};
          `}
          key={answer.answerId}
        >
          <Answer data={answer} />
        </li>
      ))}
    </ul>
  );
};

interface IProps {
  data: AnswerData[];
}
