// Module ID: 11328
// Function ID: 11329
// Name: purchaseUpdatedListener
// Dependencies: [17, 11318, 11316, 11329]
// Exports: promotedProductListener, purchaseErrorListener, purchaseUpdatedListener, transactionListener

// Module 11328 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod11318 from "module_11318" /* 11318 */;
import productSk2Map from "productSk2Map" /* 11329 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_11318");
  const obj2 = new NativeEventEmitter(require("module_11318").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_11316");
  if (require("module_11318").isAndroid) {
    const androidModule = tmp(11318).getAndroidModule();
    const tmpResult = tmp(11318);
    androidModule.startListening().catch((error) => {
      if (closure_1) {
        tmp(error);
      } else {
        throw error;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod11318.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11318.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(tmp(11318).getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = tmp(11318);
    }
    tmpResult = tmp(11316);
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11318.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(tmp(11318).getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = tmp(11318);
    }
    tmpResult = tmp(11316);
  }
  return addListenerResult;
};
