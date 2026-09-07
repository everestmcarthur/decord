// Module ID: 8797
// Function ID: 8798
// Name: useSlayerStorefrontDevApplicationIdOverride
// Dependencies: [8798, 2]
// Exports: useSlayerStorefrontDevApplicationIdOverride

// Module 8797 (useSlayerStorefrontDevApplicationIdOverride)
import set from "set" /* 2 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 8798 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = set.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
