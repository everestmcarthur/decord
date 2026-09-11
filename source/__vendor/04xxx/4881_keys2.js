// Module ID: 4881
// Function ID: 4882
// Name: keys2
// Dependencies: [4882, 4883]

// Module 4881 (keys2)
import _mod4882 from "module_4882" /* 4882 */;
import _mod4883 from "module_4883" /* 4883 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod4882;
}
keys = Object.keys;
keys2.shim = function shimObjectKeys() {
  if (Object.keys) {
    if (!(() => {
      keys = Object.keys(arguments);
      let tmp = keys;
      if (keys) {
        tmp = keys.length === arguments.length;
      }
      return tmp;
    })(1, 2)) {
      const _Object2 = Object;
      Object.keys = function keys(arg0) {
        if (_mod4883(arg0)) {
          const call = slice.call;
          tmp(typeof call === "unknown" ? slice() : call(arg0));
        } else {
          return tmp(arg0);
        }
      };
    }
  } else {
    const _Object = Object;
    Object.keys = keys2;
  }
  return Object.keys || keys2;
};

export default keys2;
