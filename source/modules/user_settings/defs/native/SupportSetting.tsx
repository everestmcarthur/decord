// Module ID: 15622
// Function ID: 15623
// Name: SupportSetting
// Dependencies: [11602, 1114, 11240, 15623, 2]

// Module 15622 (SupportSetting)
import util from "util" /* 1114 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11240 */;
import SupportUtils from "SupportUtils" /* 15623 */;
import SettingBuilders from "SettingBuilders" /* 11602 */;
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
