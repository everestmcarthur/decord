// Module ID: 17139
// Function ID: 17140
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5208, 5209, 17140, 8244, 2]

// Module 17139 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5209 */;
import combineMarkupRules from "combineMarkupRules" /* 5208 */;
import MarkupParser from "MarkupParser" /* 8244 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17140).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17140);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
