// Module ID: 13786
// Function ID: 13787
// Name: isClipsEnabled
// Dependencies: [1915, 13787, 504, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 13786 (isClipsEnabled)
import ClipsExperiment from "ClipsExperiment" /* 13787 */;
import ClipsStore from "ClipsStore" /* 1915 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = ClipsExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = ClipsStore.getState().clipsSettings.clipsEnabled;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = function useIsClipsEnabled() {
  let isClipsAvailable = ClipsExperiment.useIsClipsAvailable();
  const items = [ClipsStore];
  if (isClipsAvailable) {
    isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
  }
  return isClipsAvailable;
};
