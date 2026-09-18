// Module ID: 9022
// Function ID: 9023
// Name: MarkupLiteralImageRule
// Dependencies: [4257, 4996, 2]

// Module 9022 (MarkupLiteralImageRule)
import _modDef4257 from "module_4257" /* 4257 */;
import MarkupTypes from "MarkupTypes" /* 4996 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4257.defaultRules.image);
obj.order = _modDef4257.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
