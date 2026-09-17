// Module ID: 11379
// Function ID: 11380
// Name: NativeDocumentPicker
// Dependencies: [11380]
// Exports: isKnownType

// Module 11379 (NativeDocumentPicker)
import _mod11380 from "module_11380" /* 11380 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11380.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
