import { Meta, StoryObj } from "@storybook/react";
import MobilMenu from "./MobilMenu";
import styles from "./MobilMenu.module.css";
import RouterWrapper from "../../../.storybook/routerWrapper";

const meta: Meta<typeof MobilMenu> = {
  title: "Page Components/MobilMenu",
  component: MobilMenu,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const mobil_menu: Story = {
  render: () => RouterWrapper(<MobilMenu className={styles.active} />),
};
export default meta;
