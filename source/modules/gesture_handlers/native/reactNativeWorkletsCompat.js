// Module ID: 4342
// Function ID: 4343
// Name: reactNativeWorkletsCompat
// Dependencies: [4343, 2]

// Module 4342 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4343 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
