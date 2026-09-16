// Module ID: 4373
// Function ID: 4374
// Name: reactNativeWorkletsCompat
// Dependencies: [4374, 2]

// Module 4373 (reactNativeWorkletsCompat)
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gesture_handlers/native/reactNativeWorkletsCompat.js");

export default {
  scheduleOnUI(fn) {
    const substr = [...arguments].slice();
    return ReanimatedRexport.runOnUI(fn)(...substr);
  }
};
