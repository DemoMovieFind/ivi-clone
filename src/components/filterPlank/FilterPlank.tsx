import styles from "./FilterPlank.module.css";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import { FontIcon } from "../icons/FontIcon";

export interface FilterPlankProps {
  className?: string;
  isActive?: boolean;
  text: string;
}

export const FilterPlank: React.FC<FilterPlankProps> = ({
  className,
  isActive,
  text,
}) => {
  return (
    <div className={clsx(styles.plankWrapper, className)}>
      <div className={clsx(styles.plank, isActive ? styles.active : "")}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>{text}</div>
        </div>
        <div
          className={clsx(styles.dropdownIcon, isActive ? styles.active : "")}
        >
          <FontIcon appearance="dropDownArrow" />
        </div>
      </div>
    </div>
  );
};
