/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import user from "./user.png";

export const UserIcon = () => {
  return (
    <img
      src={user}
      alt="User"
      width="24px"
      css={css`
        width: 12px;
        opacity: 0.6;
      `}
    />
  );
};
