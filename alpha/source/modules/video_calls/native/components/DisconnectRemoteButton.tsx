// Module ID: 10268
// Function ID: 10269
// Name: DisconnectRemoteButton
// Dependencies: [19, 4773, 21, 504, 9665, 7232, 10231, 1115, 10043, 9903, 2]
// Exports: DisconnectRemoteButton

// Module 10268 (DisconnectRemoteButton)
import CallBarActionAll from "CallBarAction" /* 9665 */;
import CallsUtils from "CallsUtils" /* 9903 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 10043 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4773 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  const items = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  let obj2 = { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7232 : 10231), accessibilityLabel: null, isSmallSize: null, onPress: null };
  const intl = tmp(1115).intl;
  obj2.accessibilityLabel = intl.string(channel(1115).t["6vrfgt"]);
  obj2.isSmallSize = channel.isSmallSize;
  obj2.onPress = function onPress() {
    if (null != remoteSessionId) {
      GameConsoleActionCreators.remoteDisconnect(tmp);
      CallsUtils.handleDisconnect(channel);
    } else {
      GameConsoleActionCreators.disconnectRemote();
    }
  };
  return jsx(CallBarActionAll.PrimaryActionButton, { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7232 : 10231), accessibilityLabel: null, isSmallSize: null, onPress: null });
};
