/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { fontFamily, fontSize, gray2 } from "./Styles";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { SearchPage } from "./pages/Search/SearchPage";
import { SignInPage } from "./pages/Auth/SignInPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { QuestionPage } from "./pages/Question/QuestionPage";
import { Provider } from "react-redux";
import { configureStore } from "./components/redux/store/Store";

const AskPage = React.lazy(() => import("./pages/Ask/AskPage"));
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
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
            <Route
              path="/ask"
              element={
                <React.Suspense
                  fallback={
                    <div
                      css={css`
                        margin-top: 100px;
                        text-align: center;
                      `}
                    >
                      Loading ...
                    </div>
                  }
                >
                  <AskPage />
                </React.Suspense>
              }
            />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="questions/:questionId" element={<QuestionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
