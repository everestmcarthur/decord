// Module ID: 4897
// Function ID: 4898
// Dependencies: [4898, 1283, 4899, 4900]

// Module 4897
import _mod4898 from "module_4898" /* 4898 */;
import _mod4899 from "module_4899" /* 4899 */;
import _mod4900 from "module_4900" /* 4900 */;

const _mod1283 = tmp(1283);
if (_mod4898) {
  function setProto(arg0, arg1) {
    if (_mod4898(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1283("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4899;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4900) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4900(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
