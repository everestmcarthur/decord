// Module ID: 14388
// Function ID: 14389
// Name: withoutSetter
// Dependencies: [14389, 14392, 14374, 14396, 14397, 14393]

// Module 14388 (withoutSetter)
import _mod14374 from "module_14374" /* 14374 */;
import _mod14389 from "module_14389" /* 14389 */;
import _mod14396 from "module_14396" /* 14396 */;
import _mod14397 from "module_14397" /* 14397 */;
import prop from "module_14392" /* 14392 */;

let closure_2 = _mod14389("wks");
let _Symbol = _mod14374.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14374.Symbol;
  const tmp2 = _Symbol.for || _mod14374.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14374.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14396;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14397(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14393)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14397);
    }
    _Symbol = tmp(14374).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
