// Module ID: 8058
// Function ID: 8059
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8059, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8058 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
