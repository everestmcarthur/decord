// Module ID: 16723
// Function ID: 16724
// Name: useSearchScreenError
// Dependencies: [19, 7295, 12369, 7892, 504, 12370, 1114, 4272, 9657, 2]
// Exports: useMessageSearchErrorScreen, useMessageTabCountsErrorText

// Module 16723 (useSearchScreenError)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4272 */;
import _modDef9657 from "module_9657" /* 9657 */;
import SearchUtils from "SearchUtils" /* 12370 */;
import noop from "module_19" /* 19 */;
import SearchMessageStore from "SearchMessageStore" /* 7295 */;
import SearchQueryStore from "SearchQueryStore" /* 12369 */;

const require = globalThis.__r;

require = fn;
let closure_6 = fn(7892).SEARCH_MESSAGE_TAB_SENTINEL;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchScreenError.tsx");

export const useMessageSearchErrorScreen = function useMessageSearchErrorScreen(arg0) {
  ({ searchContext: require, tab: importDefault, hasListItems } = arg0);
  let stateFromStores;
  let ref;
  const items = [SearchQueryStore, ref];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_1_0);
    return SearchMessageStore.getError(SearchUtils.getSearchTabFetchId(closure_1_0, importDefault, searchResultsQuery));
  });
  let anyErrorMessage;
  if (stateFromStores != null) {
    anyErrorMessage = stateFromStores.getAnyErrorMessage();
  }
  if (anyErrorMessage == null) {
    const intl = tmp(tmp2[6]).intl;
    anyErrorMessage = intl.string(tmp(tmp2[6]).t.uvDZBZ);
  }
  ref = anyErrorMessage.useRef(null);
  const items1 = [stateFromStores, anyErrorMessage];
  let obj2 = { hasError: null != stateFromStores, errorText: anyErrorMessage, isErrorFullscreen: null, isErrorToast: null, showErrorToast: null };
  let tmp5 = null != stateFromStores;
  const callback = anyErrorMessage.useCallback(() => {
    if (stateFromStores !== ref.current) {
      const obj2 = { key: "SEARCH_ERROR_TOAST", icon: _modDef9657, content: anyErrorMessage };
      ToastActionCreatorsDefault.open(obj2);
      tmp2.current = tmp;
    }
  }, items1);
  if (tmp5) {
    tmp5 = !hasListItems;
  }
  obj2.isErrorFullscreen = tmp5;
  obj2.isErrorToast = null != stateFromStores && hasListItems;
  obj2.showErrorToast = callback;
  return obj2;
};
export const useMessageTabCountsErrorText = function useMessageTabCountsErrorText(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [SearchQueryStore, SearchMessageStore];
  return searchContext(504).useStateFromStores(items, () => {
    const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(searchContext);
    const searchTabFetchId = SearchUtils.getSearchTabFetchId(searchContext, closure_6, searchResultsQuery);
    if (SearchMessageStore.getIsInitialFetchComplete(searchTabFetchId)) {
      if (null != obj2.getTotalCount(searchTabFetchId)) {
        return null;
      } else {
        const error = obj2.getError(searchTabFetchId);
        let tmp5 = null;
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = tmp2(1114).intl;
            anyErrorMessage = intl.string(tmp2(1114).t.uvDZBZ);
          }
          tmp5 = anyErrorMessage;
        }
        return tmp5;
      }
    } else {
      return null;
    }
  });
};
