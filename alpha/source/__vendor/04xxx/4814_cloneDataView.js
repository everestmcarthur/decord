// Module ID: 4814
// Function ID: 4815
// Name: cloneDataView
// Dependencies: [4813]

// Module 4814 (cloneDataView)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4813 */;


export default function cloneDataView(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.byteLength);
  return constructor;
};
