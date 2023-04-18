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
