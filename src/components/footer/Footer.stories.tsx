import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Footer> = {
  title: "Page Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const footer: Story = {
  render:()=>
    <BrowserRouter>
      <Footer/>
    </BrowserRouter>
  
};
export default meta;
