// Module ID: 16772
// Function ID: 16773
// Name: SearchResultLinkPreviewMarkup
// Dependencies: [5047, 5048, 16773, 8039, 2]

// Module 16772 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5048 */;
import combineMarkupRules from "combineMarkupRules" /* 5047 */;
import MarkupParser from "MarkupParser" /* 8039 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16773).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16773);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
