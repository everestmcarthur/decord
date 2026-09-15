// Module ID: 7576
// Function ID: 7577
// Name: SkippedClientHeartbeatUtil
// Dependencies: [1372, 7577, 2]
// Exports: shouldLogClientHeartbeatSkipped

// Module 7576 (SkippedClientHeartbeatUtil)
import sampleWithUserId from "sampleWithUserId" /* 7577 */;
import UserStore from "UserStore" /* 1372 */;

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
