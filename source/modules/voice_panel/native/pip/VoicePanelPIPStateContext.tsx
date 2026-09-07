// Module ID: 17095
// Function ID: 17096
// Name: context
// Dependencies: [19, 2]
// Exports: usePIPState

// Module 17095 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ id: "sa", mode: "isArray", width: false, height: "first_quarter_moon", containerHeight: "waxing_gibbous_moon", showSecondaryPIP: "earth_africa" });
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPStateContext.tsx");

export const VoicePanelPIPStateContext = context;
export const usePIPState = function usePIPState() {
  return importAllResult.useContext(context);
};
