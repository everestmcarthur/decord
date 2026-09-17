// Module ID: 8024
// Function ID: 8025
// Name: useIsWindowSmall
// Dependencies: [4501, 2]
// Exports: default, useIsWindowSmall

// Module 8024 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4501 */;
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
