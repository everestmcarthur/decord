// Module ID: 17448
// Function ID: 17449
// Name: intl/migration
// Dependencies: [1114, 1155, 2]
// Exports: improperGetEnglishIntlMessageText

// Module 17448 (intl/migration)
import util from "util" /* 1114 */;
import _mod1155 from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = util);
  const obj = _mod1155;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
