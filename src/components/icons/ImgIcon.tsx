import styles from "./ImgIcon.module.css";
import clsx from "clsx";

export interface ImgIconProps {
  /**
   * Icon appearance
   */
  appearance?: "apple" | "google";

  /**
   * Icon className
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ImgIcon = ({ appearance = "apple", className }: ImgIconProps) => {
  return (
    <div className={clsx(styles.icon, styles[appearance], className)}></div>
  );
};
