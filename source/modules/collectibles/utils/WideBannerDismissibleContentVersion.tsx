// Module ID: 14102
// Function ID: 14103
// Name: WideBannerDismissibleContentVersion
// Dependencies: [7699, 1076, 7686, 2]
// Exports: getWideBannerDismissibleContentVersion

// Module 14102 (WideBannerDismissibleContentVersion)
import ShopBlockType from "ShopBlockType" /* 7686 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7699 */;

require = fn;
const CollectibleShopTab = fn(1076).CollectibleShopTab;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/utils/WideBannerDismissibleContentVersion.tsx");

export const getWideBannerDismissibleContentVersion = function getWideBannerDismissibleContentVersion() {
  const items = [, , ];
  ({ HOME: arr[0], ORBS: arr[1], CATALOG: arr[2] } = CollectibleShopTab);
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let shopBlocks = CollectiblesShopHomeStore.getShopBlocks(tmp);
    let found = shopBlocks.find((type) => type.type === ShopBlockType.ShopBlockType.WIDE_BANNER);
    let prop;
    if (found != null) {
      prop = found.dismissibleContentVersion;
    }
    if (null != prop) {
      obj.return();
      return found.dismissibleContentVersion;
    }
  }
  return 0;
};
