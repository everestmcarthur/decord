// Module ID: 17576
// Function ID: 17577
// Name: SelfPresenceStoreManager
// Dependencies: [5329, 7170, 573, 2]

// Module 17576 (SelfPresenceStoreManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5329 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7170 */;

function handleChange() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "SELF_PRESENCE_STORE_UPDATE", status: SelfPresenceStore.getStatus(), activities: SelfPresenceStore.getActivities(true), hiddenActivities: SelfPresenceStore.getHiddenActivities() });
}
const prototype = function SelfPresenceStoreManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.stores = new Map().set(SelfPresenceStore, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default prototype1;
