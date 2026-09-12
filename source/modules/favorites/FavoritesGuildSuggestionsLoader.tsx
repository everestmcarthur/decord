// Module ID: 16368
// Function ID: 16369
// Name: FavoritesGuildSuggestionsLoader
// Dependencies: [19, 16297, 21, 16369, 2]

// Module 16368 (FavoritesGuildSuggestionsLoader)
import useFavoritesGuildSuggestionCandidatesDefault from "useFavoritesGuildSuggestionCandidates" /* 16369 */;
import noop from "module_19" /* 19 */;

function FavoritesGuildSuggestionsLoaderInner() {
  const tmp = useFavoritesGuildSuggestionCandidatesDefault(4);
  importDefault = tmp;
  const items = [tmp];
  const layoutEffect = noop.useLayoutEffect(() => {
    React4(closure_0);
  }, items);
  return null;
}
const FavoritesGuildSuggestionsStore = fn(16297);
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: closure_4, useFavoritesGuildSuggestionsVisibility: hasOwnProperty } = FavoritesGuildSuggestionsStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default noop.memo(function FavoritesGuildSuggestionsLoader() {
  const tmp = closure_5();
  const isEligible = tmp.isEligible;
  const isSelected = tmp.isSelected;
  noop = noop.useRef(false);
  const items = [isEligible, isSelected];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (isSelected) {
      tmp.current = true;
    } else {
      const current = tmp.current;
      let tmp2 = !current;
      if (!current) {
        tmp2 = isEligible;
      }
      if (!tmp2) {
        tmp.current = false;
        React4(React3);
      }
    }
  }, items);
  let tmp3 = null;
  if (isSelected) {
    tmp3 = <FavoritesGuildSuggestionsLoaderInner />;
  }
  return tmp3;
});
