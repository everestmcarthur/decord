// Module ID: 8345
// Function ID: 8346
// Name: MarkupEligibilityUtils
// Dependencies: [11, 2]
// Exports: isMessageNewerThanImprovedMarkdownEpoch

// Module 8345 (MarkupEligibilityUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupEligibilityUtils.tsx");

export const isMessageNewerThanImprovedMarkdownEpoch = function isMessageNewerThanImprovedMarkdownEpoch(arg0) {
  return arg0 >= SnowflakeUtilsDefault.extractTimestamp("1088216706570268682");
};
