// Module ID: 9518
// Function ID: 9519
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1956, 9519, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 9518 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9519 */;
import closure_2 from "participantFromServer" /* 1956 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    let obj = getEmbeddedActivitiesManagerDefault();
    obj = { location: null, applicationId: null, showFeedback: false };
    ({ location: obj2[0], applicationId: obj2[1] } = currentEmbeddedActivity);
    obj.leaveActivity(obj);
  }
};
