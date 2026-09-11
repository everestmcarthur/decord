// Module ID: 4484
// Function ID: 4485
// Name: PortalHost
// Dependencies: [19, 21, 4485, 4481]

// Module 4484 (PortalHost)
import _mod4481 from "module_4481" /* 4481 */;
import _mod4485 from "module_4485" /* 4485 */;
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
  const portalState = _mod4485.usePortalState(name);
  const portal = _mod4481.usePortal(name);
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
