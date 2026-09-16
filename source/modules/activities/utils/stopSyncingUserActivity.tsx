// Module ID: 13731
// Function ID: 13732
// Name: stopSyncingUserActivity
// Dependencies: [573, 2]
// Exports: default

// Module 13731 (stopSyncingUserActivity)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  DispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
