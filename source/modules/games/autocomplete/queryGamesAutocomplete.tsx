// Module ID: 9934
// Function ID: 9935
// Name: queryGamesAutocomplete
// Dependencies: [5160, 551, 8991, 5161, 2]
// Exports: queryGamesAutocomplete

// Module 9934 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5161 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 8991 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5160 */;
import debounce from "debounce" /* 551 */;

require = fn;
let closure_3 = debounce((arg0) => {
  const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, fn(8991).GAME_AUTOCOMPLETE_DEBOUNCE_MS, { leading: true, maxWait: fn(8991).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS });
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    closure_3(result);
    let closestResults = GameAutocompleteStore.getClosestResults(result);
    if (closestResults == null) {
      closestResults = [];
    }
    found = closestResults.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
