// Module ID: 11721
// Function ID: 11722
// Name: getGroupDMRecipientLimit
// Dependencies: [1371, 11722, 1074, 1373, 1885, 11723, 2]
// Exports: default

// Module 11721 (getGroupDMRecipientLimit)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1885 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_3 = fn(11722).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1074);
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useNitroCapExperiment;
  if (flag === undefined) {
    flag = false;
  }
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    let tmp5 = hasOwnProperty;
  } else {
    if (flag) {
      if (obj3.isPremium(currentUser, PremiumTypes.TIER_2)) {
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
        tmp2Result = tmp2(11723);
      }
      obj3 = PremiumTypeUtils;
      tmp2 = require;
    }
    tmp5 = React4;
  }
  return tmp5;
};
