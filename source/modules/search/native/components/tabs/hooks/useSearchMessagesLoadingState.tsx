// Module ID: 16779
// Function ID: 16780
// Name: useSearchMessagesLoadingState
// Dependencies: [7354, 12432, 7952, 16726, 504, 12433, 2]
// Exports: useSearchMessagesLoadingState

// Module 16779 (useSearchMessagesLoadingState)
import initialize from "initialize" /* 504 */;
import SearchUtils from "SearchUtils" /* 12433 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16726 */;
import SearchMessageStore from "SearchMessageStore" /* 7354 */;
import SearchQueryStore from "SearchQueryStore" /* 12432 */;

require = fn;
let closure_4 = fn(7952).SEARCH_TABS_TO_SEARCH_QUERY_LIMITS;
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
