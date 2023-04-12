import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button appearance
   */
  appearance?: "default" | "primary";
  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Button className
   */
  className?: string;
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  appearance = "default",
  size = "medium",
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
        styles[size] ?? "",
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
