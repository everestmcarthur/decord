// Module ID: 10477
// Function ID: 10478
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5544, 21, 8842, 10363, 4599, 8883, 10478, 10480, 9352, 10482, 10484, 8900, 8787, 8785, 2]

// Module 10477 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4599 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8785 */;
import FlagIcon from "FlagIcon" /* 8787 */;
import TrophyIcon from "TrophyIcon" /* 8842 */;
import ReactionIcon from "ReactionIcon" /* 8883 */;
import HeartIcon from "HeartIcon" /* 8900 */;
import GameControllerIcon from "GameControllerIcon" /* 9352 */;
import StarIcon from "StarIcon" /* 10363 */;
import NatureIcon from "NatureIcon" /* 10478 */;
import FoodIcon from "FoodIcon" /* 10480 */;
import BicycleIcon from "BicycleIcon" /* 10482 */;
import ObjectIcon from "ObjectIcon" /* 10484 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5544).EmojiCategories;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoryIcon.tsx");

export default noop.memo(function EmojiPickerCategoryIcon(id) {
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
