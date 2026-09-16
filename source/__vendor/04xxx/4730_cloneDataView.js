// Module ID: 4730
// Function ID: 4731
// Name: cloneDataView
// Dependencies: [4729]

// Module 4730 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4729 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
