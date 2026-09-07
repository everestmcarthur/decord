// Module ID: 9021
// Function ID: 9022
// Name: parse
// Dependencies: [4257, 4996, 2]

// Module 9021 (parse)
import tDefault from "t" /* 4257 */;
import AST_KEY from "AST_KEY" /* 4996 */;

require = arg1;
const obj = {};
const merged = Object.assign(tDefault.defaultRules.image);
obj.order = tDefault.defaultRules.link.order - 0.5;
obj.requiredFirstCharacters = ["!"];
obj.parse = function parse(content) {
  return { type: AST_KEY.AST_KEY.TEXT, content: content[0] };
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupLiteralImageRule.tsx");

export default obj;
