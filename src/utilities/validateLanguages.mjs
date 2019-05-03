import isValidTag from './isValidTag.mjs';

/**
 * Validates the language tags for MultiLangString fields
 * @param  {String|Object} data The data to validate
 */
export default function validateLanguages(data) {
  if (data instanceof Object) {
    Object.entries(data).forEach(([lang]) => {
      if (!isValidTag(lang)) {
        throw new Error(`${lang} is not a valid IETF language tag.`);
      }
    });
  }
}
