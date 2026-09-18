// Module ID: 16153
// Function ID: 16154
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 16154, 8098, 5681, 12203, 16155, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 16153 (FavoritesGuildHeaderActions)
import IconButton from "IconButton" /* 8098 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16154 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16155 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5681 : 12203), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5681 : 12203), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
