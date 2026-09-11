// Module ID: 4880
// Function ID: 4881
// Name: keys2
// Dependencies: [4881, 4882]

// Module 4880 (keys2)
import _mod4881 from "module_4881" /* 4881 */;
import _mod4882 from "module_4882" /* 4882 */;

if (keys) {
  let keys2 = function keys(arg0) {
    return keys(arg0);
  };
} else {
  keys2 = _mod4881;
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
        if (_mod4882(arg0)) {
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
