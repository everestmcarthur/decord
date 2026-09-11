// Module ID: 10325
// Function ID: 10326
// Name: showFavoritesGuildAddedToast
// Dependencies: [4305, 1114, 10326, 2]
// Exports: default

// Module 10325 (showFavoritesGuildAddedToast)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import StarIcon from "StarIcon" /* 10326 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/utils/showFavoritesGuildAddedToast.native.tsx");

export default function showFavoritesGuildAddedToast() {
  const obj2 = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["4tSWQg"]);
  obj2.IconComponent = StarIcon.StarIcon;
  ToastActionCreatorsDefault.open(obj2);
};
