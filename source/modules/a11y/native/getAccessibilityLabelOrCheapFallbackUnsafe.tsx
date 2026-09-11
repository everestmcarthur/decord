// Module ID: 8026
// Function ID: 8027
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8027, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8026 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
