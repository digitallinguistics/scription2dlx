/* eslint-disable
  no-shadow,
  sort-imports,
*/

import jasmine from './jasmine.mjs';

import './lines/index.test.mjs';
import './metadata.test.mjs';
import './schema.test.mjs';
import './text.test.mjs';
import './utterances.test.mjs';

jasmine.execute();
