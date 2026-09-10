// Module ID: 11807
// Function ID: 11808
// Name: SponsoredQuestUtils
// Dependencies: [2]
// Exports: createGameSheetHook

// Module 11807 (SponsoredQuestUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/SponsoredQuestUtils.native.tsx");

export const createGameSheetHook = function createGameSheetHook(arg0) {
  ({ quest, sourceQuestContent, applications, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  return (arg0) => arg0;
};
