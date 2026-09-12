// Module ID: 16806
// Function ID: 16807
// Name: useSearchMessagesLoadingState
// Dependencies: [7384, 12468, 7982, 16753, 504, 12469, 2]
// Exports: useSearchMessagesLoadingState

// Module 16806 (useSearchMessagesLoadingState)
import initialize from "initialize" /* 504 */;
import SearchUtils from "SearchUtils" /* 12469 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16753 */;
import SearchMessageStore from "SearchMessageStore" /* 7384 */;
import SearchQueryStore from "SearchQueryStore" /* 12468 */;

require = fn;
let closure_4 = fn(7982).SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessagesLoadingState.tsx");

export const useSearchMessagesLoadingState = function useSearchMessagesLoadingState(arg0) {
  ({ searchContext: require, tab: dependencyMap } = arg0);
  ({ placeholderHeight, numColumns } = arg0);
  closure_2 = usePlaceholderStyles.useFullscreenPlaceholderCount({ placeholderHeight, numColumns });
  const items = [SearchQueryStore, closure_2];
  return initialize.useStateFromStoresObject(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_1_0);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(closure_1_0, dependencyMap, searchResultsQuery);
    const isInitialFetchComplete = SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId);
    let isFetching = !tmp5;
    if (isInitialFetchComplete) {
      isFetching = SearchMessageStore.getIsFetching(searchTabFetchId);
    }
    const obj2 = { isFirstPageLoading: !isInitialFetchComplete, isNextPageLoading: isFetching, placeholderCount: null };
    if (!isInitialFetchComplete) {
      let num = Math.max(closure_2, closure_4[tmp2]);
    } else {
      num = 0;
    }
    obj2.placeholderCount = num;
    return obj2;
  });
};
