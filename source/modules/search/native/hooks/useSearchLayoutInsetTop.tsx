// Module ID: 16869
// Function ID: 16870
// Name: useSearchLayoutInsetTop
// Dependencies: [1611, 2]
// Exports: default

// Module 16869 (useSearchLayoutInsetTop)
import set from "set" /* 2 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;

const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
