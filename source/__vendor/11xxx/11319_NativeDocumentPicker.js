// Module ID: 11319
// Function ID: 11320
// Name: NativeDocumentPicker
// Dependencies: [11320]
// Exports: isKnownType

// Module 11319 (NativeDocumentPicker)
import _mod11320 from "module_11320" /* 11320 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11320.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
