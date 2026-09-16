// Module ID: 17076
// Function ID: 17077
// Name: useSearchLayoutInsetTop
// Dependencies: [1612, 2]
// Exports: default

// Module 17076 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
