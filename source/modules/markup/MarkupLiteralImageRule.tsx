// Module ID: 9108
// Function ID: 9109
// Name: MarkupLiteralImageRule
// Dependencies: [4303, 5048, 2]

// Module 9108 (MarkupLiteralImageRule)
import _modDef4303 from "module_4303" /* 4303 */;
import MarkupTypes from "MarkupTypes" /* 5048 */;

require = fn;
const obj = {};
const merged = Object.assign(_modDef4303.defaultRules.image);
obj.order = _modDef4303.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: MarkupTypes.AST_KEY.TEXT, content: content[0] };
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
