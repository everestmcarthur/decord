// Module ID: 10347
// Function ID: 10348
// Name: useShowNitroUpsellCallback
// Dependencies: [19, 4310, 2]
// Exports: default

// Module 10347 (useShowNitroUpsellCallback)
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/useShowNitroUpsellCallback.tsx");

export default function useShowNitroUpsellCallback() {
  const sharedValue = ReanimatedRexport.useSharedValue(false);
  const items = [sharedValue];
  return {
    shouldShowUpsell: sharedValue,
    onShowNitroUpsell: noop.useCallback((arg0) => {
      const result = sharedValue.set(arg0);
    }, items)
  };
};
