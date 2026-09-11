// Module ID: 4698
// Function ID: 4699
// Name: cloneArrayBuffer
// Dependencies: [652]

// Module 4698 (cloneArrayBuffer)
import _mod652 from "module_652" /* 652 */;


export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new _mod652(constructor);
  const result = obj.set(new _mod652(byteLength));
  return constructor;
};
