import { Meta, StoryObj } from "@storybook/react";
import HeaderDropDown from "./HeaderDropDown";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const meta: Meta<typeof HeaderDropDown> = {
  title: "Page Components/HeaderDropDown",
  component: HeaderDropDown,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const header: Story = {
  render: () => (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderDropDown />
      </BrowserRouter>
    </Provider>
  ),
};
export default meta;
