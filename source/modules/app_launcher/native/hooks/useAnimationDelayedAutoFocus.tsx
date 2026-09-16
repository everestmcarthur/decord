// Module ID: 12311
// Function ID: 12312
// Name: useAnimationDelayedAutoFocus
// Dependencies: [19, 12304, 2]
// Exports: useAnimationDelayedAutoFocus

// Module 12311 (useAnimationDelayedAutoFocus)
import useAwaitAnimationComplete from "useAwaitAnimationComplete" /* 12304 */;
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
