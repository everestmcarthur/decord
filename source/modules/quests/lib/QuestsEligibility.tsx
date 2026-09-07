// Module ID: 11489
// Function ID: 11490
// Name: getIsEligibleForQuests
// Dependencies: [1608, 2]
// Exports: getIsEligibleForQuests

// Module 11489 (getIsEligibleForQuests)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;

const result = set.fileFinishedImporting("modules/quests/lib/QuestsEligibility.tsx");

export const getIsEligibleForQuests = function getIsEligibleForQuests() {
  return !isMetaQuest.isMetaQuest();
};
