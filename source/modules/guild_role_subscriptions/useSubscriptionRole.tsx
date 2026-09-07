// Module ID: 15232
// Function ID: 15233
// Name: useSubscriptionRole
// Dependencies: [2015, 15215, 504, 2]
// Exports: default

// Module 15232 (useSubscriptionRole)
import closure_2 from "createGuildRoleRecordFromRust" /* 2015 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default function useSubscriptionRole(arg0, editStateId) {
  const _require = arg0;
  dependencyMap = _require(15215).useSubscriptionListing(editStateId);
  const obj = _require(15215);
  const items = [closure_2];
  return _require(504).useStateFromStores(items, () => {
    let role;
    if (null != closure_0) {
      if (null != closure_1) {
        role = closure_1_2.getRole(tmp, tmp3.role_id);
      }
    }
    return role;
  });
};
