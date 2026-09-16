// Module ID: 7009
// Function ID: 7010
// Dependencies: [19]
// Exports: useUnmountFlag

// Module 7009
import noop from "module_19" /* 19 */;

({ useRef: closure_0, useLayoutEffect: closure_1 } = noop);

export const useUnmountFlag = () => {
  const tmp = React(false);
  closure_0 = tmp;
  framebus(() => {
    closure_0.current = false;
    return () => {
      closure_1_0.current = true;
    };
  }, []);
  return tmp;
};
