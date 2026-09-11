// Module ID: 16760
// Function ID: 16761
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5049, 5050, 16761, 8062, 2]

// Module 16760 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5050 */;
import combineMarkupRules from "combineMarkupRules" /* 5049 */;
import MarkupParser from "MarkupParser" /* 8062 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16761).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16761);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
