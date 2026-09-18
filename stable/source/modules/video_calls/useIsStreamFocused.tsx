// Module ID: 9660
// Function ID: 9661
// Name: useIsStreamFocused
// Dependencies: [4576, 4581, 504, 2]
// Exports: useIsStreamFocused

// Module 9660 (useIsStreamFocused)
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;

const require = globalThis.__r;

const require = fn;
const isStreamParticipant = fn(4581).isStreamParticipant;
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
