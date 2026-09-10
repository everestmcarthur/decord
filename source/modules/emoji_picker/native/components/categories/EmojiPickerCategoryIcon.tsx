// Module ID: 10381
// Function ID: 10382
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5477, 21, 8750, 10267, 4537, 8790, 10382, 10384, 9255, 10386, 10388, 8807, 8697, 8695, 2]

// Module 10381 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4537 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8695 */;
import FlagIcon from "FlagIcon" /* 8697 */;
import TrophyIcon from "TrophyIcon" /* 8750 */;
import ReactionIcon from "ReactionIcon" /* 8790 */;
import HeartIcon from "HeartIcon" /* 8807 */;
import GameControllerIcon from "GameControllerIcon" /* 9255 */;
import StarIcon from "StarIcon" /* 10267 */;
import NatureIcon from "NatureIcon" /* 10382 */;
import FoodIcon from "FoodIcon" /* 10384 */;
import BicycleIcon from "BicycleIcon" /* 10386 */;
import ObjectIcon from "ObjectIcon" /* 10388 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5477).EmojiCategories;
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
