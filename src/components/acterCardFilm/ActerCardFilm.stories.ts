import type { Meta, StoryObj } from "@storybook/react";

import { ActerCardFilm } from "./ActerCardFilm";

const meta = {
  title: "ActerCardFilm/ActerCardFilm",
  component: ActerCardFilm,
  tags: ["autodocs"],
} satisfies Meta<typeof ActerCardFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "default",
    img: "https://thumbs.dfs.ivi.ru/storage37/contents/2/2/29f0af23c55d95f2c205549d25feaa.jpg/234x360/?q=85",
    year: "1995",
    title: "Терминатор",
    rating: "9,9",
  },
};
