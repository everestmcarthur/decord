// Module ID: 8067
// Function ID: 8068
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8068, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8067 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
