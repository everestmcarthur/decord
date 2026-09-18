// Module ID: 4186
// Function ID: 4187
// Dependencies: [19, 4185]
// Exports: useShallow

// Module 4186
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
