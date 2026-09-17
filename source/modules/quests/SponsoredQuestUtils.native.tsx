// Module ID: 11927
// Function ID: 11928
// Name: SponsoredQuestUtils
// Dependencies: [2]
// Exports: createGameSheetHook

// Module 11927 (SponsoredQuestUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/SponsoredQuestUtils.native.tsx");

export const createGameSheetHook = function createGameSheetHook(arg0) {
  ({ quest, sourceQuestContent, applications, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  return (arg0) => arg0;
};
