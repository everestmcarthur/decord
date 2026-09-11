// Module ID: 14100
// Function ID: 14101
// Dependencies: [14098]

// Module 14100
import _mod14098 from "module_14098" /* 14098 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new _mod14098(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
