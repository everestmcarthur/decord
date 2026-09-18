// Module ID: 4815
// Function ID: 4816
// Name: cloneTypedArray
// Dependencies: [4813]

// Module 4815 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4813 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
