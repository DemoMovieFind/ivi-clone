import { useIntl } from "react-intl";
import styles from './AdminPage.module.css';
import '../../components/pagination/pagination.css';
import ShortCardFilm from "../../components/shortCardFilm/ShortCardFilm";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useEffect, useState } from "react";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import ReactPaginate from 'react-paginate';
import Loader from "../../components/loader/Loader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearError, getFilmsPage, initFilms, searchFilmOnServer, selectFilm } from "../../store/filmsState";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modalWindow/Modal";

const AdminPage = () => {
  const [ films, setFilms ] = useState<FilmMainCard[]>([]);
  const filmState = useAppSelector(selectFilm);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const FILMS_PER_PAGE = 10;
  const pageCount = Math.ceil(filmState.totalFilms / FILMS_PER_PAGE);
  const intl  = useIntl();
  const { handleSubmit, formState: { errors }, register } = useForm();

  const onHandleSearch = (data:FieldValues) => {
    if (data.search.length === 0) {
      dispatch(initFilms())
    } else {
      dispatch(searchFilmOnServer(data as {search:string}))
    }
  }

  useEffect(() => {
    if (filmState.films.length >0) {
      setFilms(filmState.films);
    } else dispatch(initFilms());
  },[filmState.films])

  const handlePaginationClick = (event:{selected:number}) => {
    dispatch(getFilmsPage({page:event.selected}));
  };

  const handleAddFilm = () => {
    navigate('/create');
  }

  const handleModalClose = () => {
    dispatch(clearError());
  };

  const handleGenreAdd = () => {
    navigate('/genreadd');
  }

  const handleGenreDelete = () => {
    navigate('/genredelete');
  }

  return (
    <>
    <h1 className={styles.title}>{intl.formatMessage({id:'admin_title'})}</h1>
    {filmState.status === 'loading' && <Loader/>}
    {(filmState.status === 'rejected') && <Modal handleClose={handleModalClose} headerId={"modal_error_header"} body={filmState.error??''} />}
    <div className={styles.titleButtonWrapper}>
      <Button type="button" appearance="default" onPointerDown={handleAddFilm}
            children={intl.formatMessage({id:'add_film_title'})}
      />
      <Button type="button" appearance="default" onPointerDown={handleGenreAdd}
            children={intl.formatMessage({id:'add_genre_title'})}
      />
      <Button type="button" appearance="default" onPointerDown={handleGenreDelete}
            children={intl.formatMessage({id:'delete_genre_title'})}
      />
    </div>
    <form className={styles.form} onSubmit={handleSubmit(onHandleSearch)}>
        <label 
          htmlFor="email" 
          className={styles.label}>
            {intl.formatMessage({
            id:'admin_search'
          })}
        </label>
        <input
          className={styles.input}
          type= 'search'
          id="search"
          {...register("search")}
        ></input>
        {errors.search && (
        <small className={styles.error}>{`${errors.search.message}`}</small>
        )}
      <Button type="submit" appearance="default" children={intl.formatMessage({
            id:'admin_find'
          })}/>
    </form>
    {
      films.map((film) => {
        return <ShortCardFilm key={film.id} film={film}/>
      })
    }
    <div className={styles.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePaginationClick}
        pageRangeDisplayed={FILMS_PER_PAGE}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={() => null}
      />
    </div>
    </>
  )
}

export default AdminPage;