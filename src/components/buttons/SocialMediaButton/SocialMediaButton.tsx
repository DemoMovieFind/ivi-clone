import { ImgIcon } from "../../icons/ImgIcon";
import styles from "./SocialMediaButton.module.css";
import { ButtonLink, ButtonLinkProps } from "../ButtonLink";

export interface SocialMediaButtonProps
  extends Omit<ButtonLinkProps, "size" | "children"> {
  name: "vk" | "ok" | "tw" | "vb" | "in" | "tl" | "user";
}

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  name,
  href,
  ...props
}) => {
  return (
    <ButtonLink
      href={href}
      size="medium"
      className={styles.socialMediaButton}
      {...props}
    >
      {name === "vk" && (
        <ImgIcon appearance="vk" className={styles.socialMediaIcon} />
      )}
      {name === "ok" && (
        <ImgIcon appearance="ok" className={styles.socialMediaIcon} />
      )}
      {name === "tw" && (
        <ImgIcon appearance="tw" className={styles.socialMediaIcon} />
      )}
      {name === "vb" && (
        <ImgIcon appearance="vb" className={styles.socialMediaIcon} />
      )}
      {name === "in" && (
        <ImgIcon appearance="in" className={styles.socialMediaIcon} />
      )}
      {name === "tl" && (
        <ImgIcon appearance="tl" className={styles.socialMediaIcon} />
      )}
      {name === "user" && (
        <ImgIcon appearance="user" className={styles.socialMediaIcon} />
      )}
    </ButtonLink>
  );
};
