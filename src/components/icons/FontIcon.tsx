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
    | "text"
    | "genre_drama"
    | "genre_comedy"
    | "genre_action"
    | "genre_triller"
    | "genre_adventure"
    | "genre_foreign"
    | "genre_melodrama"
    | "genre_fantastic"
    | "genre_fantasy"
    | "genre_family";

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
