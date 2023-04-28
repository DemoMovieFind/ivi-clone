import { useEffect } from "react";
import styles from "./MainPage.module.css";
import { FormattedMessage } from "react-intl";
import { uploadFilms } from "../../store/filmsInitDBstate";
import file from '../../dataToLoadIntoServer/data.json';
import { useAppDispatch } from "../../store/hooks";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(uploadFilms({file}));
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
