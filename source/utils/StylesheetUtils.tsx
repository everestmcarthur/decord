// Module ID: 12790
// Function ID: 12791
// Name: StylesheetUtils
// Dependencies: [1925, 2]
// Exports: getClass

// Module 12790 (StylesheetUtils)
import StringUtils from "StringUtils" /* 1925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(arg0, arg1) {
  const substr = [...arguments].slice();
  const tmp = arg0["" + arg1 + substr.reduce(substr, (acc, item) => acc + StringUtils.upperCaseFirstChar(item), "")];
  return null != tmp ? tmp : undefined;
};
