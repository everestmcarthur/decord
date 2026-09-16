// Module ID: 14556
// Function ID: 14557
// Name: BackPressManager
// Dependencies: [17, 8802, 4506, 1610, 1482, 1899, 1364, 2]

// Module 14556 (BackPressManager)
import _mod17 from "module_17" /* 17 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import useKeyboardType from "useKeyboardType" /* 4506 */;
import ContextMenuState from "ContextMenuState" /* 8802 */;
import LifecycleManager from "LifecycleManager" /* 1899 */;
import size from "module_2" /* 2 */;

function handleBackPress() {
  ContextMenuState.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    const obj3 = { type: tmp(1610).KeyboardTypes.SYSTEM };
    tmp(1482).setKeyboardType(obj3);
    flag = true;
    const tmpResult = tmp(1482);
  }
  return flag;
}
_mod17.BackHandler;
class BackPressManager extends tmp2 {
}
const prototype = BackPressManager.prototype;
prototype["_initialize"] = function _initialize() {
  if (obj.isAndroid()) {
    const self = this;
    const result = this._initializeGlobalBackPressListener();
  }
};
prototype["_initializeGlobalBackPressListener"] = function _initializeGlobalBackPressListener() {
  this._backPressEventSubscription = BackHandler.addEventListener("hardwareBackPress", handleBackPress);
};
prototype["_terminate"] = function _terminate() {
  const _backPressEventSubscription = this._backPressEventSubscription;
  if (_backPressEventSubscription != null) {
    _backPressEventSubscription.remove();
  }
};
const backPressManager = new BackPressManager();
let result = size.fileFinishedImporting("modules/routing/native/BackPressManager.tsx");

export default backPressManager;
