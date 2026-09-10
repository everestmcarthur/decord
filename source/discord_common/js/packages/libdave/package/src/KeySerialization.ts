// Module ID: 9180
// Function ID: 9181
// Name: KeySerialization
// Dependencies: [9181, 2]
// Exports: serializeKey

// Module 9180 (KeySerialization)
import _modDef9181 from "module_9181" /* 9181 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9181.fromByteArray(uint8Array);
};
