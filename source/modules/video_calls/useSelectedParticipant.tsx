// Module ID: 9561
// Function ID: 9562
// Name: useSelectedParticipant
// Dependencies: [4622, 504, 2]
// Exports: default

// Module 9561 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 4622 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore];
  return require("initialize").useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipant(id.id));
};
