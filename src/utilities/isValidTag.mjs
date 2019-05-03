import createLangRegExp from 'ietf-language-tag-regex';

const langRegExp = createLangRegExp();

export default function validateLanguageTag(tag) {
  return langRegExp.test(tag);
}