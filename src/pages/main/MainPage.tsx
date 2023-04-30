import styles from "./MainPage.module.css";
import { FormattedMessage } from "react-intl";

const MainPage = () => {

  return (
    <>
      <h1 className={styles.title}>
        <FormattedMessage id="header" />
      </h1>
    </>
  );
};

export default MainPage;
