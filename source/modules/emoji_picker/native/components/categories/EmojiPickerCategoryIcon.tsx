// Module ID: 10419
// Function ID: 10420
// Name: EmojiPickerCategoryIcon
// Dependencies: [19, 5513, 21, 8787, 10305, 4568, 8827, 10420, 10422, 9292, 10424, 10426, 8844, 8734, 8732, 2]

// Module 10419 (EmojiPickerCategoryIcon)
import ClockIcon from "ClockIcon" /* 4568 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8732 */;
import FlagIcon from "FlagIcon" /* 8734 */;
import TrophyIcon from "TrophyIcon" /* 8787 */;
import ReactionIcon from "ReactionIcon" /* 8827 */;
import HeartIcon from "HeartIcon" /* 8844 */;
import GameControllerIcon from "GameControllerIcon" /* 9292 */;
import StarIcon from "StarIcon" /* 10305 */;
import NatureIcon from "NatureIcon" /* 10420 */;
import FoodIcon from "FoodIcon" /* 10422 */;
import BicycleIcon from "BicycleIcon" /* 10424 */;
import ObjectIcon from "ObjectIcon" /* 10426 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiCategories = fn(5513).EmojiCategories;
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
