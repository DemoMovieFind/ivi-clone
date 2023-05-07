import { Meta, StoryObj } from "@storybook/react";
import MobilMenu from "./MobilMenu";
import { BrowserRouter } from "react-router-dom";
import styles from "./MobilMenu.module.css";

const meta: Meta<typeof MobilMenu> = {
  title: "Page Components/MobilMenu",
  component: MobilMenu,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const mobil_menu: Story = {
  render: () => (
    <BrowserRouter>
      <MobilMenu className={styles.active} />
    </BrowserRouter>
  ),
};
export default meta;
