// Module ID: 13900
// Function ID: 13901
// Name: useSelectedActiveStream
// Dependencies: [4654, 4660, 504, 2]
// Exports: default

// Module 13900 (useSelectedActiveStream)
import ChannelRTCStore from "ChannelRTCStore" /* 4654 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4660 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, ApplicationStreamingStore];
  return require("initialize").useStateFromStores(items, () => {
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};
