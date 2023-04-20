import { ImgIcon } from "../../icons/ImgIcon";
import styles from "./IconButton.module.css";
import { ButtonLink, ButtonLinkProps } from "../ButtonLink";

export interface IconButtonButtonProps
  extends Omit<ButtonLinkProps, "size" | "children"> {
  name: "vk" | "ok" | "tw" | "vb" | "in" | "tl";
}

export const IconButton: React.FC<IconButtonButtonProps> = ({
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
    </ButtonLink>
  );
};
