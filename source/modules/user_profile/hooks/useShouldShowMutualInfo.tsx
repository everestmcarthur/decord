// Module ID: 12998
// Function ID: 12999
// Name: useShouldShowMutualInfo
// Dependencies: [1371, 504, 12999, 2]
// Exports: default

// Module 12998 (useShouldShowMutualInfo)
import initialize from "initialize" /* 504 */;
import useIsUserProfileObfuscatedDefault from "useIsUserProfileObfuscated" /* 12999 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const obj = initialize;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = useIsUserProfileObfuscatedDefault(id);
  return id !== id.id && !useIsUserProfileObfuscatedDefault(id);
};
