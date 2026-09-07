// Module ID: 14873
// Function ID: 14874
// Name: useUserAgeGroup
// Dependencies: [7537, 504, 2]
// Exports: default

// Module 14873 (useUserAgeGroup)
import initialize from "initialize" /* 504 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useUserAgeGroup.tsx");

export default function useUserAgeGroup() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => ageGroup.getAgeGroup());
};
