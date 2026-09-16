// Module ID: 4560
// Function ID: 4561
// Name: ref
// Dependencies: [19, 4561]

// Module 4560 (ref)
import noop from "module_19" /* 19 */;
import shallowEqual_mod from "shallowEqual" /* 4561 */;

let shallowEqual = shallowEqual_mod;
if (shallowEqual) {
  if (typeof shallowEqual === "object") {
    if ("default" in shallowEqual) {
      shallowEqual = shallowEqual.default;
    }
  }
}
let closure_2 = {};

export default (current, arg1) => {
  const ref = noop.useRef(closure_2);
  current = ref.current;
  const effect = noop.useEffect(() => {
    ref.current = current;
  });
  return current;
};
