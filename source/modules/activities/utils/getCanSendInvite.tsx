// Module ID: 13363
// Function ID: 13364
// Name: getCanSendInvite
// Dependencies: [1074, 11883, 7416, 11884, 11885, 11886, 2]
// Exports: getCanSendInvite

// Module 13363 (getCanSendInvite)
import isInviteActiveDefault from "isInviteActive" /* 11883 */;
import getPartySize from "getPartySize" /* 11884 */;
import hasPartySize from "hasPartySize" /* 11885 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ActivityActionTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/getCanSendInvite.tsx");

export const getCanSendInvite = function getCanSendInvite(findActivityResult, author, application1, id2) {
  if (author.author.id === id2) {
    return false;
  } else {
    if (isInviteActiveDefault(findActivityResult, author, application1.id)) {
      const activity = author.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== constants2.JOIN_REQUEST) {
        return false;
      } else if (tmp11(7416)(findActivityResult, constants.JOIN)) {
        const partySize = getPartySize.getPartySize(findActivityResult);
        const tmp5 = require;
        const hasPartySizeResult = hasPartySize.hasPartySize(partySize);
        let isPartyFullResult = !hasPartySizeResult;
        if (hasPartySizeResult) {
          isPartyFullResult = tmp5(11886).isPartyFull(partySize);
          const tmp5Result = tmp5(11886);
        }
        return !isPartyFullResult;
      } else {
        return false;
      }
    } else {
      return false;
    }
    tmp11 = importDefault;
  }
};
