// Module ID: 12902
// Function ID: 12903
// Name: StylesheetUtils
// Dependencies: [1926, 2]
// Exports: getClass

// Module 12902 (StylesheetUtils)
import StringUtils from "StringUtils" /* 1926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StylesheetUtils.tsx");

export const getClass = function getClass(arg0, arg1) {
  const substr = [...arguments].slice();
  const tmp = arg0["" + arg1 + substr.reduce(substr, (acc, item) => acc + StringUtils.upperCaseFirstChar(item), "")];
  return null != tmp ? tmp : undefined;
};
