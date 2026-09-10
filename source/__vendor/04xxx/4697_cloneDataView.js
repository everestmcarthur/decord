// Module ID: 4697
// Function ID: 4698
// Name: cloneDataView
// Dependencies: [4696]

// Module 4697 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4696 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
