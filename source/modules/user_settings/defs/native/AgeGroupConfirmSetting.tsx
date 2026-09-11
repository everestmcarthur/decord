// Module ID: 14814
// Function ID: 14815
// Name: AgeGroupConfirmSetting
// Dependencies: [8050, 11564, 14812, 2]

// Module 14814 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 8050 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14812 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;
