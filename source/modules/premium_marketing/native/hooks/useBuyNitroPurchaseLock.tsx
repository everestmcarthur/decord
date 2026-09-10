// Module ID: 13432
// Function ID: 13433
// Name: useBuyNitroPurchaseLock
// Dependencies: [7289, 560, 504, 2]
// Exports: useIsBuyNitroPurchaseBlocked

// Module 13432 (useBuyNitroPurchaseLock)
import IAPStore from "IAPStore" /* 7289 */;

const require = fn;
const module_560 = fn(560);
let closure_3 = module_560.create(() => ({ isLocked: false, hasCompletedInitialLoad: false }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPurchaseLock.tsx");

export const useIsBuyNitroPurchaseBlocked = function useIsBuyNitroPurchaseBlocked() {
  let stateFromStores = closure_3((hasCompletedInitialLoad) => {
    hasCompletedInitialLoad = hasCompletedInitialLoad.hasCompletedInitialLoad;
    let isLocked = !hasCompletedInitialLoad;
    if (hasCompletedInitialLoad) {
      isLocked = hasCompletedInitialLoad.isLocked;
    }
    return isLocked;
  });
  const items = [IAPStore];
  if (!stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => busy.isBusy());
  }
  return stateFromStores;
};
export const BuyNitroPurchaseLock = {
  begin() {
    const state = closure_3.getState();
    const hasCompletedInitialLoad = state.hasCompletedInitialLoad;
    let isLocked = !hasCompletedInitialLoad;
    if (hasCompletedInitialLoad) {
      isLocked = state.isLocked;
    }
    if (!isLocked) {
      isLocked = IAPStore.isBusy();
    }
    let flag = !isLocked;
    if (!isLocked) {
      closure_3.setState({ isLocked: true });
      flag = true;
    }
    return flag;
  },
  end() {
    closure_3.setState({ isLocked: false });
  },
  setInitialLoadComplete(hasCompletedInitialLoad) {
    closure_3.setState({ hasCompletedInitialLoad });
  }
};
