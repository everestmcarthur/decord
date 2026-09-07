// Module ID: 11230
// Function ID: 11231
// Name: isKnownType
// Dependencies: [11231]

// Module 11230 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 11231 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
