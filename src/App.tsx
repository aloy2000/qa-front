/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { fontFamily, fontSize, gray2 } from "./Styles";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { SearchPage } from "./pages/Search/SearchPage";
import { AskPage } from "./pages/Ask/AskPage";
import { SignInPage } from "./pages/Auth/SignInPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { QuestionPage } from "./pages/Question/QuestionPage";

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
