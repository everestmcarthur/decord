// Module ID: 6959
// Function ID: 6960
// Name: useIsWindowLarge
// Dependencies: [4435, 2]
// Exports: default, getIsWindowLarge

// Module 6959 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4435 */;
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
