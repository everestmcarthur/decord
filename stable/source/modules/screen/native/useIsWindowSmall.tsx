// Module ID: 7903
// Function ID: 7904
// Name: useIsWindowSmall
// Dependencies: [4421, 2]
// Exports: default, useIsWindowSmall

// Module 7903 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4421 */;
import size from "module_2" /* 2 */;

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

const result = size.fileFinishedImporting("modules/screen/native/useIsWindowSmall.tsx");

export default function getIsWindowSmall() {
  const windowSizeClassifier = useWindowSizeClassifier.getWindowSizeClassifier();
  return windowSizeClassifier <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
export const useIsWindowSmall = function useIsWindowSmall() {
  return useWindowSizeClassifierDefault() <= useWindowSizeClassifier.WindowSizeClassifier.SMALL;
};
