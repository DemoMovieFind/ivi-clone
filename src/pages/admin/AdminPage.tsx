import { useIntl } from "react-intl";
import styles from './AdminPage.module.css';
import ShortCardFilm from "../../components/shortCardFilm/ShortCardFilm";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";
import { useEffect, useState } from "react";
import { FilmMainCard } from "../../types/entities/FilmMainCard";
import useAxios from "../../services/HttpService";
import ReactPaginate from 'react-paginate';
import Loader from "../../components/loader/Loader";

const AdminPage = ()=> {
  const {response,loaded} = useAxios({method:'get',url:'/films/?page=1&take=10'});
  const [films,setFilms] = useState<FilmMainCard[]>([]);
  const [ itemOffset, setItemOffset ] = useState(0);
  const FILMS_PER_PAGE = 10;
  const endOffset = itemOffset + FILMS_PER_PAGE;
  const currentItems = films.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(films.length / FILMS_PER_PAGE);
  const intl  = useIntl();
    const {
    handleSubmit,
    formState: { errors },
    register,
    } = useForm();

  const onHandleSearch = (data:FieldValues) => {
    console.log(data);
  }

  useEffect(() => {
    if (response !==null) {
      setFilms(response);
    }
  },[response])

  const handlePaginationClick = (event:{selected:number}) => {
    const newOffset = (event.selected * FILMS_PER_PAGE) % films.length;
    setItemOffset(newOffset);
  };


  return (
    <>
    <h1 className={styles.title}>{intl.formatMessage({id:'admin_title'})}</h1>
    {!loaded && <Loader/>}
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
          required={true}
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
      currentItems.map((film) => {
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