import { Meta, StoryObj } from "@storybook/react";
import PersonMoreCard from "./PersonMoreCard";

const meta = {
  title: "Persons Components/PersonMoreCard",
  component: PersonMoreCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonMoreCard>;

export default meta;
type Story = StoryObj<typeof meta>

export const personMoreCard: Story = {}