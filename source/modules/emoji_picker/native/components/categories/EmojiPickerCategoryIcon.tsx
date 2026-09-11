// Module ID: 10440
// Function ID: 10441
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5515, 21, 8810, 10326, 4570, 8850, 10441, 10443, 9315, 10445, 10447, 8867, 8757, 8755, 2]

// Module 10440 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4570 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8755 */;
import FlagIcon from "FlagIcon" /* 8757 */;
import TrophyIcon from "TrophyIcon" /* 8810 */;
import ReactionIcon from "ReactionIcon" /* 8850 */;
import HeartIcon from "HeartIcon" /* 8867 */;
import GameControllerIcon from "GameControllerIcon" /* 9315 */;
import StarIcon from "StarIcon" /* 10326 */;
import NatureIcon from "NatureIcon" /* 10441 */;
import FoodIcon from "FoodIcon" /* 10443 */;
import BicycleIcon from "BicycleIcon" /* 10445 */;
import ObjectIcon from "ObjectIcon" /* 10447 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5515).EmojiCategories;
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
