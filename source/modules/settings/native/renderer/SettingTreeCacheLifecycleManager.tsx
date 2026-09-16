// Module ID: 17693
// Function ID: 17694
// Name: SettingTreeCacheLifecycleManager
// Dependencies: [7228, 14807, 2]

// Module 17693 (SettingTreeCacheLifecycleManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

const prototype = function SettingTreeManagerLifecycleManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    }
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    applyArgumentsResult(dependencyMap[1]).clearCaches();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingTreeCacheLifecycleManager.tsx");

export default prototype1;
