import styles from "./MainPage.module.css";
import { FormattedMessage } from "react-intl";
import { useAppDispatch } from "../../store/hooks";
import { initFilms } from "../../store/filmsInit";
import { useEffect } from "react";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(initFilms());
  },[])

  return (
    <>
      <h1 className={styles.title}>
        <FormattedMessage id="header" />
      </h1>
    </>
  );
};

export default MainPage;
