// Module ID: 14109
// Function ID: 14110
// Dependencies: [14098]

// Module 14109
import _mod14098 from "module_14098" /* 14098 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14098(arg0, arg2);
  return obj.intersects(new _mod14098(arg1, arg2), arg2);
};
