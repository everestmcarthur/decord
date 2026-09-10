// Module ID: 9686
// Function ID: 9687
// Name: useIsStreamFocused
// Dependencies: [4590, 4595, 504, 2]
// Exports: useIsStreamFocused

// Module 9686 (useIsStreamFocused)
import ChannelRTCStore from "ChannelRTCStore" /* 4590 */;

const require = globalThis.__r;

const require = fn;
const isStreamParticipant = fn(4595).isStreamParticipant;
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
