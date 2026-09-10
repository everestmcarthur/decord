// Module ID: 5600
// Function ID: 5601
// Name: useRefValue
// Dependencies: [2]
// Exports: default

// Module 5600 (useRefValue)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useRefValue.tsx");

export default function useRefValue(current) {
  return current.current;
};
