// Module ID: 14765
// Function ID: 14766
// Name: pressable
// Dependencies: [7975, 11473, 14760, 2]

// Module 14765 (pressable)
import set from "set" /* 2 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import AGE_GROUP_CONFIRM_ROW_PROPS from "AGE_GROUP_CONFIRM_ROW_PROPS" /* 14760 */;
import createToggle from "createToggle" /* 11473 */;

const obj = {};
const merged = Object.assign(AGE_GROUP_CONFIRM_ROW_PROPS.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP;
obj.usePredicate = AGE_GROUP_CONFIRM_ROW_PROPS.useShowAccountStatusAgeGroupRow;
const pressable = createToggle.createPressable(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
