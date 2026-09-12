// Module ID: 13830
// Function ID: 13831
// Name: SocialLayerStorefrontConfigManager
// Dependencies: [7221, 10926, 2]

// Module 13830 (SocialLayerStorefrontConfigManager)
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10926 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
class SocialLayerStorefrontConfigManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { POST_CONNECTION_OPEN: null };
    onPostConnectionOpen = applyArgumentsResult.onPostConnectionOpen;
    obj.POST_CONNECTION_OPEN = onPostConnectionOpen.bind(applyArgumentsResult);
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
SocialLayerStorefrontConfigManager.prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
};
const socialLayerStorefrontConfigManager = new SocialLayerStorefrontConfigManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/SocialLayerStorefrontConfigManager.tsx");

export default socialLayerStorefrontConfigManager;
