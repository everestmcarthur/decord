// Module ID: 14585
// Function ID: 14586
// Name: withoutSetter
// Dependencies: [14586, 14589, 14571, 14593, 14594, 14590]

// Module 14585 (withoutSetter)
import _mod14571 from "module_14571" /* 14571 */;
import _mod14586 from "module_14586" /* 14586 */;
import _mod14593 from "module_14593" /* 14593 */;
import _mod14594 from "module_14594" /* 14594 */;
import prop from "module_14589" /* 14589 */;

let closure_2 = _mod14586("wks");
let _Symbol = _mod14571.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14571.Symbol;
  const tmp2 = _Symbol.for || _mod14571.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14571.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14593;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14594(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14590)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14594);
    }
    _Symbol = tmp(14571).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
