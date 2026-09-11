// Module ID: 7017
// Function ID: 7018
// Name: useIsWindowLarge
// Dependencies: [4468, 2]
// Exports: default, getIsWindowLarge

// Module 7017 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4468 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/screen/native/useIsWindowLarge.tsx");

export default function useIsWindowLarge() {
  return useWindowSizeClassifierDefault() >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
export const getIsWindowLarge = function getIsWindowLarge() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier >= useWindowSizeClassifier.WindowSizeClassifier.LARGE;
};
