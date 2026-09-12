// Module ID: 15621
// Function ID: 15622
// Name: SupportSetting
// Dependencies: [11601, 1114, 11239, 15622, 2]

// Module 15621 (SupportSetting)
import util from "util" /* 1114 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11239 */;
import SupportUtils from "SupportUtils" /* 15622 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
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
