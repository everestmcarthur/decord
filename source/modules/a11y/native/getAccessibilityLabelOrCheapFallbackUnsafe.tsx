// Module ID: 8025
// Function ID: 8026
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8026, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8025 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
