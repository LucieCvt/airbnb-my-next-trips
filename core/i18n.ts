import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "../assets/translation/fr.json";

const defaultLanguage = "fr";
const languages = ["fr"];
const resources = {
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  saveMissing: true,
  debug: false,
  returnNull: false,
  supportedLngs: languages,
  resources,
  react: {
    useSuspense: false,
  },
});

export default i18n;
