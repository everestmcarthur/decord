// Module ID: 11394
// Function ID: 11395
// Name: DiscordAppState
// Dependencies: [1895, 504, 2]

// Module 11394 (DiscordAppState)
import initialize from "initialize" /* 504 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [AppStateStore];
    return initialize.useStateFromStores(items, () => "active" === state.getState());
  }
};
