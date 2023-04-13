import { Button, ButtonProps } from "../Button";
import styles from "./ConnectButton.module.css";
import { FontIcon } from "../../icons/FontIcon";

export interface ConnectButton extends Omit<ButtonProps, "size" | "children"> {
  name: "mail" | "tel";
}

export const ConnectButton: React.FC<ConnectButton> = ({ name, ...props }) => {
  return (
    <Button size="medium" className={styles.connectButton} {...props}>
      {name === "mail" && <FontIcon appearance="mail" />}
      {name === "tel" && <FontIcon appearance="tel" />}
    </Button>
  );
};
