// Module ID: 16669
// Function ID: 16670
// Name: useValidFilterTokens
// Dependencies: [4419, 504, 12375, 1974, 2]
// Exports: useValidFilterTokens, useValidOrderedFilterTokens

// Module 16669 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 12375 */;
import StreamerModeStore from "StreamerModeStore" /* 4419 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = function useValidOrderedFilterTokens(searchContext) {
  _require = searchContext;
  let items = [StreamerModeStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidOrderedFilterTokens(closure_0, items);
  });
};
export const useValidFilterTokens = function useValidFilterTokens(searchContext) {
  _require = searchContext;
  let items = [StreamerModeStore];
  const items1 = [searchContext];
  return require("initialize").useStateFromStores(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidFilterTokens(closure_0, items);
  }, items1, require("SetUtils").areSetsEqual);
};
