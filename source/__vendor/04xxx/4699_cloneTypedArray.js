// Module ID: 4699
// Function ID: 4700
// Name: cloneTypedArray
// Dependencies: [4697]

// Module 4699 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4697 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
