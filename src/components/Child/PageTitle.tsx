/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export const PageTitle = (props: IProps) => {
  return (
    <h2
      css={css`
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0px 5px;
        text-align: center;
        text-transform: uppercase;
      `}
    >
      {props.children}
    </h2>
  );
};

interface IProps {
  children: React.ReactNode;
}
