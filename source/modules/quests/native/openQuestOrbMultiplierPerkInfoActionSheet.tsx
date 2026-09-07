// Module ID: 15169
// Function ID: 15170
// Name: openQuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [4527, 15170, 1896, 2]
// Exports: default

// Module 15169 (openQuestOrbMultiplierPerkInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/quests/native/openQuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function openQuestOrbMultiplierPerkInfoActionSheet(multiplier, orbMultiplierEligibility) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { multiplier, orbMultiplierEligibility };
  obj.openLazy(asyncRequireImpl(15170, dependencyMap.paths), "QuestOrbMultiplierPerkInfoActionSheet", obj);
};
