// Module ID: 15166
// Function ID: 15167
// Name: useFamilyCenterActivities
// Dependencies: [7777, 7778, 563, 7832, 7474, 2]
// Exports: useActionTotalsForDisplayType, useActionsForDisplayType, useFormattedTotalForDisplayType, useHasActionForAnyDisplayType

// Module 15166 (useFamilyCenterActivities)
import useStateFromStores from "useStateFromStores" /* 563 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7777 */;

const require = globalThis.__r;

require = fn;
const TeenActionDisplayType = fn(7778).TeenActionDisplayType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = function useActionsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStoresArray(items, () => FamilyCenterStore.getActionsForDisplayType(closure_0));
};
export const useActionTotalsForDisplayType = function useActionTotalsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStores(items, () => FamilyCenterStore.getTotalForDisplayType(closure_0));
};
export const useHasActionForAnyDisplayType = function useHasActionForAnyDisplayType() {
  const items = [FamilyCenterStore];
  return useStateFromStores.useStateFromStores(items, () => {
    const values = Object.values(TeenActionDisplayType);
    return values.some((item) => totalForDisplayType.getTotalForDisplayType(item) > 0);
  });
};
export const useFormattedTotalForDisplayType = function useFormattedTotalForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  let num = require("useStateFromStores").useStateFromStores(items, () => FamilyCenterStore.getTotalForDisplayType(closure_0));
  if (num == null) {
    num = 0;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    return tmp(7832).formatTotalTime(num);
  } else if (displayType === tmp3.PURCHASES) {
    const totalSpendAmount = obj2.getTotalSpendAmount();
    const totalSpendCurrency = obj2.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        result = tmp(7474).shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
        const tmpResult3 = tmp(7474);
      }
    }
    return result;
  } else if (displayType === tmp3.GIFTS) {
    const totalGiftValue = obj2.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = tmp(7474).shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
      const tmpResult4 = tmp(7474);
    }
    return result1;
  } else {
    return num;
  }
  const obj = require("useStateFromStores");
};
