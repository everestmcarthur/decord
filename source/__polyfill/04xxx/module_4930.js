// Module ID: 4930
// Function ID: 4931
// Dependencies: [4931, 1282, 4932, 4933]

// Module 4930
import _mod4931 from "module_4931" /* 4931 */;
import _mod4932 from "module_4932" /* 4932 */;
import _mod4933 from "module_4933" /* 4933 */;

const _mod1282 = tmp(1282);
if (_mod4931) {
  function setProto(arg0, arg1) {
    if (_mod4931(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4932;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4933) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4933(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
