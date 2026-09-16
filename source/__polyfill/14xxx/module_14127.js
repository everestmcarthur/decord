// Module ID: 14127
// Function ID: 14128
// Dependencies: [14120]

// Module 14127
import _mod14120 from "module_14120" /* 14120 */;


export default (arg0, arg1) => {
  const tmp = _mod14120(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
