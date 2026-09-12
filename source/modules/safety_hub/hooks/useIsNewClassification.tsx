// Module ID: 14862
// Function ID: 14863
// Name: useIsNewClassification
// Dependencies: [11, 2]
// Exports: useIsNewClassification

// Module 14862 (useIsNewClassification)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useIsNewClassification.tsx");

export const useIsNewClassification = function useIsNewClassification(classification) {
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(classification.id);
  return Math.abs(extractTimestampResult - new Date().getTime()) < 86400000;
};
