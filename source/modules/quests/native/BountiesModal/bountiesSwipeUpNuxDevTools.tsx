// Module ID: 15090
// Function ID: 15091
// Name: bountiesSwipeUpNuxDevTools
// Dependencies: [10001, 2]
// Exports: useForceBountiesSwipeUpNux

// Module 15090 (bountiesSwipeUpNuxDevTools)
import useLocalStorageState from "useLocalStorageState" /* 10001 */;
import size from "module_2" /* 2 */;

let c2 = "devtools-force-bounties-swipe-up-nux";
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return useLocalStorageState.useLocalStorageState(c2, false);
};
