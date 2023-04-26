import { useIntl } from "react-intl";
import styles from './AdminPage.module.css';
import films from "../../miniDb";
import ShortCardFilm from "../../components/shortCardFilm/ShortCardFilm";

const AdminPage = ()=> {
  const intl  = useIntl();

  return (
    <>
    <h1 className={styles.title}>{intl.formatMessage({id:'admin_title'})}</h1>
    {
      films.map((film) => {
        return <ShortCardFilm  key={film.name} name={film.name} name_en={film.name_en} genres={film.genre}/>
      })
    }
    </>
  )
}

export default AdminPage;