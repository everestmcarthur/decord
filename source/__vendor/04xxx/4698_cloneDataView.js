// Module ID: 4698
// Function ID: 4699
// Name: cloneDataView
// Dependencies: [4697]

// Module 4698 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4697 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
