import { Meta, StoryObj } from "@storybook/react";
import PersonCardMini from "./PersonCardMini";

const meta = {
  title: "Persons Components/PersonCardMini",
  component: PersonCardMini,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonCardMini>;

export default meta;
type Story = StoryObj<typeof meta>

export const personCardMini: Story = {
  args: {
    name: 'Омар Си',
    img: 'https://thumbs.dfs.ivi.ru/storage28/contents/5/4/5b9430c9601da3b2b00770fb7e08f0.jpeg/44x44/?q=85',
  }
}

export const iviCardMini: Story = {
  args: {
    name: 'Рейтинг Иви',
    rating: '7.1',
  }
}