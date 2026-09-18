// Module ID: 14974
// Function ID: 14975
// Name: AgeGroupConfirmSetting
// Dependencies: [8194, 11714, 14972, 2]

// Module 14974 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8194 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14972 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
