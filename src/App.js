import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./components/MainRouter";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import { EmailModalProvider } from "./contexts/EmailModalContext";

function App() {
  return (
    <PortfolioProvider>
      <EmailModalProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </EmailModalProvider>
    </PortfolioProvider>
  );
}

export default App;
