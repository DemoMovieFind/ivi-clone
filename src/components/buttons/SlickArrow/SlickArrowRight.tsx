import React from "react";
import styles from "./SlickArrowLeft.module.css";
import clsx from "clsx";
import { FontIcon } from "../../icons/FontIcon";

export interface SlickArrowRightProps {
  className?: string;
}

export const SlickArrowRight: React.FC<SlickArrowRightProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.price, className)}>
      <FontIcon appearance="rightArrow" />
    </div>
  );
};
