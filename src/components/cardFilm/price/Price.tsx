import React from "react";
import styles from "./Price.module.css";
import clsx from "clsx";

export interface PriceProps {
  className?: string;
  price: boolean;
}

export const Price: React.FC<PriceProps> = ({ className, price }) => {
  return (
    <div className={clsx(styles.price, className)}>
      <div className={price ? styles.bye : styles.free}>
        {price ? "Подписка" : "Бесплатно"}
      </div>
    </div>
  );
};
