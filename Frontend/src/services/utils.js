// utils.js
import {useTranslation} from 'react-i18next';

export const translateOptions = options => {
  const {t} = useTranslation();
  return options.map(item => ({
    label: t(item.label),
    value: item.value,
    arLabel: item.arLabel,
  }));
};
