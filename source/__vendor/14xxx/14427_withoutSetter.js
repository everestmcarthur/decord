// Module ID: 14427
// Function ID: 14428
// Name: withoutSetter
// Dependencies: [14428, 14431, 14413, 14435, 14436, 14432]

// Module 14427 (withoutSetter)
import _mod14413 from "module_14413" /* 14413 */;
import _mod14428 from "module_14428" /* 14428 */;
import _mod14435 from "module_14435" /* 14435 */;
import _mod14436 from "module_14436" /* 14436 */;
import prop from "module_14431" /* 14431 */;

let closure_2 = _mod14428("wks");
let _Symbol = _mod14413.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14413.Symbol;
  const tmp2 = _Symbol.for || _mod14413.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14413.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14435;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14436(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14432)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14436);
    }
    _Symbol = tmp(14413).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
