// Module ID: 13474
// Function ID: 13475
// Name: useScheduledForcedUpdate
// Dependencies: [19, 7440, 2]
// Exports: default

// Module 13474 (useScheduledForcedUpdate)
import areHookInputsEqual from "areHookInputsEqual" /* 7440 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useScheduledForcedUpdate.tsx");

export default function useScheduledForcedUpdate(delay) {
  delay = delay.delay;
  let flag = delay.disable;
  if (flag === undefined) {
    flag = false;
  }
  const forceUpdate = areHookInputsEqual.useForceUpdate();
  const items = [delay, flag, forceUpdate];
  const effect = noop.useEffect(() => {
    if (timeout > 0) {
      if (!flag) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          forceUpdate();
        }, tmp);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
