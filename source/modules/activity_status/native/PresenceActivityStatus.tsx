// Module ID: 10892
// Function ID: 10893
// Name: PresenceActivityStatus
// Dependencies: [19, 1074, 21, 7739, 9228, 5106, 9916, 10888, 10893, 10887, 10890, 2]
// Exports: default

// Module 10892 (PresenceActivityStatus)
import noopAll from "noop" /* 19 */;
import AppsIcon2 from "AppsIcon" /* 5106 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7739 */;
import GameControllerIcon from "GameControllerIcon" /* 9228 */;
import MusicIcon from "MusicIcon" /* 9916 */;
import TvIcon from "TvIcon" /* 10888 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10893 */;
import { ActivityTypes } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default function PresenceActivityStatus(hideText) {
  ({ activity, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (hideIcon) {
    if (flag) {
      return null;
    }
  }
  if (isEmbeddedActivityDefault(activity)) {
    let AppsIcon = AppsIcon2.AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = GameControllerIcon.GameControllerIcon;
  } else if (activity.type === tmp3.LISTENING) {
    AppsIcon = MusicIcon.MusicIcon;
  } else {
    if (activity.type !== tmp3.WATCHING) {
      if (activity.type !== tmp3.STREAMING) {
        AppsIcon = null;
        if (activity.type === tmp3.COMPETING) {
          AppsIcon = GameControllerIcon.GameControllerIcon;
        }
      }
    }
    AppsIcon = TvIcon.TvIcon;
  }
  let tmp12 = !hideIcon;
  if (!hideIcon) {
    tmp12 = null != AppsIcon;
  }
  if (tmp12) {
    let obj = { icon: null, style: null };
    obj[0] = AppsIcon;
    obj[1] = iconStyle;
    tmp12 = callback(tmp(10887), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = getActivityStatusTextDefault(activity, true).text;
    tmp15 = callback(tmp(10890), obj);
  }
  children[1] = tmp15;
  return closure_6(closure_5, { children });
};
