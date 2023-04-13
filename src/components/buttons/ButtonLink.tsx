import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button";
import clsx from "clsx";

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
      className={clsx(
        styles.button,
        styles[appearance],
        styles[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
