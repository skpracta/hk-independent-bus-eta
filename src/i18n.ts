import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./i18n/translation";

const getSavedLang = (): "zh" | "en" | "zs" | "jp" | undefined => {
  const savedLang = localStorage.getItem("lang");
  if (
    "zh" === savedLang ||
    "en" === savedLang ||
    "zs" === savedLang ||
    "jp" === savedLang
  ) {
    return savedLang;
  }
  return undefined;
};

const DEFAULT_LANG =
  getSavedLang() ??
  (window.location.pathname.slice(1, 3) === "en" ? "en" : "zh");

i18n.use(initReactI18next).init({
  resources,
  supportedLngs: ["en", "zh", "zs", "jp"] as ["en", "zh", "zs", "jp"],
  fallbackLng: "en",
  lowerCaseLng: true,
  lng: DEFAULT_LANG,
  nsSeparator: false,
  keySeparator: false,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
