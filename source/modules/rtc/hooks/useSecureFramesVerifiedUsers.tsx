// Module ID: 15852
// Function ID: 15853
// Name: useSecureFramesVerifiedUserIds
// Dependencies: [9139, 504, 2]
// Exports: useSecureFramesVerifiedUserIds

// Module 15852 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 504 */;
import closure_2 from "initialize" /* 9139 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};
