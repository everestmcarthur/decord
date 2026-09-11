// Module ID: 14364
// Function ID: 14365
// Name: withoutSetter
// Dependencies: [14365, 14368, 14350, 14372, 14373, 14369]

// Module 14364 (withoutSetter)
import _mod14350 from "module_14350" /* 14350 */;
import _mod14365 from "module_14365" /* 14365 */;
import _mod14372 from "module_14372" /* 14372 */;
import _mod14373 from "module_14373" /* 14373 */;
import prop from "module_14368" /* 14368 */;

let closure_2 = _mod14365("wks");
let _Symbol = _mod14350.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14350.Symbol;
  const tmp2 = _Symbol.for || _mod14350.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14350.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14372;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14373(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14369)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14373);
    }
    _Symbol = tmp(14350).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
