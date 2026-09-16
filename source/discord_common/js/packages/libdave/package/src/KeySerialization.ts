// Module ID: 9291
// Function ID: 9292
// Name: KeySerialization
// Dependencies: [9292, 2]
// Exports: serializeKey

// Module 9291 (KeySerialization)
import _modDef9292 from "module_9292" /* 9292 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9292.fromByteArray(uint8Array);
};
