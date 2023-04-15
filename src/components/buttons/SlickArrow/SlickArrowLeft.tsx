import React from "react";
import styles from "./SlickArrowLeft.module.css";
import clsx from "clsx";
import { FontIcon } from "../../icons/FontIcon";

export interface SlickArrowLeftProps {
  className?: string;
}

export const SlickArrowLeft: React.FC<SlickArrowLeftProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.price, className)}>
      <FontIcon appearance="leftArrow" />
    </div>
  );
};
