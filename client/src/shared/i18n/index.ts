import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enTrips from "./locales/en/trips.json";
import enPlanner from "./locales/en/planner.json";
import enAuth from "./locales/en/auth.json";
import enInvite from "./locales/en/invite.json";
import enAgent from "./locales/en/agent.json";
import enLanding from "./locales/en/landing.json";
import enError from "./locales/en/error.json";
import thCommon from "./locales/th/common.json";
import thTrips from "./locales/th/trips.json";
import thPlanner from "./locales/th/planner.json";
import thAuth from "./locales/th/auth.json";
import thInvite from "./locales/th/invite.json";
import thAgent from "./locales/th/agent.json";
import thLanding from "./locales/th/landing.json";
import thError from "./locales/th/error.json";

export const resources = {
  en: { common: enCommon, trips: enTrips, planner: enPlanner, auth: enAuth, invite: enInvite, agent: enAgent, landing: enLanding, error: enError },
  th: { common: thCommon, trips: thTrips, planner: thPlanner, auth: thAuth, invite: thInvite, agent: thAgent, landing: thLanding, error: thError },
} as const;

export const supportedLanguages = ["en", "th"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultNS = "common";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    defaultNS,
    ns: ["common", "trips", "planner", "auth", "invite", "agent", "landing", "error"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "opentrip-lang",
    },
  });

export default i18n;
