// Module ID: 9724
// Function ID: 9725
// Name: useIsStreamFocused
// Dependencies: [4621, 4626, 504, 2]
// Exports: useIsStreamFocused

// Module 9724 (useIsStreamFocused)
import ChannelRTCStore from "ChannelRTCStore" /* 4621 */;

const require = globalThis.__r;

const require = fn;
const isStreamParticipant = fn(4626).isStreamParticipant;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  _require = id;
  const items = [ChannelRTCStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != closure_0) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
};
