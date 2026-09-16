// Module ID: 7144
// Function ID: 7145
// Dependencies: [19, 7117]
// Exports: useGestureHandlerRef

// Module 7144
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 7117 */;
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
