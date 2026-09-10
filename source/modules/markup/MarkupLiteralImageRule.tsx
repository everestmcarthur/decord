// Module ID: 9085
// Function ID: 9086
// Name: MarkupLiteralImageRule
// Dependencies: [4301, 5046, 2]

// Module 9085 (MarkupLiteralImageRule)
import _modDef4301 from "module_4301" /* 4301 */;
import MarkupTypes from "MarkupTypes" /* 5046 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4301.defaultRules.image);
obj.order = _modDef4301.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
