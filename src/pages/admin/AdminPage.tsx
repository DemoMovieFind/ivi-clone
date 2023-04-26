import { useIntl } from "react-intl";
import styles from './AdminPage.module.css';
import films from "../../miniDb";
import ShortCardFilm from "../../components/shortCardFilm/ShortCardFilm";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../../components/buttons/Button";

const AdminPage = ()=> {
  const intl  = useIntl();
    const {
    handleSubmit,
    formState: { errors },
    register,
    } = useForm();
  
  const onHandleSearch = (data:FieldValues) => {
    console.log(data);
  }

  return (
    <>
    <h1 className={styles.title}>{intl.formatMessage({id:'admin_title'})}</h1>
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
      films.map((film) => {
        return <ShortCardFilm  key={film.name} name={film.name} name_en={film.name_en} genres={film.genre}/>
      })
    }
    </>
  )
}

export default AdminPage;