// Module ID: 9153
// Function ID: 9154
// Name: serializeKey
// Dependencies: [9154, 2]
// Exports: serializeKey

// Module 9153 (serializeKey)
import set from "set" /* 2 */;
import byteLengthDefault from "byteLength" /* 9154 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};
