// Module ID: 17095
// Function ID: 17096
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 17095 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ id: "sa", mode: "isArray", width: false, height: 57.77734375, containerHeight: null, showSecondaryPIP: "\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};
