// Module ID: 9217
// Function ID: 9218
// Name: KeySerialization
// Dependencies: [9218, 2]
// Exports: serializeKey

// Module 9217 (KeySerialization)
import _modDef9218 from "module_9218" /* 9218 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9218.fromByteArray(uint8Array);
};
