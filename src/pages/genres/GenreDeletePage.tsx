import { useNavigate } from "react-router-dom";
import styles from './GenresPage.module.css';
import { useIntl } from "react-intl";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Loader from "../../components/loader/Loader";
import { useEffect, useState } from "react";
import Modal from "../../components/modalWindow/Modal";
import { clearError } from "../../store/filmsState";
import { deleteGenre, getGenres, selectGenres } from "../../store/genresState";
import { Genre } from "../../types/entities/FilmMainCard";

type Inputs = {
  genres:{value:string}[],
};

const GenreDeletePage = () => {
  const genresState = useAppSelector(selectGenres);
  const [initialGenres,setInitialGenres] = useState<Genre[]>([])
  const [requestWasSent,setRequestWasSent] = useState(false);
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const { fields, remove, update} = useFieldArray<Inputs>({
    control, 
    name: "genres",
  });

  useEffect(()=>{
    dispatch(getGenres());
  },[])

  useEffect((()=>{

    if (genresState.genres.length > 0) {
      setInitialGenres(genresState.genres);
      genresState.genres?.forEach((field: Genre, index: number) => {
        update(index, {value:field.name});
      })
    }

  }),[genresState.genres])

  const onSubmit = () => {
    return undefined
  }

  const handleDelete = (field:{value:string,id:string})=> {
    const genreToDelete = initialGenres.find((genre)=>genre.name === field.value)
    setRequestWasSent(true);
    if (genreToDelete) {
      dispatch(deleteGenre({id:genreToDelete.id}))
    }
  }

  const handleModalClose = () => {
    navigate('/admin');
    dispatch(clearError());
    setRequestWasSent(false);
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{intl.formatMessage({id:'delete_genre_title'})}</h1>
      {genresState.status === 'loading' && <Loader/>}
      {(genresState.status === 'rejected') && <Modal handleClose={handleModalClose} headerId={"modal_error_header"} body={genresState.error} />}
      {(genresState.status === 'resolved' && requestWasSent) && <Modal handleClose={handleModalClose} headerId={"modal_success_header"} body={''} />}
      {<form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <div className={styles.wrapperGenre} key={field.id}>
                <div className={styles.wrapperSelect}>
                  <input 
                    type="text"
                    key={field.id}
                    className={styles.input}
                    {...register(`genres.${index}.value` as const,{ required: true })} />
                </div>
              <Button 
                size="small" 
                appearance="primary" 
                children={intl.formatMessage({id:'change_delete_genre'})} 
                onPointerDown={() => {
                    remove(index);
                    handleDelete(field);
                  }
                }
              />
              </div>
        )})}
        { errors.genres && <span className={styles.error}>{intl.formatMessage({id:'change_error'})}</span> }
      </form>}
    </div>
  )
}

export default GenreDeletePage;