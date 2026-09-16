// Module ID: 17290
// Function ID: 17291
// Name: useSelfHasVideo
// Dependencies: [4654, 502, 1909, 504, 9762, 2]
// Exports: default

// Module 17290 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 9762 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4654 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
  return require("initialize").useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
    return participantHasVideo.canRenderParticipantVideo(participant, MediaEngineStore);
  });
};
