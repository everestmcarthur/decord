// Module ID: 7034
// Function ID: 7035
// Dependencies: [19, 7007]
// Exports: useGestureHandlerRef

// Module 7034
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 7007 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = noop.useContext(GestureHandlerRefContext.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
