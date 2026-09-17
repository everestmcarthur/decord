// Module ID: 16923
// Function ID: 16924
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5084, 5085, 16924, 8123, 2]

// Module 16923 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5085 */;
import combineMarkupRules from "combineMarkupRules" /* 5084 */;
import MarkupParser from "MarkupParser" /* 8123 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16924).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16924);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
