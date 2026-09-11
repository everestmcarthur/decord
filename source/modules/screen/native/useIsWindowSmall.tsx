// Module ID: 7977
// Function ID: 7978
// Name: useIsWindowSmall
// Dependencies: [4468, 2]
// Exports: default, useIsWindowSmall

// Module 7977 (useIsWindowSmall)
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4468 */;
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
