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
        searchParams.getAll("genres").map((genre) => <span>{genre}</span>)
      ) : (
        <span>Все жанры</span>
      )}
    </div>
  );
};
