// Module ID: 4700
// Function ID: 4701
// Name: cloneTypedArray
// Dependencies: [4698]

// Module 4700 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4698 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
