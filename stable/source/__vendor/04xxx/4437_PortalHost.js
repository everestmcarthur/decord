// Module ID: 4437
// Function ID: 4438
// Name: PortalHost
// Dependencies: [19, 21, 4438, 4434]

// Module 4437 (PortalHost)
import _mod4434 from "module_4434" /* 4434 */;
import _mod4438 from "module_4438" /* 4438 */;
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
  const portalState = _mod4438.usePortalState(name);
  const portal = _mod4434.usePortal(name);
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
