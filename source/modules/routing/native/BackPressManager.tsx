// Module ID: 14493
// Function ID: 14494
// Name: BackPressManager
// Dependencies: [17, 8758, 4474, 1609, 1481, 1898, 1115, 2]

// Module 14493 (BackPressManager)
import _mod17 from "module_17" /* 17 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useKeyboardType from "useKeyboardType" /* 4474 */;
import ContextMenuState from "ContextMenuState" /* 8758 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;
import size from "module_2" /* 2 */;

function handleBackPress() {
  ContextMenuState.hideContextMenu();
  const keyboardType = useKeyboardType.getKeyboardType();
  let flag = keyboardType !== KeyboardTypes.KeyboardTypes.SYSTEM;
  if (flag) {
    const obj3 = { type: tmp(1609).KeyboardTypes.SYSTEM };
    tmp(1481).setKeyboardType(obj3);
    flag = true;
    const tmpResult = tmp(1481);
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
