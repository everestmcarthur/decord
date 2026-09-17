// Module ID: 14435
// Function ID: 14436
// Name: withoutSetter
// Dependencies: [14436, 14439, 14421, 14443, 14444, 14440]

// Module 14435 (withoutSetter)
import _mod14421 from "module_14421" /* 14421 */;
import _mod14436 from "module_14436" /* 14436 */;
import _mod14443 from "module_14443" /* 14443 */;
import _mod14444 from "module_14444" /* 14444 */;
import prop from "module_14439" /* 14439 */;

let closure_2 = _mod14436("wks");
let _Symbol = _mod14421.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14421.Symbol;
  const tmp2 = _Symbol.for || _mod14421.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14421.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14443;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14444(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14440)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14444);
    }
    _Symbol = tmp(14421).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
