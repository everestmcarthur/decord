// Module ID: 10591
// Function ID: 10592
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5633, 21, 8951, 10476, 4684, 8997, 10592, 10594, 9461, 10596, 10598, 9014, 8902, 8900, 2]

// Module 10591 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4684 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8900 */;
import FlagIcon from "FlagIcon" /* 8902 */;
import TrophyIcon from "TrophyIcon" /* 8951 */;
import ReactionIcon from "ReactionIcon" /* 8997 */;
import HeartIcon from "HeartIcon" /* 9014 */;
import GameControllerIcon from "GameControllerIcon" /* 9461 */;
import StarIcon from "StarIcon" /* 10476 */;
import NatureIcon from "NatureIcon" /* 10592 */;
import FoodIcon from "FoodIcon" /* 10594 */;
import BicycleIcon from "BicycleIcon" /* 10596 */;
import ObjectIcon from "ObjectIcon" /* 10598 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5633).EmojiCategories;
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
