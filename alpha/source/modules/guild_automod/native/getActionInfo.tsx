// Module ID: 17937
// Function ID: 17938
// Name: getActionInfo
// Dependencies: [12115, 6853, 5291, 12106, 12717, 17938, 2]
// Exports: getActionInfo

// Module 17937 (getActionInfo)
import Constants from "Constants" /* 12115 */;
import BaseActionInfo from "BaseActionInfo" /* 17938 */;
import size from "module_2" /* 2 */;

const AutomodActionType = Constants.AutomodActionType;
const result = size.fileFinishedImporting("modules/guild_automod/native/getActionInfo.tsx");

export const getActionInfo = function getActionInfo(actionType, action, triggerType) {
  const baseActionInfo = BaseActionInfo.getBaseActionInfo(actionType, action, triggerType);
  let tmp4 = null;
  if (null != baseActionInfo) {
    const obj2 = {};
    const merged = Object.assign(baseActionInfo);
    if (AutomodActionType.BLOCK_MESSAGE === actionType) {
      let CircleXIcon = tmp(6853).CircleXIcon;
    } else if (tmp8.FLAG_TO_CHANNEL === actionType) {
      CircleXIcon = tmp(5291).TextIcon;
    } else if (tmp8.USER_COMMUNICATION_DISABLED === actionType) {
      CircleXIcon = tmp(12106).ClockWarningIcon;
    } else if (tmp8.QUARANTINE_USER === actionType) {
      CircleXIcon = tmp(12717).ChatXIcon;
    }
    if (CircleXIcon == null) {
      CircleXIcon = tmp(6853).CircleXIcon;
    }
    obj2.icon = CircleXIcon;
    tmp4 = obj2;
  }
  return tmp4;
};
