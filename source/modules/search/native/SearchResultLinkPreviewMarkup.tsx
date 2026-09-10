// Module ID: 16715
// Function ID: 16716
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5011, 5012, 16716, 8001, 2]

// Module 16715 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5012 */;
import combineMarkupRules from "combineMarkupRules" /* 5011 */;
import MarkupParser from "MarkupParser" /* 8001 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16716).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16716);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
