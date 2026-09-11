// Module ID: 14366
// Function ID: 14367
// Name: withoutSetter
// Dependencies: [14367, 14370, 14352, 14374, 14375, 14371]

// Module 14366 (withoutSetter)
import _mod14352 from "module_14352" /* 14352 */;
import _mod14367 from "module_14367" /* 14367 */;
import _mod14374 from "module_14374" /* 14374 */;
import _mod14375 from "module_14375" /* 14375 */;
import prop from "module_14370" /* 14370 */;

let closure_2 = _mod14367("wks");
let _Symbol = _mod14352.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14352.Symbol;
  const tmp2 = _Symbol.for || _mod14352.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14352.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14374;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14375(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14371)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14375);
    }
    _Symbol = tmp(14352).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
