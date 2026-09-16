// Module ID: 15649
// Function ID: 15650
// Name: SupportSetting
// Dependencies: [11614, 1115, 11258, 15650, 2]

// Module 15649 (SupportSetting)
import util from "util" /* 1115 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11258 */;
import SupportUtils from "SupportUtils" /* 15650 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: SupportUtils.emailSupport,
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
