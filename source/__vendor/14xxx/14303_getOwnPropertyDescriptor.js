// Module ID: 14303
// Function ID: 14304
// Name: getOwnPropertyDescriptor
// Dependencies: [14304]

// Module 14303 (getOwnPropertyDescriptor)
import _mod14304 from "module_14304" /* 14304 */;


export default !_mod14304(() => 7 !== Object.defineProperty({}, 1, {
  get() {
    return 7;
  }
})[1]);
