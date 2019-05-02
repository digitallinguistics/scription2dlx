import createLangRegExp from 'ietf-language-tag-regex';

/**
 * Validates the language tags for MultiLangString fields
 * @param  {String|Object} data The data to validate
 */
export default function validateLanguages(data) {

  if (typeof data === `object`) {

    const langRegExp = createLangRegExp();
    const isValidTag = tag => langRegExp.test(tag);

    Object.entries(data).forEach(([lang]) => {
      if (!isValidTag(lang)) {
        throw new Error(`${lang} is not a valid IETF language tag.`);
      }
    });

  }

}
