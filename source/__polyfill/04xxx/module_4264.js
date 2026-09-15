// Module ID: 4264
// Function ID: 4265
// Dependencies: [19, 4263]
// Exports: useShallow

// Module 4264
import noop from "module_19" /* 19 */;


export const useShallow = function useShallow(arg0) {
  closure_0 = arg0;
  noop.useRef(undefined);
  return (arg0) => {
    let current = closure_0(arg0);
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      tmp.current = current;
    }
    return current;
  };
};
