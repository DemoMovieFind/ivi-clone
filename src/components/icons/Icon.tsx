import React from "react";
import styles from "./Icon.module.css";

export interface ButtonProps {
  /**
   * Icon appearance
   */
  appearance?: "default" | "primary";

  /**
   * Icon className
   */
  className?: string;
  /**
   * Button contents
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  appearance = "default",

  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        styles.button,
        styles[appearance] ?? "",
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
