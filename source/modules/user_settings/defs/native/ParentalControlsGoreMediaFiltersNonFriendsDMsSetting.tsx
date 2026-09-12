// Module ID: 15991
// Function ID: 15992
// Name: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [7640, 8079, 14913, 7702, 14917, 14910, 1114, 1187, 11601, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 15991 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7702 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14913 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14917 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

require = fn;
function useGoreContentNonFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = useParentalControlSettings.useParentalControlledGoreContentSettings();
  let prop;
  if (parentalControlledGoreContentSettings != null) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
    const tmpResult = ExplicitMediaRedactionUtils;
  }
  return tmp5;
}
function onGoreContentNonFriendsDmOnPress() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    const obj = selectedTeenId(14917);
    const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
    const intl = selectedTeenId(1114).intl;
    obj3.title = intl.string(selectedTeenId(1114).t["16/3Bi"]);
    const intl2 = selectedTeenId(1114).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1114).t["Yh+HX1"]);
    obj3.handlePress = function handlePress(goreContentNonFriendDm) {
      return FamilyCenterControlledSettingsUtils.updateGoreContentSetting(selectedTeenId, { goreContentNonFriendDm });
    };
    obj3.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    const result = selectedTeenId(14910).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(14910);
  }
}
const SettingBuilders = fn(11601);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(8079).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
