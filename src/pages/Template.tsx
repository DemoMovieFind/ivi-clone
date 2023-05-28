import Header from "../components/header/Header";
import styles from "./Template.module.css";
import { IntlProvider } from "react-intl";
import { messages } from "../i18n/messages";
import { LOCALES } from "../i18n/locales";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectLang } from "../store/langState";
import Footer from "../components/footer/Footer";
import MobilMenu from "../components/mobilMenu/MobilMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/authState";

export type TemplateTypeProps = {
  content: JSX.Element;
  isAdminPage?: boolean;
};

const Template = ({ content, isAdminPage = false }: TemplateTypeProps) => {
  const lang = useAppSelector(selectLang);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')?.length=== 0){
      dispatch(logOut())
      navigate('/')
    }
  },[localStorage.getItem('token')])

  return (
    <div className={styles.template}>
      <IntlProvider
        messages={messages[lang.lang]}
        locale={lang.lang}
        defaultLocale={LOCALES.RUSSIAN}
      >
        <Header />
        <MobilMenu />
        <div className={styles.content}>{content}</div>
        {!isAdminPage && <Footer />}
      </IntlProvider>
    </div>
  );
};

export default Template;
