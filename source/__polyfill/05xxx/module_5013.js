// Module ID: 5013
// Function ID: 5014
// Dependencies: [5014, 1282, 5015, 5016]

// Module 5013
import _mod5014 from "module_5014" /* 5014 */;
import _mod5015 from "module_5015" /* 5015 */;
import _mod5016 from "module_5016" /* 5016 */;

const _mod1282 = tmp(1282);
if (_mod5014) {
  function setProto(arg0, arg1) {
    if (_mod5014(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5015;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5016) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5016(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
