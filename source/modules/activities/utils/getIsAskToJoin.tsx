// Module ID: 11764
// Function ID: 11765
// Name: getIsAskToJoin
// Dependencies: [1074, 2]
// Exports: getIsAskToJoin

// Module 11764 (getIsAskToJoin)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const ActivityActionTypes = ME.ActivityActionTypes;
const result = set.fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};
