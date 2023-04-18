import React from "react";
import styles from "./FontIcon.module.css";
import { clsx } from "clsx";

export interface FontIconProps {
  appearance?:
  | "play"
  | "favorite"
  | "notification"
  | "download"
  | "smartTV"
  | "allDevices"
  | "mail"
  | "tel"
  | "posterFavorite"
  | "posterSimilar"
  | "posterEstimate"
  | "posterDontLike"
  | "leftArrow"
  | "rightArrow"
  | "audio"
  | "text";

  className?: string;
  toollip?: string;
}

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
