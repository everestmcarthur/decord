// Module ID: 13631
// Function ID: 13632
// Name: stopSyncingUserActivity
// Dependencies: [573, 2]
// Exports: default

// Module 13631 (stopSyncingUserActivity)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("modules/activities/utils/stopSyncingUserActivity.tsx");

export default function stopSyncingUserActivity() {
  dispatcherDefault.dispatch({ type: "ACTIVITY_SYNC_STOP" });
};
