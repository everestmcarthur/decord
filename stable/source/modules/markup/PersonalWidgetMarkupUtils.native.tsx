// Module ID: 8666
// Function ID: 8667
// Name: PersonalWidgetMarkupUtils
// Dependencies: [4997, 12, 4998, 4551, 7988, 2]

// Module 8666 (PersonalWidgetMarkupUtils)
import MarkupReactRulesDefault from "MarkupReactRules" /* 4551 */;
import MarkupRulesDefault from "MarkupRules" /* 4998 */;
import combineMarkupRules from "combineMarkupRules" /* 4997 */;
import apply from "module_12" /* 12 */;
import MarkupParser from "MarkupParser" /* 7988 */;

const items = [apply.pick(MarkupRulesDefault.RULES, ["escape", "text", "strong", "em", "u", "url", "autolink", "emoji", "invisibleUnicode"]), MarkupReactRulesDefault()];
const reactParserForResult = MarkupParser.reactParserFor(combineMarkupRules(items));
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/PersonalWidgetMarkupUtils.native.tsx");

export const parsePersonalWidgetReact = reactParserForResult;
export const parsePersonalWidgetEditingReact = reactParserForResult;
