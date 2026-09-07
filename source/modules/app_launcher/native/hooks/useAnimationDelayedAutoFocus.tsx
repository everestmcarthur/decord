// Module ID: 12173
// Function ID: 12174
// Name: useAnimationDelayedAutoFocus
// Dependencies: [19, 12166, 2]
// Exports: useAnimationDelayedAutoFocus

// Module 12173 (useAnimationDelayedAutoFocus)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  const _require = autoFocus;
  dependencyMap = onPress;
  const awaitAnimationCompletion = _require(12166).useAwaitAnimationCompletion();
  closure_3 = awaitAnimationCompletion.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = awaitAnimationCompletion.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        callback();
      });
    }
    ref.current = true;
  }, items);
};
