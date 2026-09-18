// Module ID: 1597
// Function ID: 1598
// Dependencies: [19, 1559]
// Exports: useDeepStableValue

// Module 1597
import equalDefault from "equal" /* 1559 */;
import noop from "module_19" /* 19 */;


export const useDeepStableValue = function useDeepStableValue(current) {
  const ref = noop.useRef(current);
  if (!equalDefault(ref.current, current)) {
    ref.current = current;
  }
  return ref.current;
};
