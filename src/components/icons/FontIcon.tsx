import React from "react";
import styles from "./FontIcon.module.css";
import { clsx } from "clsx";

export interface FontIconProps {
  /**
   * Icon appearance
   */
  appearance?: "play" | "favorite" | "download" | "smartTV" | "allDevices";

  /**
   * Icon className
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FontIcon = ({ appearance = "play", className }: FontIconProps) => {
  return (
    <div className={clsx(styles.icon, styles[appearance], className)}></div>
  );
};
