// Module ID: 17201
// Function ID: 17202
// Name: VoicePanelPIPStateContext
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 17201 (VoicePanelPIPStateContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ id: "sa", mode: "isArray", width: false, height: "helmi", containerHeight: "juoma", showSecondaryPIP: "kupla" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return noop.useContext(context);
};
