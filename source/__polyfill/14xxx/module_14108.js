// Module ID: 14108
// Function ID: 14109
// Dependencies: [14091]

// Module 14108
import _mod14091 from "module_14091" /* 14091 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14091(arg0, arg2);
  const tmp = new _mod14091(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
