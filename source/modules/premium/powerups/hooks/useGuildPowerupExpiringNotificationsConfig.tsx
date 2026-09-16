// Module ID: 12700
// Function ID: 12701
// Name: useGuildPowerupExpiringNotificationsConfig
// Dependencies: [12701, 12702, 1115, 2851, 4530, 2429, 2]
// Exports: default

// Module 12700 (useGuildPowerupExpiringNotificationsConfig)
import util from "util" /* 1115 */;
import Powerups from "Powerups" /* 4530 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 12701 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 12702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  const arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = util.intl;
      stringResult = intl.string(tmp(2851)["B3OfL/"]);
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(arr.map((title) => title.title), 0);
    if (null != stringResult) {
      const items1 = [stringResult];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, arraySpreadResult);
    const items3 = [];
    if (arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = util.intl;
      items3.push(intl2.string(tmp(2429).Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = util.intl;
      items3.push(intl3.string(tmp(2851).wiungr));
    }
    const obj2 = { shouldShow: tmp3, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj2;
  } else {
    const obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
};
