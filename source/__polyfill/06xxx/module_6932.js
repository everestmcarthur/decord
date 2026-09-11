// Module ID: 6932
// Function ID: 6933
// Dependencies: [6933]

// Module 6932
import _mod6933 from "module_6933" /* 6933 */;


export default function _unsupportedIterableToArray(str, arg1) {
  if (str) {
    if (typeof str === "string") {
      return _mod6933(str, arg1);
    } else {
      const toString = {}.toString;
      const call = toString.call;
      const substr = typeof call === "unknown" ? toString() : call(str).slice(8, -1);
      let name = substr;
      if (tmp3) {
        name = str.constructor.name;
      }
      if ("Map" !== name) {
        if ("Set" !== name) {
          if ("Arguments" === name) {
            let arr2 = _mod6933(str, arg1);
          } else {
            const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
          }
        }
        return arr2;
      }
      const _Array = Array;
      arr2 = Array.from(str);
      const arr = typeof call === "unknown" ? toString() : call(str);
      tmp3 = "Object" === substr && str.constructor;
    }
  }
};
