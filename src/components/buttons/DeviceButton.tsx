import { Button, ButtonProps } from "./Button";

type Props = Omit<ButtonProps, "appearance" | "size" | "children"> & {
  name: "app-store" | "google-play" | "smart-tv" | "all-devices";
};

export const DeviceButton: React.FC<Props> = () => {
  return (
    <Button appearance="default" size="medium">
      {/* <FontIcon name={iconName}/> */}
      <span>Загрузить в</span>
      <span>App Store</span>
    </Button>
  );
};
