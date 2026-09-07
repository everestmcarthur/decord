// Module ID: 10354
// Function ID: 10355
// Dependencies: [19, 5463, 21, 8722, 10240, 4523, 8762, 10355, 10357, 9228, 10359, 10361, 8779, 8669, 8667, 2]

// Module 10354
import ClockIcon from "ClockIcon" /* 4523 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8667 */;
import FlagIcon from "FlagIcon" /* 8669 */;
import TrophyIcon from "TrophyIcon" /* 8722 */;
import ReactionIcon from "ReactionIcon" /* 8762 */;
import HeartIcon from "HeartIcon" /* 8779 */;
import GameControllerIcon from "GameControllerIcon" /* 9228 */;
import StarIcon from "StarIcon" /* 10240 */;
import NatureIcon from "NatureIcon" /* 10355 */;
import FoodIcon from "FoodIcon" /* 10357 */;
import BicycleIcon from "BicycleIcon" /* 10359 */;
import ObjectIcon from "ObjectIcon" /* 10361 */;
import { EmojiCategories } from "EmojiCategoryTypes" /* 5463 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo(function EmojiPickerCategoryIcon(id) {
  id = id.id;
  if (EmojiCategories.TOP_GUILD_EMOJI === id) {
    return jsx(TrophyIcon.TrophyIcon, {});
  } else if (tmp.FAVORITES === id) {
    return jsx(StarIcon.StarIcon, {});
  } else if (tmp.RECENT === id) {
    return jsx(ClockIcon.ClockIcon, {});
  } else if (tmp.PEOPLE === id) {
    return jsx(ReactionIcon.ReactionIcon, {});
  } else if (tmp.NATURE === id) {
    return jsx(NatureIcon.NatureIcon, {});
  } else if (tmp.FOOD === id) {
    return jsx(FoodIcon.FoodIcon, {});
  } else if (tmp.ACTIVITY === id) {
    return jsx(GameControllerIcon.GameControllerIcon, {});
  } else if (tmp.TRAVEL === id) {
    return jsx(BicycleIcon.BicycleIcon, {});
  } else if (tmp.OBJECTS === id) {
    return jsx(ObjectIcon.ObjectIcon, {});
  } else if (tmp.SYMBOLS === id) {
    return jsx(HeartIcon.HeartIcon, {});
  } else if (tmp.FLAGS === id) {
    return jsx(FlagIcon.FlagIcon, {});
  } else {
    if (tmp.CUSTOM !== id) {
      const PREMIUM_UPSELL = tmp.PREMIUM_UPSELL;
    }
    return jsx(NitroWheelIcon.NitroWheelIcon, {});
  }
});
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default memoResult;
