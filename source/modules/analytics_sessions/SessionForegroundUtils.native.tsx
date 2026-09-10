// Module ID: 7514
// Function ID: 7515
// Name: SessionForegroundUtils
// Dependencies: [17, 2]
// Exports: isForegrounded

// Module 7514 (SessionForegroundUtils)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const AppState = _mod17.AppState;
const result = size.fileFinishedImporting("modules/analytics_sessions/SessionForegroundUtils.native.tsx");

export const isForegrounded = function isForegrounded() {
  return "active" === AppState.currentState;
};
