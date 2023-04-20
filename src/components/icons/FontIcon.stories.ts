import type { Meta, StoryObj } from "@storybook/react";

import { FontIcon } from "./FontIcon";

const meta = {
  title: "UI Components/FontIcon",
  component: FontIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof FontIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Play: Story = {
  args: {
    appearance: "play",
  },
};
export const Favorite: Story = {
  args: {
    appearance: "favorite",
  },
};

export const Notification: Story = {
  args: {
    appearance: "notification",
  },
};

export const Audio: Story = {
  args: {
    appearance: "audio",
  },
};

export const Text: Story = {
  args: {
    appearance: "text",
  },
};

export const Download: Story = {
  args: {
    appearance: "download",
  },
};
export const SmartTV: Story = {
  args: {
    appearance: "smartTV",
  },
};
export const AllDevices: Story = {
  args: {
    appearance: "allDevices",
  },
};
export const Mail: Story = {
  args: {
    appearance: "mail",
  },
};

export const Tel: Story = {
  args: {
    appearance: "tel",
  },
};

export const posterFavorite: Story = {
  args: {
    appearance: "posterFavorite",
  },
};

export const posterSimilar: Story = {
  args: {
    appearance: "posterSimilar",
  },
};

export const posterEstimate: Story = {
  args: {
    appearance: "posterEstimate",
  },
};

export const posterDontLike: Story = {
  args: {
    appearance: "posterDontLike",
  },
};

export const arrowLeft: Story = {
  args: {
    appearance: "leftArrow",
  },
};

export const arrowRight: Story = {
  args: {
    appearance: "rightArrow",
  },
};

export const genre_drama: Story = {
  args: {
    appearance: "genre_drama",
  },
};

export const genre_comedy: Story = {
  args: {
    appearance: "genre_comedy",
  },
};
export const genre_action: Story = {
  args: {
    appearance: "genre_action",
  },
};
export const genre_triller: Story = {
  args: {
    appearance: "genre_triller",
  },
};
export const genre_adventure: Story = {
  args: {
    appearance: "genre_adventure",
  },
};
export const genre_foreign: Story = {
  args: {
    appearance: "genre_foreign",
  },
};
export const genre_melodrama: Story = {
  args: {
    appearance: "genre_melodrama",
  },
};
export const genre_fantastic: Story = {
  args: {
    appearance: "genre_fantastic",
  },
};
export const genre_fantasy: Story = {
  args: {
    appearance: "genre_fantasy",
  },
};
export const genre_family: Story = {
  args: {
    appearance: "genre_family",
  },
};
