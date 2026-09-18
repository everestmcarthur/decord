// Module ID: 7139
// Function ID: 7140
// Name: useIsWindowLarge
// Dependencies: [4583, 2]
// Exports: default, getIsWindowLarge

// Module 7139 (useIsWindowLarge)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4583 */;
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
