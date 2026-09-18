// Module ID: 9254
// Function ID: 9255
// Name: MarkupLiteralImageRule
// Dependencies: [2075, 5165, 2]

// Module 9254 (MarkupLiteralImageRule)
import _modDef2075 from "module_2075" /* 2075 */;
import MarkupTypes from "MarkupTypes" /* 5165 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef2075.defaultRules.image);
obj.order = _modDef2075.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
