// Module ID: 11321
// Function ID: 11322
// Name: NativeDocumentPicker
// Dependencies: [11322]
// Exports: isKnownType

// Module 11321 (NativeDocumentPicker)
import _mod11322 from "module_11322" /* 11322 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11322.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
