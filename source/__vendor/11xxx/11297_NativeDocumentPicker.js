// Module ID: 11297
// Function ID: 11298
// Name: NativeDocumentPicker
// Dependencies: [11298]
// Exports: isKnownType

// Module 11297 (NativeDocumentPicker)
import _mod11298 from "module_11298" /* 11298 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11298.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
