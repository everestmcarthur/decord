// Module ID: 9656
// Function ID: 9657
// Name: leaveCurrentEmbeddedActivity
// Dependencies: [1957, 9657, 2]
// Exports: leaveCurrentEmbeddedActivity

// Module 9656 (leaveCurrentEmbeddedActivity)
import getEmbeddedActivitiesManagerDefault from "getEmbeddedActivitiesManager" /* 9657 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;

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
