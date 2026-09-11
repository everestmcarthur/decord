// Module ID: 10792
// Function ID: 10793
// Name: useGiftStyles
// Dependencies: [1373, 2]
// Exports: useGiftStyles

// Module 10792 (useGiftStyles)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import size from "module_2" /* 2 */;

const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
