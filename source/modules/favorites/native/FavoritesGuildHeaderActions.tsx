// Module ID: 16221
// Function ID: 16222
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 16222, 8173, 5733, 12294, 16223, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 16221 (FavoritesGuildHeaderActions)
import IconButton from "IconButton" /* 8173 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16222 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16223 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5733 : 12294), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5733 : 12294), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
