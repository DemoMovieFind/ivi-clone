import Header from "../components/header/Header";
import styles from "./MainPage.module.css";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { LOCALES } from "../i18n/locales";
import { useAppSelector } from "../store/hooks";
import { selectLang } from "../store/langState";

export type TemplateTypeProps = {
  content:JSX.Element
}

const Template = ({content}:TemplateTypeProps) => {
  const lang = useAppSelector(selectLang);

  return (
    <div className={styles.main}>
      <IntlProvider 
        messages={messages[lang.lang]}
        locale={lang.lang}
        defaultLocale={LOCALES.RUSSIAN}>
      <Header />
      {content}
      </IntlProvider>
    </div>
  );
};

export default Template;