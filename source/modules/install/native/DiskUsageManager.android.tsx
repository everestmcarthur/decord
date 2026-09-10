// Module ID: 17440
// Function ID: 17441
// Name: DiskUsageManager
// Dependencies: [7132, 2]

// Module 17440 (DiskUsageManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7132 */;

class DiskUsageManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = {
      APP_STATE_UPDATE() {

          }
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = DiskUsageManager.prototype;
prototype["_initialize"] = function _initialize() {

};
prototype["_terminate"] = function _terminate() {

};
const diskUsageManager = new DiskUsageManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/install/native/DiskUsageManager.android.tsx");

export default diskUsageManager;
