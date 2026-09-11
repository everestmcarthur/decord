// Module ID: 11580
// Function ID: 11581
// Name: QuestsEligibility
// Dependencies: [1608, 2]
// Exports: getIsEligibleForQuests

// Module 11580 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};
