// Module ID: 10362
// Function ID: 10363
// Name: showFavoritesGuildAddedToast
// Dependencies: [4335, 1114, 10363, 2]
// Exports: default

// Module 10362 (showFavoritesGuildAddedToast)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import StarIcon from "StarIcon" /* 10363 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj2 = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["4tSWQg"]);
  obj2.IconComponent = StarIcon.StarIcon;
  ToastActionCreatorsDefault.open(obj2);
};
