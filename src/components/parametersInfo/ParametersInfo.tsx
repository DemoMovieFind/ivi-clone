import { useSearchParams } from "react-router-dom";
import styles from "./ParametersInfo.module.css";
import clsx from "clsx";

export interface ParametersInfoProps {
  className?: string;
}

export const ParametersInfo: React.FC<ParametersInfoProps> = ({
  className,
}) => {
  const [searchParams] = useSearchParams();

  return (
    <div className={clsx(styles.infoText, className)}>
      {searchParams.has("genres") ? (
        searchParams
          .get("genres")
          ?.split(" ")
          .map((genre) => <span>{genre}, </span>)
      ) : (
        <span>Все жанры, </span>
      )}
      {searchParams.has("countries") ? (
        searchParams
          .get("countries")
          ?.split(" ")
          .map((contry) => <span>{contry}, </span>)
      ) : (
        <span>Все страны, </span>
      )}

      {searchParams.has("year") && searchParams.get("year") !== "all" ? (
        <span>{searchParams.get("year")}</span>
      ) : (
        <span>Все годы</span>
      )}

      {searchParams.has("rating") && searchParams.get("rating") !== "1 10" ? (
        <span>, {searchParams.get("rating")?.split(" ")[1]}</span>
      ) : (
        ""
      )}
    </div>
  );
};
