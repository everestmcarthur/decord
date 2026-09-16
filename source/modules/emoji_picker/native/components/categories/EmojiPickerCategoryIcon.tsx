// Module ID: 10489
// Function ID: 10490
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5549, 21, 8855, 10374, 4600, 8897, 10490, 10492, 9366, 10494, 10496, 8914, 8799, 8797, 2]

// Module 10489 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4600 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8797 */;
import FlagIcon from "FlagIcon" /* 8799 */;
import TrophyIcon from "TrophyIcon" /* 8855 */;
import ReactionIcon from "ReactionIcon" /* 8897 */;
import HeartIcon from "HeartIcon" /* 8914 */;
import GameControllerIcon from "GameControllerIcon" /* 9366 */;
import StarIcon from "StarIcon" /* 10374 */;
import NatureIcon from "NatureIcon" /* 10490 */;
import FoodIcon from "FoodIcon" /* 10492 */;
import BicycleIcon from "BicycleIcon" /* 10494 */;
import ObjectIcon from "ObjectIcon" /* 10496 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5549).EmojiCategories;
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
