// Module ID: 14260
// Function ID: 14261
// Dependencies: [14253]

// Module 14260
import _mod14253 from "module_14253" /* 14253 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14253(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
