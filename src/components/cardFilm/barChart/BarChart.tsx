import React from "react";
import styles from "./BarChart.module.css";
import clsx from "clsx";

export interface BarChartProps {
  className?: string;
  count: string;
  value: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  className,
  count,
  value,
}) => {
  return (
    <div className={clsx(styles.barChart, className)}>
      <div className={styles.barChartName}>{count}</div>
      <div className={styles.barChartGraph}>
        <div style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};
