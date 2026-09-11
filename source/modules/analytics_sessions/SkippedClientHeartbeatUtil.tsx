// Module ID: 7543
// Function ID: 7544
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1371, 7544, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7543 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7544 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatUtil.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  const currentUser = UserStore.getCurrentUser();
  let tmp = null != currentUser;
  if (tmp) {
    let isStaffResult = currentUser.isStaff();
    if (!isStaffResult) {
      isStaffResult = sampleWithUserId.sampleWithUserId(currentUser.id, 0.02);
    }
    tmp = isStaffResult;
  }
  return tmp;
};
