import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage';
import "./index.css";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const locale = LOCALES.RUSSIAN;

root.render(
  <React.StrictMode>
    <IntlProvider 
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.RUSSIAN}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>
);
