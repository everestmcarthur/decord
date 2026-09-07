// Module ID: 9220
// Function ID: 9221
// Name: useVoiceStateForRemoteSession
// Dependencies: [502, 4579, 4577, 504, 2]
// Exports: default

// Module 9220 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 504 */;
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "updateVoiceState" /* 4579 */;
import closure_4 from "set" /* 4577 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [closure_2, closure_3, closure_4];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};
