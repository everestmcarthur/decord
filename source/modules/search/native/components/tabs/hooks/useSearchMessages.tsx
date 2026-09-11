// Module ID: 16778
// Function ID: 16779
// Name: useSearchMessages
// Dependencies: [7355, 12434, 504, 12435, 2]
// Exports: useSearchMessages

// Module 16778 (useSearchMessages)
import SearchUtils from "SearchUtils" /* 12435 */;
import SearchMessageStore from "SearchMessageStore" /* 7355 */;
import SearchQueryStore from "SearchQueryStore" /* 12434 */;

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
