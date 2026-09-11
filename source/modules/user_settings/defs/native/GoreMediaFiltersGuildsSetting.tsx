// Module ID: 14888
// Function ID: 14889
// Name: GoreMediaFiltersGuildsSetting
// Dependencies: [8049, 8735, 14879, 14875, 7672, 7374, 14876, 1114, 1187, 11562, 2]

// Module 14888 (GoreMediaFiltersGuildsSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7374 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7672 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import useUserIsTeen from "useUserIsTeen" /* 8735 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14875 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14876 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["FP+a42"]);
  },
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentGuilds)();
  },
  onPress: function onGoreContentGuildsOnPress() {
    const obj = SensitiveMediaGoreRedactionSettingsUtils;
    const obj3 = { title: null, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t["16/3Bi"]);
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["FP+a42"]);
    obj3.handlePress = function handlePress(goreContentGuilds) {
      return SensitiveMediaGoreRedactionSettingsUtils.updateGoreContentSetting({ goreContentGuilds });
    };
    const items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK];
    obj3.excluded = items;
    obj3.currentValue = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
  },
  useIsDisabled() {
    let userIsTeen = useUserIsTeen.useUserIsTeen();
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["N/oRI+"]), , ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["K0OWP+"]);
    return items;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;
