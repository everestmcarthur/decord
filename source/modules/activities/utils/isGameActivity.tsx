// Module ID: 10891
// Function ID: 10892
// Name: isGameActivity
// Dependencies: [1074, 2]
// Exports: default

// Module 10891 (isGameActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};
