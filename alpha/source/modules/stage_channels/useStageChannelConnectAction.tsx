// Module ID: 9761
// Function ID: 9762
// Name: useStageChannelConnectAction
// Dependencies: [8666, 9757, 2]
// Exports: default, useStageChannelStartEvent

// Module 9761 (useStageChannelConnectAction)
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 8666 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9757 */;
import size from "module_2" /* 2 */;

const ChannelConnectAction = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export { ChannelConnectAction };
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: useStateChannelIsLiveDefault(id), isModerator: useCurrentUserStageRolesDefault(id, true).moderator };
};
