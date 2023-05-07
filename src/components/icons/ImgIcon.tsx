import styles from "./ImgIcon.module.css";
import clsx from "clsx";

export interface ImgIconProps {
  appearance?:
    | "apple"
    | "google"
    | "vk"
    | "ok"
    | "tw"
    | "vb"
    | "in"
    | "tl"
    | "user"
    | "logout"
    | "admin";

  className?: string;
}

export const ImgIcon = ({ appearance = "apple", className }: ImgIconProps) => {
  return (
    <div className={clsx(styles.icon, styles[appearance], className)}></div>
  );
};
