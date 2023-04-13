import { Meta, StoryObj } from "@storybook/react";
import PersonCard from "./PersonCard";

const meta = {
  title: "PersonCard",
  component: PersonCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonCard>;

export default meta;
type Story = StoryObj<typeof meta>

export const personCard: Story = {}