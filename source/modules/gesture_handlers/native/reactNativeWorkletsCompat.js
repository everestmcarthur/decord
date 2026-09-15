// Module ID: 4375
// Function ID: 4376
// Name: reactNativeWorkletsCompat
// Dependencies: [4376, 2]

// Module 4375 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
