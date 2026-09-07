// Module ID: 10706
// Function ID: 10707
// Name: useGiftStyles
// Dependencies: [1373, 2]
// Exports: useGiftStyles

// Module 10706 (useGiftStyles)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
