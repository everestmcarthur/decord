// Module ID: 1576
// Function ID: 1577
// Dependencies: [19, 1509]
// Exports: useNavigationContainerRef

// Module 1576
import NOT_INITIALIZED_ERROR from "NOT_INITIALIZED_ERROR" /* 1509 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useNavigationContainerRef = function useNavigationContainerRef() {
  const ref = noop.useRef(null);
  if (null == ref.current) {
    ref.current = NOT_INITIALIZED_ERROR.createNavigationContainerRef();
  }
  return ref.current;
};
