// Module ID: 16952
// Function ID: 16953
// Name: useSearchLayoutInsetTop
// Dependencies: [1611, 2]
// Exports: default

// Module 16952 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
