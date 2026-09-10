// Module ID: 16790
// Function ID: 16791
// Name: useSearchMessages
// Dependencies: [7333, 12409, 504, 12410, 2]
// Exports: useSearchMessages

// Module 16790 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 12410 */;
import SearchMessageStore from "SearchMessageStore" /* 7333 */;
import SearchQueryStore from "SearchQueryStore" /* 12409 */;

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
