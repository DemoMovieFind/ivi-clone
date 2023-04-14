import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button";
import clsx from "clsx";

export interface ButtonLinkProps
  extends Omit<ButtonProps, "size" | "children"> {
  href?: string;
}

export const ButtonLink: React.FC<
  ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({
  appearance = "default",
  size = "medium",
  children,
  className,
  href,
  ...props
}) => {
  return (
    <a
      href={href}
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
