// Module ID: 16153
// Function ID: 16154
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [19, 21, 16154, 8097, 5681, 12203, 16155, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 16153 (FavoritesGuildHeaderActionButton)
import noopAll from "noop" /* 19 */;
import IconButton from "IconButton" /* 8097 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16154 */;
import handleCreateCategory from "handleCreateCategory" /* 16155 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5681 : 12203), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = handleCreateCategory.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5681 : 12203), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
