// Module ID: 16851
// Function ID: 16852
// Name: PlaceholderUtils
// Dependencies: [2]
// Exports: getAdjustedPlaceholderCount

// Module 16851 (PlaceholderUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx");

export const getAdjustedPlaceholderCount = function getAdjustedPlaceholderCount(numResults) {
  ({ numColumns, placeholderCount } = numResults);
  let num = 0;
  if (0 !== placeholderCount) {
    num = placeholderCount + (numColumns - numResults.numResults % numColumns);
  }
  return num;
};
