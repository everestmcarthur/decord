// Module ID: 4698
// Function ID: 4699
// Name: cloneTypedArray
// Dependencies: [4696]

// Module 4698 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4696 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
