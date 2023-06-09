import { useNavigate } from "react-router-dom";
import styles from './CreatePage.module.css';
import { useIntl } from "react-intl";
import { Controller, FieldValues, useFieldArray, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modalWindow/Modal";
import { clearError, createFilmOnServer, selectFilm } from "../../store/filmsState";
import { useEffect, useState } from "react";
import { getGenres, selectGenres } from "../../store/genresState";
import Select from "react-select";

type Inputs = {
  name_ru:string,
  name_en:string,
  genres:{value:string}[],
};

const CreatePage = () => {
  const filmState = useAppSelector(selectFilm);
  const genresState = useAppSelector(selectGenres);
  const [genresNotLoaded,setGenresNotLoaded] = useState(true);
  const intl = useIntl();
  const [requestWasSent,setRequestWasSent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { fields, append, remove} = useFieldArray<Inputs>({
    control, 
    name: "genres",
  });

  const onSubmit = async (data:FieldValues) => {
    const dataTosave = {
      name:data.name_ru,
      name_en:data.name_en,
      genre:data.genres.length>0?data.genres.map((genre:{value:string,label?:string}) => {return genre.value}).filter((genre:string)=>genre.length>0):[],
      type: "сериал",
      year: 2023,
      country: "Россия",
      tagline: "Lorem ipsum sit amet",
      director: [
          "Рустам Мосафир"
      ],
      scenario: [
          "Дмитрий Лемешев",
          "Рустам Мосафир",
          "Александр Бузин"
      ],
      producer: [
          "Дмитрий Нелидов",
          "Александра Ремизова",
          "Ольга Филипук"
      ],
      operator: [
          "Степан Бешкуров"
      ],
      compositor: [
          "Алексей Горшенев"
      ],
      artist: [
          "Григорий Пушкин",
          "Оксана Кручина",
          "Макр Ли"
      ],
      montage: [
          "Андрей Назаров"
      ],
      actors: [
          "Константин Плотников",
          "Влад Коноплёв"
      ],
      budget: "€9 500 000",
      feesUS: "$10 198 820",
      fees: "+ $416 389 690 = $426 588 510",
      feesRU: "$1 725 813",
      premiereRU: "26 апреля 2012",
      premiere: "23 сентября 2011",
      releaseDVD: "28 мая 2012, «Новый Диск»",
      releaseBluRay: "25 июня 2012, «Новый Диск»",
      age: "16+",
      ratingMPAA: "R",
      time: "112 мин. / 01:52",
      description: "Lorem ipsum sit amet",
      mainImg: "https://www.images.ru/film-img",
      countScore: 0,
    };
    dispatch(createFilmOnServer(dataTosave));
    setRequestWasSent(true);
  }

  const handleModalClose = () => {
    navigate('/admin');
    dispatch(clearError());
    setRequestWasSent(false);
  }

  useEffect((()=>{
    dispatch(getGenres());
  }),[])

  useEffect((()=>{
    if (genresState.genres.length > 0) {
      setGenresNotLoaded(false);
    }
  }),[genresState.genres])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({id:'add_film_title'})}</h1>
      {genresNotLoaded && <Loader/>}
      {filmState.status === 'loading' && <Loader/>}
      {(filmState.status === 'rejected') && <Modal handleClose={handleModalClose} headerId={"modal_error_header"} body={filmState.error??''} />}
      {(filmState.status === 'resolved' && requestWasSent) && <Modal handleClose={handleModalClose} headerId={"modal_success_header"} body={''} />}
      {<form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="name_ru">
          {intl.formatMessage({id:'admin_name'})}
        </label>
        <input 
          id="name_ru"
          className={styles.input} 
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
          title={intl.formatMessage({id:'admin_name_en'})}
          {...register("name_en")} />
          {fields.map((field, index) => {
            return (
              <div className={styles.wrapperGenre} key={field.id}>
                <div className={styles.wrapperSelect}>
                  <Controller
                    name={`genres.${index}`}
                    control={control}
                    key={field.id}
                    render={
                      ({ field }) => <Select name={`genres.${index}`} defaultValue={{value: field.value.value, label: field.value.value}} options={genresState.genres.map(genre=>{return {value:genre.name,label:genre.name}})} onChange={field.onChange}/>
                    }
                  />
                </div>
              <Button size="small" appearance="primary" children={intl.formatMessage({id:'change_delete_genre'})} onPointerDown={() => remove(index)}/>
              </div>
        )})}
        { errors.genres && <span className={styles.error}>{intl.formatMessage({id:'change_error'})}</span> }
        <Button 
          size="small" 
          appearance="default" 
          children={intl.formatMessage({id:'change_add_genre'})} 
          onPointerDown={() => append({ value: "" })}/>
        <Button 
          appearance="default" 
          type="submit" 
          title={intl.formatMessage({id:'change_add'})} 
          children={intl.formatMessage({id:'change_add'})}/>
      </form>}
    </div>
  )
}

export default CreatePage;