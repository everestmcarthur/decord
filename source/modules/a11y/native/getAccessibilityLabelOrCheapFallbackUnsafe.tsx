// Module ID: 8087
// Function ID: 8088
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8088, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8087 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
