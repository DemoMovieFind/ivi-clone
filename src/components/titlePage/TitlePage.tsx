import { useSearchParams } from "react-router-dom";
import styles from "./TitlePage.module.css";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";

export interface TitlePageProps {
  className?: string;
}

export const TitlePage: React.FC<TitlePageProps> = ({ className }) => {
  const [searchParams] = useSearchParams();

  const genres = searchParams.get("genres")?.split(" ");

  const showTitle = () => {
    if (genres && genres.length === 1) {
      return <h1>Фильмы: {searchParams.get("genres")}</h1>;
    } else if (genres && genres.length > 1) {
      return <h1>Фильмы</h1>;
    } else {
      return (
        <h1>
          {" "}
          <FormattedMessage id="film_watch_online" />
        </h1>
      );
    }
  };

  return <div className={clsx(styles.title, className)}>{showTitle()}</div>;
};
