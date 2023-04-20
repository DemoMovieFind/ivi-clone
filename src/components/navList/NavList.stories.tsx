import { Meta, StoryObj } from "@storybook/react";
import NavList from "./NavList";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof NavList> = {
  title: "UI Components/NavList",
  component: NavList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const navList: Story = {
  render: () => <BrowserRouter>
    <NavList 
      links={
        [{ href:'link1', translationId:'nav_list_films' },
        { href:'link2', translationId:'nav_list_series' },
        { href:'link3', translationId:'nav_list_certificate_activation', marked:true },]
      }
    vertical={false} 
    /></BrowserRouter>,
};
export default meta;
