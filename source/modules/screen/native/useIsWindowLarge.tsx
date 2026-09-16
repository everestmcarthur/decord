// Module ID: 7053
// Function ID: 7054
// Name: useIsWindowLarge
// Dependencies: [4499, 2]
// Exports: default, getIsWindowLarge

// Module 7053 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4499 */;
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
