// Module ID: 16807
// Function ID: 16808
// Name: useAutoSearchPeopleTab
// Dependencies: [19, 12434, 12448, 9941, 12456, 12, 12433, 2]
// Exports: useAutoSearchPeopleTab

// Module 16807 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9941 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12433 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12456 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12434 */;

require = fn;
let closure_5 = fn(12448).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = function useAutoSearchPeopleTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
      SearchPlatformActionCreatorsDefault.searchPeopleTab(closure_0, "");
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = noop.useEffect(() => {
    if (!closure_1) {
      const debounceResult = _mod12.debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
          closure_1(12456).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(12456);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    closure_1(12456).cleanupPeopleTab(searchContext);
  }, items2);
};
