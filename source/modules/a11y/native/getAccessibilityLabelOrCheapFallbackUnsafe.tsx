// Module ID: 7965
// Function ID: 7966
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7966, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7965 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
