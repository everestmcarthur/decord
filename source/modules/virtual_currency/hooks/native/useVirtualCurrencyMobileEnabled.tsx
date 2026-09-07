// Module ID: 12949
// Function ID: 12950
// Name: isVirtualCurrencyEnabled
// Dependencies: [1608, 2]
// Exports: isVirtualCurrencyEnabled, useVirtualCurrencyMobileEnabled

// Module 12949 (isVirtualCurrencyEnabled)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;

const result = set.fileFinishedImporting("modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx");

export const isVirtualCurrencyEnabled = function isVirtualCurrencyEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
export const useVirtualCurrencyMobileEnabled = function useVirtualCurrencyMobileEnabled() {
  const obj = { enabled: !isMetaQuest.isMetaQuest() };
  return obj;
};
