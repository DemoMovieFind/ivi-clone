import React from "react";
import styles from "./FontIcon.module.css";
import { clsx } from "clsx";

export interface FontIconProps {
  /**
   * Icon appearance
   */
  appearance?:
    | "play"
    | "favorite"
    | "download"
    | "smartTV"
    | "allDevices"
    | "mail"
    | "tel"
    | "posterFavorite"
    | "posterSimilar"
    | "posterEstimate"
    | "posterDontLike";

  /**
   * Icon className
   */
  className?: string;
  toollip?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FontIcon = ({
  appearance = "play",
  className,
  toollip = "",
}: FontIconProps) => {
  return (
    <div
      className={clsx(styles.icon, styles[appearance], className)}
      data-tooltip={toollip ? toollip : null}
    ></div>
  );
};
