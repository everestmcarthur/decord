// Module ID: 9606
// Function ID: 9607
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1956, 9607, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 9606 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9607 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/leaveCurrentEmbeddedActivity.tsx");

export const leaveCurrentEmbeddedActivity = function leaveCurrentEmbeddedActivity() {
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    ({ location: obj2.location, applicationId: obj2.applicationId } = currentEmbeddedActivity);
    getEmbeddedActivitiesManagerDefault().leaveActivity({ location: null, applicationId: null, showFeedback: false });
    const obj = getEmbeddedActivitiesManagerDefault();
    const obj3 = { location: null, applicationId: null, showFeedback: false };
  }
};
