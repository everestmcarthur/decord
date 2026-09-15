// Module ID: 8786
// Function ID: 8787
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5081, 12, 5082, 4630, 8094, 2]

// Module 8786 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4630 */;
import MarkupRulesDefault from "MarkupRules" /* 5082 */;
import combineMarkupRules from "combineMarkupRules" /* 5081 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8094 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
