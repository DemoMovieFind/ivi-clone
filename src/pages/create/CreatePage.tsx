/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import styles from './CreatePage.module.css';
import { useIntl } from "react-intl";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectAuth } from "../../store/authState";
import Loader from "../../components/loader/Loader";
import { api } from "../../services/HttpService";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useState } from "react";
import Modal from "../../components/modalWindow/Modal";
import axios from "axios";
import { clearError, selectFilm, updateFilm } from "../../store/filmsState";

type Inputs = {
  name_ru:string,
  name_en:string,
  genres:{value:string}[],
};

const CreatePage = () => {
  const authState = useAppSelector(selectAuth);
  const filmState = useAppSelector(selectFilm);
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [film,setFilm] = useState<FilmMainCard|null>(null);
  const [showModal,setShowModal] = useState(false);
  const [errorText,setErrorText] = useState('');
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const { fields, append, remove, update} = useFieldArray<Inputs>({
    control, 
    name: "genres",
    rules:{
      minLength:1
    }
  });

  const onSubmit = async (data:FieldValues) => {
    const dataTosave = {
      name:data.name_ru,
      name_en:data.name_en,
      genre:data.genres?.map((genre:{value:string})=>{return genre.value}).filter((genre:string)=>genre.length > 0),
    };
    console.log(dataTosave);
  }

  const handleModalClose = () => {
    navigate('/admin');
    dispatch(clearError());
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({id:'add_film_title'})}</h1>
      {filmState.status === 'loading' && <Loader/>}
      {(filmState.status === 'rejected'||showModal) && <Modal handleClose={handleModalClose} headerId={"modal_error_header"} body={filmState.error?filmState.error:errorText} />}
      {<form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="name_ru">
          {intl.formatMessage({id:'admin_name'})}
        </label>
        <input 
          id="name_ru"
          className={styles.input} 
          defaultValue={film?.name} 
          title={intl.formatMessage({id:'admin_name'})}
          {...register("name_ru",{ required: true })} 
        />
        { errors.name_ru && <span className={styles.error}>{intl.formatMessage({id:'change_error'})}</span> }
        <label className={styles.label} htmlFor="name_en">
          {intl.formatMessage({id:'admin_name_en'})}
        </label>
        <input 
          id="name_en"
          className={styles.input} 
          defaultValue={film?.name_en}
          title={intl.formatMessage({id:'admin_name_en'})}
          {...register("name_en")} />
        {fields.map((field, index) => {return (
          <div className={styles.wrapperGenre} key={field.id}>
          <input className={styles.inputGenre}
            {...register(`genres.${index}.value` as const)} 
          />
          <Button size="small" appearance="primary" children={intl.formatMessage({id:'change_delete_genre'})} onPointerDown={() => remove(index)}/>
          </div>
        )})}
        <Button 
          size="small" 
          appearance="default" 
          children={intl.formatMessage({id:'change_add_genre'})} 
          onPointerDown={() => append({ value: "" })}/>
        <Button 
          appearance="default" 
          type="submit" 
          title={intl.formatMessage({id:'change_change'})} 
          children={intl.formatMessage({id:'change_change'})}/>
      </form>}
    </div>
  )
}

export default CreatePage;