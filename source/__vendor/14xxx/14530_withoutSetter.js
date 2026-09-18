// Module ID: 14530
// Function ID: 14531
// Name: withoutSetter
// Dependencies: [14531, 14534, 14516, 14538, 14539, 14535]

// Module 14530 (withoutSetter)
import _mod14516 from "module_14516" /* 14516 */;
import _mod14531 from "module_14531" /* 14531 */;
import _mod14538 from "module_14538" /* 14538 */;
import _mod14539 from "module_14539" /* 14539 */;
import prop from "module_14534" /* 14534 */;

let closure_2 = _mod14531("wks");
let _Symbol = _mod14516.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14516.Symbol;
  const tmp2 = _Symbol.for || _mod14516.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14516.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14538;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14539(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14535)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14539);
    }
    _Symbol = tmp(14516).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
