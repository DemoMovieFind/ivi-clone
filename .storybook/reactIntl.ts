import { LOCALES } from "../src/i18n/locales";
import { messages } from "../src/i18n/messages";

export const reactIntl = {
  defaultLocale: LOCALES.RUSSIAN,
  locales: Object.keys(messages),
  messages,
  formats: {},
};
