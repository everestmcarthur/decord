// Module ID: 8059
// Function ID: 8060
// Name: hasForLaterPremiumType
// Dependencies: [1372, 1374, 1886, 504, 2]
// Exports: default, useHasForLaterPremiumType

// Module 8059 (hasForLaterPremiumType)
import initialize from "initialize" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1886 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = UserStore.getCurrentUser();
  return PremiumTypeUtils.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumTypeUtils.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2));
};
