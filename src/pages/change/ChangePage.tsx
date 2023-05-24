import { useNavigate, useParams } from "react-router-dom";
import styles from './ChangePage.module.css';
import { useIntl } from "react-intl";
import { FieldValues, useFieldArray, useForm, Controller } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Loader from "../../components/loader/Loader";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import { useEffect, useState } from "react";
import Modal from "../../components/modalWindow/Modal";
import { clearError, deleteFilmFromServer, getFilmFromServer, selectFilm, updateFilmOnServer } from "../../store/filmsState";
import { getGenres, selectGenres } from "../../store/genresState";

type Inputs = {
  name_ru:string,
  name_en:string,
  genres:{value:string}[],
};

const ChangePage = () => {
  const params = useParams();
  const genresState = useAppSelector(selectGenres);
  const filmState = useAppSelector(selectFilm);
  const [genresNotLoaded,setGenresNotLoaded] = useState(true);
  const [requestWasSent,setRequestWasSent] = useState(false);
  const intl = useIntl();
  const id = Number(params.id) ?? 0;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [film,setFilm] = useState<FilmMainCard|null>(null);
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const { fields, append, remove, update} = useFieldArray<Inputs>({
    control, 
    name: "genres",
  });

  useEffect(() => {
    dispatch(getFilmFromServer({id}));
  },[])

  useEffect((()=>{
    if (genresState.genres.length === 0) {
      dispatch(getGenres());
    }
    if (genresState.genres.length > 0) {
      setGenresNotLoaded(false);
    }
  }),[genresState.genres])

  useEffect(() => {
    if (filmState.film?.id === id && genresState.genres.length>0) {
    const film = filmState.film;
      reset({
      name_ru:film.name,
      name_en:film.name_en,
    })
    setFilm(film);
    film.genres?.forEach((field: { [key: string]: number | string  }, index: number) => {
      Object.keys(field).forEach((key) => {
        if (key === 'name'){
          update(index,{value:`${field[key]}`})
        }
      })
    })
  }
  },[filmState.film,genresState.genres])

  const onSubmit = async (data:FieldValues) => {
    setRequestWasSent(true);
    const dataTosave = {
      id:film?.id??0,
      name:data.name_ru??'',
      name_en:data.name_en??'',
      genre:data.genres.map((genre:{value:string,label?:string})=>{return genre.value}).filter((genre:string)=>genre.length>0)??[],
    };
    dispatch(updateFilmOnServer(dataTosave));
  }

  const handleDelete = () => {
    setRequestWasSent(true);
    dispatch(deleteFilmFromServer({id}));
  }

  const handleModalClose = () => {
    navigate('/admin');
    dispatch(clearError());
    setRequestWasSent(false);
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({id:'change_title'})}</h1>
      {genresNotLoaded && <Loader/>}
      {filmState.status === 'loading' && <Loader/>}
      {(filmState.status === 'rejected') && <Modal handleClose={handleModalClose} headerId={"modal_error_header"} body={filmState.error} />}
      {(filmState.status === 'resolved' && requestWasSent) && <Modal handleClose={handleModalClose} headerId={"modal_success_header"} body={''} />}
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
          {fields.map((field, index) => {
            return (
              <div className={styles.wrapperGenre} key={field.id}>
                <div className={styles.wrapperSelect}>
                  <Controller
                    name={`genres.${index}`}
                    control={control}
                    key={field.id}
                    render={
                      ({ field }) => <Select name={`genres.${index}`} defaultValue={{value: field.value.value, label: field.value.value}} options={genresState.genres.map(genre=>{return {value:genre,label:genre}})} onChange={field.onChange}/>
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
          title={intl.formatMessage({id:'change_change'})} 
          children={intl.formatMessage({id:'change_change'})}/>
        <Button 
          onPointerDown={handleDelete} 
          appearance="primary" 
          title={intl.formatMessage({id:'change_delete'})} 
          children={intl.formatMessage({id:'change_delete'})}/>
      </form>}
    </div>
  )
}

export default ChangePage;