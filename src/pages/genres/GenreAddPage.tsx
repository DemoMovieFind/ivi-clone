import { useNavigate } from "react-router-dom";
import styles from './GenresPage.module.css';
import { useIntl } from "react-intl";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Loader from "../../components/loader/Loader";
import { useState } from "react";
import Modal from "../../components/modalWindow/Modal";
import { clearError } from "../../store/filmsState";
import { addGenre, selectGenres } from "../../store/genresState";

type Inputs = {
  name_ru:string,
  name_en:string,
};

const GenreAddPage = () => {
  const genresState = useAppSelector(selectGenres);
  const [requestWasSent,setRequestWasSent] = useState(false);
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit = async (data:FieldValues) => {
    setRequestWasSent(true);
    dispatch(addGenre({genre_ru:data.name_ru,genre_en:data.name_ru}));
  }

  const handleModalClose = () => {
    navigate('/admin');
    dispatch(clearError());
    setRequestWasSent(false);
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({id:'add_genre_title'})}</h1>
      {genresState.status === 'loading' && <Loader/>}
      {(genresState.status === 'rejected') && <Modal handleClose={handleModalClose} headerId={"modal_error_header"} body={genresState.error} />}
      {(genresState.status === 'resolved' && requestWasSent) && <Modal handleClose={handleModalClose} headerId={"modal_success_header"} body={''} />}
      {<form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label} htmlFor="name_ru">
          {intl.formatMessage({id:'genre_name'})}
        </label>
        <input 
          id="name_ru"
          className={styles.input} 
          title={intl.formatMessage({id:'genre_name'})}
          {...register("name_ru",{ required: true })} 
        />
        { errors.name_ru && <span className={styles.error}>{intl.formatMessage({id:'change_error'})}</span> }
        <label className={styles.label} htmlFor="name_en">
          {intl.formatMessage({id:'genre_name_en'})}
        </label>
        <input 
          id="name_en"
          className={styles.input} 
          title={intl.formatMessage({id:'genre_name_en'})}
          {...register("name_en",{ required: true })} />
          { errors.name_en && <span className={styles.error}>{intl.formatMessage({id:'change_error'})}</span> }
        <Button 
          appearance="default" 
          type="submit" 
          title={intl.formatMessage({id:'add_genre'})} 
          children={intl.formatMessage({id:'add_genre'})}/>
      </form>}
    </div>
  )
}

export default GenreAddPage;