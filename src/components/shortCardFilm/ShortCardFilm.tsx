import { Link } from 'react-router-dom';
import styles from './ShortCardFilm.module.css';
import { useIntl } from 'react-intl';
import { FilmMainCard } from '../../types/entities/FilmMainCard';

export type ShortCardFilmPropsType = {
  film:FilmMainCard
}

const ShortCardFilm = ({film}:ShortCardFilmPropsType) => {
  const {id,name,name_en} = film;
  const intl = useIntl();
  return (
    <Link key={name} to={`/admin/${id}`}>
    <div className={styles.short}>
      <span className={styles.description}>{intl.formatMessage({id:'admin_name'})}{name}</span>
      <span className={styles.description}>{intl.formatMessage({id:'admin_name_en'})}{name_en}</span>
    </div>
    </Link>
  )
}

export default ShortCardFilm;