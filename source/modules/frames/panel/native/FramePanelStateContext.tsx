// Module ID: 17044
// Function ID: 17045
// Name: context
// Dependencies: [19, 17018, 2]

// Module 17044 (context)
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext(require("useActivityWebViewLock").activityPanelStateContextDefault);
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelStateContext.tsx");

export default context;
