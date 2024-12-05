import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
        "Welcome": "Welcome",
        "Agree Terms & Conditions": "Agree Terms & Conditions",
        "Next":"Next"
    },
  },
  ar: {
    translation: {
        "Welcome": "خوش آمدید",
        "Agree Terms & Conditions": "شرائط و ضوابط سے اتفاق کریں۔",
        "Next":"اگلے"
      }
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
