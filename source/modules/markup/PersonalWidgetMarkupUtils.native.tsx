// Module ID: 8753
// Function ID: 8754
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5049, 12, 5050, 4598, 8062, 2]

// Module 8753 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4598 */;
import MarkupRulesDefault from "MarkupRules" /* 5050 */;
import combineMarkupRules from "combineMarkupRules" /* 5049 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8062 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
