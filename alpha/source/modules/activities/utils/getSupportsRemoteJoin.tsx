// Module ID: 12013
// Function ID: 12014
// Name: getSupportsRemoteJoin
// Dependencies: [1074, 7553, 2]
// Exports: getSupportsRemoteJoin

// Module 12013 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1074 */;
import hasFlagDefault from "hasFlag" /* 7553 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
