// Module ID: 4486
// Function ID: 4487
// Dependencies: [32, 19, 21, 4487, 4483, 4482, 4484]

// Module 4486
import _mod4482 from "module_4482" /* 4482 */;
import ACTIONS from "ACTIONS" /* 4483 */;
import PortalHost from "PortalHost" /* 4484 */;
import registerHost from "registerHost" /* 4487 */;
import _slicedToArray from "module_32" /* 32 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useReducer: c3, memo } = noop);
let noop = noop_mod;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const memoResult = memo((rootHostName) => {
  let str = rootHostName.rootHostName;
  if (str === undefined) {
    str = "root";
  }
  let flag = rootHostName.shouldAddRootHost;
  if (flag === undefined) {
    flag = true;
  }
  [tmp4, tmp5] = React3(registerHost.reducer, ACTIONS.INITIAL_STATE);
  const obj = { value: tmp5, children: null };
  const obj2 = { value: tmp4, children: null };
  const items = [rootHostName.children, ];
  if (flag) {
    const obj3 = { name: str };
    flag = tmp6(PortalHost.PortalHost, obj3);
  }
  items[1] = flag;
  obj2.children = items;
  obj.children = hasOwnProperty(_mod4482.PortalStateContext.Provider, obj2);
  return React4(_mod4482.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;
