// Module ID: 14105
// Function ID: 14106
// Dependencies: [14098]

// Module 14105
import _mod14098 from "module_14098" /* 14098 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14098(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
