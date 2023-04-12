import type { Preview } from "@storybook/react";
import "../src/index.css";
import { reactIntl } from "./reactIntl";
import { LOCALES } from "../src/i18n/locales";

const preview: Preview = {
  globals: {
    locale: reactIntl.defaultLocale,
    locales: {
      [LOCALES.ENGLISH]: "English",
      [LOCALES.RUSSIAN]: "Russian",
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    reactIntl,
  },
};

export default preview;
