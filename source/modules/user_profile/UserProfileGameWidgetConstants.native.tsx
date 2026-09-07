// Module ID: 8917
// Function ID: 8918
// Name: widgetGameTagMetadata
// Dependencies: [8918, 8919, 8921, 8923, 4260, 2]
// Exports: getWidgetGameTagMetadata

// Module 8917 (widgetGameTagMetadata)
import set from "set" /* 2 */;
import FriendsIcon from "FriendsIcon" /* 4260 */;
import RibbonIcon from "RibbonIcon" /* 8919 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 8921 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 8923 */;
import WidgetGameTagIconRole from "WidgetGameTagIconRole" /* 8918 */;

const obj = {};
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = WidgetGameTagIconRole.buildWidgetGameTagMetadata(obj);
const result = set.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(arg0) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[arg0]) {
    tmp2 = tmp;
  }
  return tmp2;
};
