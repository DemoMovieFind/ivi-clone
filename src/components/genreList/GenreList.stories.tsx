import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import { GenreList } from "./GenreList";

// export default {
//   title: "GenreList",
//   component: GenreList,
//   decorators: [withRouter],
//   parameters: {
//     reactRouter: {
//       routePath: "/users/:userId",
//       routeParams: { userId: "42" },
//     },
//   },
// };

// export const Example = () => <GenreList />;

// import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: "GenreList",
  component: GenreList,
  decorators: [withRouter],
};

export const Example = () => <GenreList />;
Example.story = {
  parameters: {
    reactRouter: {
      routePath: "/users/:userId",
      routeParams: { userId: "42" },
      routeHandle: "Profile",
      searchParams: { tab: "activityLog" },
      routeState: { fromPage: "homePage" },
    },
  },
};
