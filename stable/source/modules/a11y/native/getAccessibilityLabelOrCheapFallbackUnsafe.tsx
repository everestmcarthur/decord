// Module ID: 7952
// Function ID: 7953
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7953, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7952 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
