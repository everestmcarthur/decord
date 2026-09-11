// Module ID: 9238
// Function ID: 9239
// Name: KeySerialization
// Dependencies: [9239, 2]
// Exports: serializeKey

// Module 9238 (KeySerialization)
import _modDef9239 from "module_9239" /* 9239 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9239.fromByteArray(uint8Array);
};
