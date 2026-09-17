// Module ID: 14146
// Function ID: 14147
// Dependencies: [14129]

// Module 14146
import _mod14129 from "module_14129" /* 14129 */;


export default (arg0, arg1, arg2) => {
  const obj = new _mod14129(arg0, arg2);
  const tmp = new _mod14129(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
