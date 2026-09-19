// Module ID: 10607
// Function ID: 10608
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5675, 21, 8990, 10492, 4718, 9036, 10608, 10610, 9347, 10612, 10614, 9053, 8941, 8939, 2]

// Module 10607 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4718 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8939 */;
import FlagIcon from "FlagIcon" /* 8941 */;
import TrophyIcon from "TrophyIcon" /* 8990 */;
import ReactionIcon from "ReactionIcon" /* 9036 */;
import HeartIcon from "HeartIcon" /* 9053 */;
import GameControllerIcon from "GameControllerIcon" /* 9347 */;
import StarIcon from "StarIcon" /* 10492 */;
import NatureIcon from "NatureIcon" /* 10608 */;
import FoodIcon from "FoodIcon" /* 10610 */;
import BicycleIcon from "BicycleIcon" /* 10612 */;
import ObjectIcon from "ObjectIcon" /* 10614 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5675).EmojiCategories;
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
