// Module ID: 14601
// Function ID: 14602
// Name: CollectiblesMarketingManager
// Dependencies: [4606, 1898, 573, 7615, 7664, 2]

// Module 14601 (CollectiblesMarketingManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7615 */;
import CollectiblesMarketingReleaseType2 from "CollectiblesMarketingReleaseType" /* 7664 */;
import DevSettingsStore from "DevSettingsStore" /* 4606 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

require = fn;
class CollectiblesMarketingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      value = DevSettingsStore.get("shop_include_unpublished");
      const CollectiblesMarketingReleaseType = CollectiblesMarketingReleaseType2.CollectiblesMarketingReleaseType;
      const collectiblesMarketings = CollectiblesActionCreators.fetchCollectiblesMarketings({ release: value ? CollectiblesMarketingReleaseType.BETA : CollectiblesMarketingReleaseType.PROD });
    };
    return applyArgumentsResult;
  }
}
const prototype = CollectiblesMarketingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
const collectiblesMarketingManager = new CollectiblesMarketingManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesMarketingManager.native.tsx");

export default collectiblesMarketingManager;
