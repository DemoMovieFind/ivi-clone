import { Button, ButtonProps } from "./Button";
import { ImgIcon } from "../icons/ImgIcon";
import { FontIcon } from "../icons/FontIcon";
import styles from "./DeviceButton.module.css";
import clsx from "clsx";

const primaryText = {
  "app-store": "App Store",
  "google-play": "Google Play",
  "smart-tv": "Smart TV",
  "all-devices": "Все устройства",
};

const secondaryText = {
  "app-store": "Загрузить в",
  "google-play": "Доступно в",
  "smart-tv": "Смотрите на",
  "all-devices": "",
};

export interface DeviceButtonProps
  extends Omit<ButtonProps, "size" | "children"> {
  name: "app-store" | "google-play" | "smart-tv" | "all-devices";
}

export const DeviceButton: React.FC<DeviceButtonProps> = ({
  name,
  className,
  ...props
}) => {
  return (
    <Button size="medium" className={clsx(styles.button, className)} {...props}>
      {name === "app-store" && (
        <ImgIcon appearance="apple" className={styles.icons} />
      )}
      {name === "google-play" && (
        <ImgIcon appearance="google" className={styles.icons} />
      )}
      {name === "smart-tv" && (
        <FontIcon appearance="smartTV" className={styles.icons} />
      )}
      {name === "all-devices" && (
        <FontIcon appearance="allDevices" className={styles.icons} />
      )}
      <div className={styles.textBlock}>
        {secondaryText[name] && (
          <div className={styles.secondaryText}>{secondaryText[name]}</div>
        )}
        <div className={styles.primaryText}>{primaryText[name]}</div>
      </div>
    </Button>
  );
};
