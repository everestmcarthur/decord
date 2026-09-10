// Module ID: 6995
// Function ID: 6996
// Name: useIsWindowLarge
// Dependencies: [4466, 2]
// Exports: default, getIsWindowLarge

// Module 6995 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4466 */;
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
