// Module ID: 17702
// Function ID: 17703
// Name: IAPManager
// Dependencies: [7314, 2]

// Module 17702 (IAPManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7314 */;

const prototype = function IAPManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {

    },
    APP_STATE_UPDATE() {

    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/IAPManager.android.tsx");

export default prototype1;
