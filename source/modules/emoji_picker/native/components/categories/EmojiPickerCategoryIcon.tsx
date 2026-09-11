// Module ID: 10438
// Function ID: 10439
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5514, 21, 8808, 10324, 4569, 8848, 10439, 10441, 9313, 10443, 10445, 8865, 8755, 8753, 2]

// Module 10438 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4569 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8753 */;
import FlagIcon from "FlagIcon" /* 8755 */;
import TrophyIcon from "TrophyIcon" /* 8808 */;
import ReactionIcon from "ReactionIcon" /* 8848 */;
import HeartIcon from "HeartIcon" /* 8865 */;
import GameControllerIcon from "GameControllerIcon" /* 9313 */;
import StarIcon from "StarIcon" /* 10324 */;
import NatureIcon from "NatureIcon" /* 10439 */;
import FoodIcon from "FoodIcon" /* 10441 */;
import BicycleIcon from "BicycleIcon" /* 10443 */;
import ObjectIcon from "ObjectIcon" /* 10445 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5514).EmojiCategories;
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
