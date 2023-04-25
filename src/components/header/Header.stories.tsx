import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from '../../store/store';

const meta: Meta<typeof Header> = {
  title: "Page Components/Header",
  component: Header,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const header: Story = {
  render:()=>
  <Provider store={store}>
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  </Provider>
};
export default meta;
