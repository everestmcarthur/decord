// Module ID: 14762
// Function ID: 14763
// Name: AgeGroupConfirmSetting
// Dependencies: [7976, 11473, 14760, 2]

// Module 14762 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7976 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14760 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
