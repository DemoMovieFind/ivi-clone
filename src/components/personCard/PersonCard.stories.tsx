import { Meta, StoryObj } from "@storybook/react";
import PersonCard from "./PersonCard";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Persons Components/PersonCard",
  component: PersonCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonCard>;

export default meta;
type Story = StoryObj<typeof meta>

export const personCard: Story = {
  render:()=><MemoryRouter><PersonCard/></MemoryRouter>
}