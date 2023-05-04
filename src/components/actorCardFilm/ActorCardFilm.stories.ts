import type { Meta, StoryObj } from "@storybook/react";

import { ActorCardFilm } from "./ActorCardFilm";

const meta = {
  title: "ActorCardFilm/ActorCardFilm",
  component: ActorCardFilm,
  tags: ["autodocs"],
} satisfies Meta<typeof ActorCardFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "default",
    film: {
      id: 498500,
      name: "Двойная петля",
      mainImg: "https://thumbs.dfs.ivi.ru/storage37/contents/2/2/29f0af23c55d95f2c205549d25feaa.jpg/234x360/?q=85",
      rating: {
        ivi: 3.7,
      },
      year: '2022',
    },
  },
};
