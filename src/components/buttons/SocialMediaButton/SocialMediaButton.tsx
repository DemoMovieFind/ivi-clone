import { Button, ButtonProps } from "../Button";
import { ImgIcon } from "../../icons/ImgIcon";
import styles from "./SocialMediaButton.module.css";

export interface SocialMediaButtonProps
  extends Omit<ButtonProps, "size" | "children"> {
  name: "vk" | "ok" | "tw" | "vb" | "in" | "tl";
}

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  name,
  ...props
}) => {
  return (
    <Button size="medium" className={styles.socialMediaButton} {...props}>
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
    </Button>
  );
};
