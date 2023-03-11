/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { PageTitle } from "./PageTitle";

export const Page = (props: IProps) => {
  return (
    <div
      css={css`
        margin: 50px auto 20px auto;
        padding: 30px 20px;
        max-width: 800px;
      `}
    >
      {props.title && <PageTitle>{props.title}</PageTitle>}
      {props.children}
    </div>
  );
};

interface IProps {
  title?: string;
  children: React.ReactNode;
}
