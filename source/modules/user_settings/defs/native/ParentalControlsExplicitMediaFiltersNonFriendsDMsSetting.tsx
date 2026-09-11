// Module ID: 15965
// Function ID: 15966
// Name: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting
// Dependencies: [7610, 8049, 14879, 7672, 14883, 1114, 14876, 1187, 11562, 2]
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 15965 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7672 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14879 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14883 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7610 */;

require = fn;
function useObscuredContentNonFriendsDmSettingValue() {
  const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
    const tmpResult = ExplicitMediaRedactionUtils;
  }
  return tmp5;
}
function onObscuredContentNonFriendsDmOnPress() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    const intl = selectedTeenId(1114).intl;
    const obj = selectedTeenId(14883);
    const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    const intl2 = selectedTeenId(1114).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1114).t["Yh+HX1"]);
    const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    obj3.handlePress = function handlePress(explicitContentNonFriendDm) {
      const result = FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentNonFriendDm });
    };
    obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14876).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(14876);
  }
}
const SettingBuilders = fn(11562);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(8049).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
