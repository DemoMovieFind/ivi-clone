import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage";
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
      defaultLocale={LOCALES.RUSSIAN}
    >
      <MainPage />
    </IntlProvider>
  </React.StrictMode>
);
