// Module ID: 10925
// Function ID: 10926
// Name: VoiceActivityStatus
// Dependencies: [19, 21, 4574, 10926, 10917, 1114, 2]
// Exports: default

// Module 10925 (VoiceActivityStatus)
import util from "util" /* 1114 */;
import ActivityStatusTextDefault from "ActivityStatusText" /* 10917 */;
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon" /* 10926 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let closure_6 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/VoiceActivityStatus.tsx");

export default function VoiceActivityStatus(hideText) {
  ({ channel, textStyle, maxFontSizeMultiplier, hideIcon } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (!hideIcon) {
    let tmp5 = !hideIcon;
    if (!hideIcon) {
      const obj = { channel, size: "xxs", color: "status-positive", style: null };
      const items = [tmp.icon, hideText.iconStyle];
      obj.style = items;
      tmp5 = React3(UserProfileVoiceActivityIconDefault, obj);
    }
    const items1 = [tmp5, ];
    if (flag) {
      const obj2 = { children: null };
      items1[1] = tmp9;
      obj2.children = items1;
      let tmp3Result = tmp3(tmp4, obj2);
    } else {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const tmp14 = ActivityStatusTextDefault;
          const obj3 = { style: textStyle, maxFontSizeMultiplier, children: null };
          const intl = util.intl;
          const string = intl.string;
          const t = util.t;
          if (isGuildStageVoiceResult) {
            obj3.children = string(t.QygGCN);
            let tmp11Result = tmp11(tmp14, obj3);
          } else {
            obj3.children = string(t.msxteM);
            tmp11Result = tmp11(tmp14, obj3);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
      }
      const obj4 = { style: textStyle, maxFontSizeMultiplier, children: null };
      textStyle = require;
      maxFontSizeMultiplier = util.intl;
      obj4.children = maxFontSizeMultiplier.string(util.t["9FaEzi"]);
      tmp11Result = React3(ActivityStatusTextDefault, obj4);
    }
    tmp3 = hasOwnProperty;
    tmp4 = React4;
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
};
