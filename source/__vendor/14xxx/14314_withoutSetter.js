// Module ID: 14314
// Function ID: 14315
// Name: withoutSetter
// Dependencies: [14315, 14318, 14300, 14322, 14323, 14319]

// Module 14314 (withoutSetter)
import _mod14300 from "module_14300" /* 14300 */;
import __core_js_shared__ from "__core-js_shared__" /* 14315 */;
import sum from "sum" /* 14322 */;
import call from "call" /* 14323 */;
import prop from "prop" /* 14318 */;

let closure_2 = __core_js_shared__("wks");
let _Symbol = _mod14300.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14300.Symbol;
  const tmp2 = _Symbol.for || _mod14300.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14300.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (call(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14319)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14323);
    }
    _Symbol = tmp(14300).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
