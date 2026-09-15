// Module ID: 17637
// Function ID: 17638
// Name: SettingTreeCacheLifecycleManager
// Dependencies: [7225, 14791, 2]

// Module 17637 (SettingTreeCacheLifecycleManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7225 */;

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
