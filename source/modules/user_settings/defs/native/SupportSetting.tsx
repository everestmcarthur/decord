// Module ID: 15537
// Function ID: 15538
// Name: pressable
// Dependencies: [11473, 1114, 11110, 15538, 2]

// Module 15537 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11110 */;
import _emailSupport from "_emailSupport" /* 15538 */;
import createToggle from "createToggle" /* 11473 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: _emailSupport.emailSupport,
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: _emailSupport.emailSupport,
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
