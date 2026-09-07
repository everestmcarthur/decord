// Module ID: 11924
// Function ID: 11925
// Name: useAgeSpecificText
// Dependencies: [8651, 2]
// Exports: useAgeSpecificText

// Module 11924 (useAgeSpecificText)
import set from "set" /* 2 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8651 */;

const result = set.fileFinishedImporting("modules/parent_tools/hooks/useAgeSpecificText.tsx");

export const useAgeSpecificText = function useAgeSpecificText(stringResult, intl2) {
  let tmp = stringResult;
  if (useIsInAdultAgeGroupDefault()) {
    tmp = intl2;
  }
  return tmp;
};
