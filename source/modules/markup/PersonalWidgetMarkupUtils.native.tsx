// Module ID: 8795
// Function ID: 8796
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5082, 12, 5083, 4629, 8103, 2]

// Module 8795 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4629 */;
import MarkupRulesDefault from "MarkupRules" /* 5083 */;
import combineMarkupRules from "combineMarkupRules" /* 5082 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8103 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
