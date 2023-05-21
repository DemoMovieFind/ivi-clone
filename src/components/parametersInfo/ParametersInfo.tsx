import { useSearchParams } from "react-router-dom";
import styles from "./ParametersInfo.module.css";
import clsx from "clsx";
import { useIntl } from "react-intl";

export interface ParametersInfoProps {
  className?: string;
}

export const ParametersInfo: React.FC<ParametersInfoProps> = ({
  className,
}) => {
  const [searchParams] = useSearchParams();
  const intl = useIntl();

  return (
    <div className={clsx(styles.infoText, className)}>
      {searchParams.has("genres") ? (
        searchParams
          .get("genres")
          ?.split(" ")
          .map((genre, index) => <span key={index}>{genre}, </span>)
      ) : (
        <span>{`${intl.formatMessage({id:'parameters_genres'})}`}, </span>
      )}
      {searchParams.has("countries") ? (
        searchParams
          .get("countries")
          ?.split(" ")
          .map((contry, index) => <span key={index}>{contry}, </span>)
      ) : (
        <span>{`${intl.formatMessage({id:'parameters_countries'})}`}, </span>
      )}

      {searchParams.has("year") && searchParams.get("year") !== "all" ? (
        <span>{searchParams.get("year")}</span>
      ) : (
        <span>{`${intl.formatMessage({id:'parameters_years'})}`}</span>
      )}

      {searchParams.has("rating") && searchParams.get("rating") !== "1 10" ? (
        <span>, {searchParams.get("rating")?.split(" ")[1]}</span>
      ) : (
        ""
      )}
    </div>
  );
};
