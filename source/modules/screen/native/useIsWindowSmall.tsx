// Module ID: 7954
// Function ID: 7955
// Name: useIsWindowSmall
// Dependencies: [4466, 2]
// Exports: default, useIsWindowSmall

// Module 7954 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4466 */;
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
