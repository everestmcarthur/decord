// Module ID: 8018
// Function ID: 8019
// Name: useIsWindowSmall
// Dependencies: [4499, 2]
// Exports: default, useIsWindowSmall

// Module 8018 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4499 */;
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
