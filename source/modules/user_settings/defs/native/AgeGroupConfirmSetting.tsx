// Module ID: 14872
// Function ID: 14873
// Name: AgeGroupConfirmSetting
// Dependencies: [8091, 11614, 14870, 2]

// Module 14872 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8091 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14870 */;
import SettingBuilders from "SettingBuilders" /* 11614 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
