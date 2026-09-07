// Module ID: 8651
// Function ID: 8652
// Name: useIsInAdultAgeGroup
// Dependencies: [7537, 504, 2]
// Exports: default

// Module 8651 (useIsInAdultAgeGroup)
import initialize from "initialize" /* 504 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useIsInAdultAgeGroup.tsx");

export default function useIsInAdultAgeGroup() {
  const items = [closure_2];
  return "adult" === initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
