// Module ID: 14914
// Function ID: 14915
// Name: useUserIsTeenAgeGroup
// Dependencies: [7537, 504, 2]
// Exports: default

// Module 14914 (useUserIsTeenAgeGroup)
import initialize from "initialize" /* 504 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserIsTeenAgeGroup.tsx");

export default function useUserIsTeenAgeGroup() {
  const items = [closure_2];
  return "teen" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
