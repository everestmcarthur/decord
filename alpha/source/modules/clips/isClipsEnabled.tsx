// Module ID: 13878
// Function ID: 13879
// Name: isClipsEnabled
// Dependencies: [1915, 13879, 504, 2]
// Exports: isClipsEnabled, useIsClipsEnabled

// Module 13878 (isClipsEnabled)
import ClipsExperiment from "ClipsExperiment" /* 13879 */;
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
