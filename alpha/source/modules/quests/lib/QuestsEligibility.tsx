// Module ID: 11737
// Function ID: 11738
// Name: QuestsEligibility
// Dependencies: [1609, 2]
// Exports: getIsEligibleForQuests

// Module 11737 (QuestsEligibility)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !MetaQuestUtils.isMetaQuest();
};
