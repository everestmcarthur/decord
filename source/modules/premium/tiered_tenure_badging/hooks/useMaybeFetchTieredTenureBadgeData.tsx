// Module ID: 13559
// Function ID: 13560
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1372, 1374, 504, 11309, 5077, 8316, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 13559 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5077 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8316 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

const require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export const useMaybeFetchTieredTenureBadgeData = function useMaybeFetchTieredTenureBadgeData() {
  const items = [UserStore];
  _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("initialize");
  importDefault = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  useMountEffectDefault(() => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (tmp3) {
      maybeFetchUserProfileDefault(tmp.id);
    }
  });
};
