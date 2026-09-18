// Module ID: 15014
// Function ID: 15015
// Name: bountiesSwipeUpNuxDevTools
// Dependencies: [9937, 2]
// Exports: useForceBountiesSwipeUpNux

// Module 15014 (bountiesSwipeUpNuxDevTools)
import useLocalStorageState from "useLocalStorageState" /* 9937 */;
import size from "module_2" /* 2 */;

let c2 = "devtools-force-bounties-swipe-up-nux";
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return useLocalStorageState.useLocalStorageState(c2, false);
};
