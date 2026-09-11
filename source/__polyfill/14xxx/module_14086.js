// Module ID: 14086
// Function ID: 14087
// Dependencies: [14069]

// Module 14086
import _mod14069 from "module_14069" /* 14069 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14069(arg0, arg2);
  const tmp = new _mod14069(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
