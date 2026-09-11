// Module ID: 16593
// Function ID: 16594
// Name: AppFreezer
// Dependencies: [19, 8378, 21, 5641, 4982, 2]
// Exports: default

// Module 16593 (AppFreezer)
import Suspender from "Suspender" /* 4982 */;
import NativeViewDefault from "NativeView" /* 5641 */;
import noop from "module_19" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 8378 */;

require = fn;
const jsx = fn(21).jsx;
const NativeView = jsx(NativeViewDefault, { style: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default function AppFreezer(children) {
  let flag = children.manualFreeze;
  if (flag === undefined) {
    flag = false;
  }
  let placeholder = children.placeholder;
  if (placeholder === undefined) {
    placeholder = NativeView;
  }
  let lockKeys = children.lockKeys;
  let freeze = AppFreezeStore((lockKeys) => {
    lockKeys = lockKeys.lockKeys;
    if (null != lockKeys) {
      let someResult = lockKeys.some((item) => lockKeys.has(item));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  });
  if (!freeze) {
    freeze = flag;
  }
  return jsx(Suspender.Freeze, { freeze, placeholder, children: children.children });
};
