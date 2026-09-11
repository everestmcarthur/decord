// Module ID: 14068
// Function ID: 14069
// Dependencies: [14069]

// Module 14068
import _mod14069 from "module_14069" /* 14069 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14069) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14069(arg0, arg1);
      return tmp8;
    } catch (tmp10) {
      if (tmp) {
        throw tmp10;
      } else {
        return null;
      }
    }
  }
};
