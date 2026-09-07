// Module ID: 14355
// Function ID: 14356
// Name: getOwnPropertyDescriptor
// Dependencies: [14303, 14304]

// Module 14355 (getOwnPropertyDescriptor)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14303 */;
import _mod14304 from "module_14304" /* 14304 */;


export default getOwnPropertyDescriptor && _mod14304(() => 42 !== Object.defineProperty(() => {

}, "prototype", { value: 42, writable: false }).prototype);
