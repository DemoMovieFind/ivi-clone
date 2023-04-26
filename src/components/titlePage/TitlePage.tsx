import styles from "./TitlePage.module.css";
import clsx from "clsx";

export interface TitlePageProps {
  className?: string;
  title: string;
}

export const TitlePage: React.FC<TitlePageProps> = ({ className, title }) => {
  return (
    <div className={clsx(styles.title, className)}>
      <h1>{title}</h1>
    </div>
  );
};
