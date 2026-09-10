// Module ID: 4451
// Function ID: 4452
// Name: PortalHost
// Dependencies: [19, 21, 4452, 4448]

// Module 4451 (PortalHost)
import _mod4448 from "module_4448" /* 4448 */;
import _mod4452 from "module_4452" /* 4452 */;
import noop_mod from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

let noop = noop_mod;
const useEffect = noop.useEffect;
let noop = noop_mod;
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const memoResult = noop.memo((name) => {
  name = name.name;
  c0 = undefined;
  c1 = undefined;
  const portalState = _mod4452.usePortalState(name);
  const portal = _mod4448.usePortal(name);
  ({ registerHost: c0, deregisterHost: c1 } = portal);
  useEffect(() => {
    _undefined();
    return () => {
      closure_1_1();
    };
  }, []);
  return React4(React3, { children: portalState.map((node) => node.node) });
});
memoResult.displayName = "PortalHost";

export const PortalHost = memoResult;
