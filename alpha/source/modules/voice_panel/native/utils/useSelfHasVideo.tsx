// Module ID: 17539
// Function ID: 17540
// Name: useSelfHasVideo
// Dependencies: [4772, 502, 1992, 504, 9709, 2]
// Exports: default

// Module 17539 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 9709 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4772 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

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
