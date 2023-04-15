import { Meta, StoryObj } from "@storybook/react";
import PersonCardMini from "./PersonCardMini";

const meta = {
  title: "Persons Components/PersonCardMini",
  component: PersonCardMini,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonCardMini>;

export default meta;
type Story = StoryObj<typeof meta>

export const personCardMini: Story = {}