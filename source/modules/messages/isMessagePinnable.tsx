// Module ID: 11759
// Function ID: 11760
// Name: isMessagePinnable
// Dependencies: [4245, 1074, 7344, 7343, 2]
// Exports: default

// Module 11759 (isMessagePinnable)
import ThreadHooks from "ThreadHooks" /* 7343 */;
import isSystemMessageDefault from "isSystemMessage" /* 7344 */;
import PermissionStore from "PermissionStore" /* 4245 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: closure_4, Permissions: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/isMessagePinnable.tsx");

export default function isMessagePinnable(arg0, isSystemDM) {
  const isSystemDMResult = isSystemDM.isSystemDM();
  let isActiveChannelOrUnarchivableThread = !isSystemDMResult;
  if (!isSystemDMResult) {
    isActiveChannelOrUnarchivableThread = !isSystemMessageDefault(arg0);
  }
  let isPrivateResult = PermissionStore.can(constants2.PIN_MESSAGES, isSystemDM) && PermissionStore.can(constants2.READ_MESSAGE_HISTORY, isSystemDM);
  if (isActiveChannelOrUnarchivableThread) {
    if (!isPrivateResult) {
      isPrivateResult = isSystemDM.isPrivate();
    }
    isActiveChannelOrUnarchivableThread = isPrivateResult;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = ThreadHooks.getIsActiveChannelOrUnarchivableThread(isSystemDM);
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.GUILD_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.GUILD_STAGE_VOICE;
  }
  if (isActiveChannelOrUnarchivableThread) {
    isActiveChannelOrUnarchivableThread = isSystemDM.type !== constants.MEDIA_THREAD;
  }
  return isActiveChannelOrUnarchivableThread;
};
