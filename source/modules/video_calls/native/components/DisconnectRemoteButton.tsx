// Module ID: 10102
// Function ID: 10103
// Name: DisconnectRemoteButton
// Dependencies: [19, 4623, 21, 504, 9588, 7065, 10065, 1114, 9539, 9172, 2]
// Exports: DisconnectRemoteButton

// Module 10102 (DisconnectRemoteButton)
import CallsUtils from "CallsUtils" /* 9172 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9539 */;
import CallBarActionAll from "CallBarAction" /* 9588 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4623 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  const items = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  let obj2 = { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7065 : 10065), accessibilityLabel: null, isSmallSize: null, onPress: null };
  const intl = tmp(1114).intl;
  obj2.accessibilityLabel = intl.string(channel(1114).t["6vrfgt"]);
  obj2.isSmallSize = channel.isSmallSize;
  obj2.onPress = function onPress() {
    if (null != remoteSessionId) {
      GameConsoleActionCreators.remoteDisconnect(tmp);
      CallsUtils.handleDisconnect(channel);
    } else {
      GameConsoleActionCreators.disconnectRemote();
    }
  };
  return jsx(CallBarActionAll.PrimaryActionButton, { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7065 : 10065), accessibilityLabel: null, isSmallSize: null, onPress: null });
};
