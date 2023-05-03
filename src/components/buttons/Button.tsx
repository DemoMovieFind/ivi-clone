import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

export interface ButtonProps {
  /**
   * Button appearance
   */
  appearance?: "default" | "primary" | "movie" | "iviRating";
  onPointerDown?: () => void
  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Button className
   */
  className?: string;
  title?: string,
  /**
   * Button contents
   */
  children?: React.ReactNode;
}

/**
 * Base button
 */
export const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  appearance = "default",
  size = "medium",
  children,
  className,
  ...props
}: ButtonProps) => {
    return (
      <button
        type="button"
        className={clsx(
          styles.button,
          styles[appearance],
          styles[size],

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  };

/**
 * Base link looking as button
 */
export const ButtonLink: React.FC<
  ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  appearance = "default",
  size = "medium",
  children,
  className,
  ...props
}: ButtonProps) => {
    return (
      <a
        className={[
          styles.button,
          styles[appearance] ?? "",
          styles[size] ?? "",
          className ?? "",
        ].join(" ")}
        {...props}
      >
        {children}
      </a>
    );
  };
