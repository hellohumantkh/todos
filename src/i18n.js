/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */

import { addLocaleData } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import zhTranslationMessages from './translations/zh.json';

export const appLocales = [
  'zh',
];

addLocaleData(zhLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, zhTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  zh: formatTranslationMessages('zh', zhTranslationMessages),
};
