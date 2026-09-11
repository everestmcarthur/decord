// Module ID: 10104
// Function ID: 10105
// Name: DisconnectRemoteButton
// Dependencies: [19, 4624, 21, 504, 9590, 7066, 10067, 1114, 9541, 9174, 2]
// Exports: DisconnectRemoteButton

// Module 10104 (DisconnectRemoteButton)
import CallsUtils from "CallsUtils" /* 9174 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9541 */;
import CallBarActionAll from "CallBarAction" /* 9590 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4624 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  const items = [GameConsoleStore];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => ({ awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  let obj2 = { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7066 : 10067), accessibilityLabel: null, isSmallSize: null, onPress: null };
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
  return jsx(CallBarActionAll.PrimaryActionButton, { source: remoteSessionId(stateFromStoresObject.awaitingRemote ? 7066 : 10067), accessibilityLabel: null, isSmallSize: null, onPress: null });
};
