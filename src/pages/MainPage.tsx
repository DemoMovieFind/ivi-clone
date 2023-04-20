import Header from "../components/header/Header";
import styles from "./MainPage.module.css";
import { FormattedMessage } from "react-intl";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Header/>
      <h1 className={styles.title}>
        <FormattedMessage id="header" />
      </h1>
    </div>
  );
};

export default MainPage;
