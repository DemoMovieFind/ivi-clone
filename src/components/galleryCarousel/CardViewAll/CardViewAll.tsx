import React from "react";
import styles from "./CardViewAll.module.css";
import clsx from "clsx";

export interface CardViewAllProps {
  appearance?: "default";
  className?: string;
}

export const CardViewAll = ({
  appearance = "default",
  className,
  ...props
}: CardViewAllProps) => {
  return (
    <div
      className={clsx(styles.card, styles[appearance], className)}
      {...props}
    >
      <div> Посмотреть все</div>
    </div>
  );
};
