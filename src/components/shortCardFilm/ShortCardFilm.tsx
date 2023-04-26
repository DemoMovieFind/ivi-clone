import { Link } from 'react-router-dom';
import styles from './ShortCardFilm.module.css';
import { useIntl } from 'react-intl';

export type ShortCardFilmPropsType = {
  name:string,
  name_en:string|undefined,
  genres:string[],
}

const ShortCardFilm = ({name,name_en,genres}:ShortCardFilmPropsType) => {
  const intl = useIntl();
  return (
    <Link key={name} to={`/admin/${name}`}>
    <div className={styles.short}>
      <span className={styles.description}>{intl.formatMessage({id:'admin_name'})}{name}</span>
      <span className={styles.description}>{intl.formatMessage({id:'admin_name_en'})}{name_en}</span>
      <span className={styles.description}>{intl.formatMessage({id:'admin_genres'})}</span>
      {genres.map((genre)=>{
        return <span key={genre} className={styles.description}>{genre}</span>
      })}
    </div>
    </Link>
  )
}

export default ShortCardFilm;