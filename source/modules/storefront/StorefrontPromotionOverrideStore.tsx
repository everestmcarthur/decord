// Module ID: 8791
// Function ID: 8792
// Name: getPromotionIdOverride
// Dependencies: [504, 573, 2]

// Module 8791 (getPromotionIdOverride)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;

let c0;
const Store = initializeDefault.Store;
class StorefrontPromotionOverrideStore extends Store {
}
StorefrontPromotionOverrideStore.prototype["getPromotionIdOverride"] = function getPromotionIdOverride() {
  return c0;
};
StorefrontPromotionOverrideStore.displayName = "StorefrontPromotionOverrideStore";
const storefrontPromotionOverrideStore = new StorefrontPromotionOverrideStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    c0 = undefined;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleSet(promotionIdOverride) {
    promotionIdOverride = promotionIdOverride.promotionIdOverride;
  }
});
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontPromotionOverrideStore.tsx");

export default storefrontPromotionOverrideStore;
