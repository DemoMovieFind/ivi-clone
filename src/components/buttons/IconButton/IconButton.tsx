import { ImgIcon } from "../../icons/ImgIcon";
import styles from "./IconButton.module.css";
import { ButtonLink, ButtonLinkProps } from "../ButtonLink";

export interface IconButtonProps
  extends Omit<ButtonLinkProps, "size" | "children"> {
  name: "vk" | "ok" | "tw" | "vb" | "in" | "tl" | "user";
}

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  href,
  ...props
}) => {
  return (
    <ButtonLink
      href={href}
      size="medium"
      className={styles.button}
      {...props}
    >
      {name === "vk" && (
        <ImgIcon appearance="vk" className={styles.icon} />
      )}
      {name === "ok" && (
        <ImgIcon appearance="ok" className={styles.icon} />
      )}
      {name === "tw" && (
        <ImgIcon appearance="tw" className={styles.icon} />
      )}
      {name === "vb" && (
        <ImgIcon appearance="vb" className={styles.icon} />
      )}
      {name === "in" && (
        <ImgIcon appearance="in" className={styles.icon} />
      )}
      {name === "tl" && (
        <ImgIcon appearance="tl" className={styles.icon} />
      )}
      {name === "user" && (
        <ImgIcon appearance="user" className={styles.icon} />
      )}
    </ButtonLink>
  );
};
