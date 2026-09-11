// Module ID: 9240
// Function ID: 9241
// Name: KeySerialization
// Dependencies: [9241, 2]
// Exports: serializeKey

// Module 9240 (KeySerialization)
import _modDef9241 from "module_9241" /* 9241 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9241.fromByteArray(uint8Array);
};
