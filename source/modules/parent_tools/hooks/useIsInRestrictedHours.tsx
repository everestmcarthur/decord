// Module ID: 17505
// Function ID: 17506
// Name: useIsInRestrictedHours
// Dependencies: [1372, 7647, 504, 17506, 2]
// Exports: default

// Module 17505 (useIsInRestrictedHours)
import initialize from "initialize" /* 504 */;
import RestrictedHoursManager from "RestrictedHoursManager" /* 17506 */;
import UserStore from "UserStore" /* 1372 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7647 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [UserStore, FamilyCenterStore];
  return initialize.useStateFromStores(items, RestrictedHoursManager.getCurrentRestrictedHoursState);
};
