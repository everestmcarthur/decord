// Module ID: 4733
// Function ID: 4734
// Name: cloneTypedArray
// Dependencies: [4731]

// Module 4733 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4731 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
