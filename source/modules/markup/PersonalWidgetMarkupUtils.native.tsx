// Module ID: 8815
// Function ID: 8816
// Name: PersonalWidgetMarkupUtils
// Dependencies: [5084, 12, 5085, 4631, 8123, 2]

// Module 8815 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4631 */;
import MarkupRulesDefault from "MarkupRules" /* 5085 */;
import combineMarkupRules from "combineMarkupRules" /* 5084 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 8123 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
