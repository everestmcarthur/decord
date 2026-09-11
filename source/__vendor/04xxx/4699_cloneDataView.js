// Module ID: 4699
// Function ID: 4700
// Name: cloneDataView
// Dependencies: [4698]

// Module 4699 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4698 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
