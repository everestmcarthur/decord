// Module ID: 12320
// Function ID: 12321
// Name: useAnimationDelayedAutoFocus
// Dependencies: [19, 12313, 2]
// Exports: useAnimationDelayedAutoFocus

// Module 12320 (useAnimationDelayedAutoFocus)
import useAwaitAnimationComplete from "useAwaitAnimationComplete" /* 12313 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAnimationDelayedAutoFocus.tsx");

export const useAnimationDelayedAutoFocus = function useAnimationDelayedAutoFocus(autoFocus, onPress) {
  closure_0 = autoFocus;
  closure_1 = onPress;
  const awaitAnimationCompletion = useAwaitAnimationComplete.useAwaitAnimationCompletion();
  noop.useRef(false);
  const items = [autoFocus, onPress, awaitAnimationCompletion];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      awaitAnimationCompletion(() => {
        onPress();
      });
    }
    ref.current = true;
  }, items);
};
