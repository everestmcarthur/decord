// Module ID: 17157
// Function ID: 17158
// Name: useSearchMessages
// Dependencies: [7521, 12591, 504, 12592, 2]
// Exports: useSearchMessages

// Module 17157 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 12592 */;
import SearchMessageStore from "SearchMessageStore" /* 7521 */;
import SearchQueryStore from "SearchQueryStore" /* 12591 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = function useSearchMessages(searchContext, tab) {
  _require = searchContext;
  dependencyMap = tab;
  const items = [SearchQueryStore, SearchMessageStore];
  const items1 = [searchContext, tab];
  return require("initialize").useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
    return SearchMessageStore.getMessages(SearchUtils.getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
  }, items1);
};
