// Module ID: 4898
// Function ID: 4899
// Dependencies: [4899, 1283, 4900, 4901]

// Module 4898
import _mod4899 from "module_4899" /* 4899 */;
import _mod4900 from "module_4900" /* 4900 */;
import _mod4901 from "module_4901" /* 4901 */;

const _mod1283 = tmp(1283);
if (_mod4899) {
  function setProto(arg0, arg1) {
    if (_mod4899(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4900;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4901) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4901(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
