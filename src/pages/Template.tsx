import Header from "../components/header/Header";
import styles from "./Template.module.css";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { LOCALES } from "../i18n/locales";
import { useAppSelector } from "../store/hooks";
import { selectLang } from "../store/langState";
import Footer from "../components/footer/Footer";

export type TemplateTypeProps = {
  content: JSX.Element,
  isAdminPage?: boolean,
}

const Template = ({ content, isAdminPage = false }: TemplateTypeProps) => {
  const lang = useAppSelector(selectLang);

  return (
    <div className={styles.template}>
      <IntlProvider
        messages={messages[lang.lang]}
        locale={lang.lang}
        defaultLocale={LOCALES.RUSSIAN}>
        <Header />
        <div className={styles.content}>
          {content}
        </div>
        {!isAdminPage && <Footer />}
      </IntlProvider>
    </div>
  );
};

export default Template;