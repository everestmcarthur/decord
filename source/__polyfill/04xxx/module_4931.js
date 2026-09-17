// Module ID: 4931
// Function ID: 4932
// Dependencies: [4932, 1282, 4933, 4934]

// Module 4931
import _mod4932 from "module_4932" /* 4932 */;
import _mod4933 from "module_4933" /* 4933 */;
import _mod4934 from "module_4934" /* 4934 */;

const _mod1282 = tmp(1282);
if (_mod4932) {
  function setProto(arg0, arg1) {
    if (_mod4932(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4933;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4934) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4934(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
