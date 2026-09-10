// Module ID: 4482
// Function ID: 4483
// Name: PortalHost
// Dependencies: [19, 21, 4483, 4479]

// Module 4482 (PortalHost)
import _mod4479 from "module_4479" /* 4479 */;
import _mod4483 from "module_4483" /* 4483 */;
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
  const portalState = _mod4483.usePortalState(name);
  const portal = _mod4479.usePortal(name);
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
