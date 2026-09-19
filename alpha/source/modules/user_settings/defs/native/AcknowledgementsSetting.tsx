// Module ID: 15811
// Function ID: 15812
// Name: AcknowledgementsSetting
// Dependencies: [1074, 4451, 11723, 1115, 4710, 2]

// Module 15811 (AcknowledgementsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4451 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4710 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
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
