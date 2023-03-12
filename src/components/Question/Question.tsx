/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { QuestionData } from "../../interfaces/interface";
import { gray2 } from "../../Styles";
import { Link, useParams } from "react-router-dom";

export const Question = (props: IProps) => {
  return (
    <div
      css={css`
        padding: 10px 0px;
        font-size: 19px;
      `}
    >
      <div
        css={css`
          padding: 10px 0px;
          font-size: 19px;
        `}
      >
        <Link
          css={css`
            text-decoration: none;
            color: ${gray2};
          `}
          to={`/questions/${props.data.questionId}`}
        >
          {props.data.title}
        </Link>
      </div>
      {props.showContent && (
        <div
          css={css`
            padding-bottom: 10px;
            font-size: 18px;
            color: ${gray2};
          `}
        >
          {props.data.content.length > 50
            ? `${props.data.content.substring(0, 50)}...`
            : props.data.content}
        </div>
      )}
      <div
        css={css`
          padding-bottom: 10px;
          font-size: 14px;
          color: ${gray2};
        `}
      >
        {`Asked by ${
          props.data.userName
        } on ${props.data.created.toLocaleDateString()} ${props.data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};

interface IProps {
  data: QuestionData;
  showContent?: boolean;
}
