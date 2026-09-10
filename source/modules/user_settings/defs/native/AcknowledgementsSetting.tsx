// Module ID: 15573
// Function ID: 15574
// Name: AcknowledgementsSetting
// Dependencies: [1074, 4268, 11500, 1114, 4529, 2]

// Module 15573 (AcknowledgementsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import LinkingDefault from "Linking" /* 4268 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4529 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    LinkingDefault.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;
