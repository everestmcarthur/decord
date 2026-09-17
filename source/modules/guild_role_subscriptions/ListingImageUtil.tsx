// Module ID: 17997
// Function ID: 17998
// Name: ListingImageUtil
// Dependencies: [4882, 2]
// Exports: getSource

// Module 17997 (ListingImageUtil)
import StoreUtils from "StoreUtils" /* 4882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj2 = { uri: "" };
  } else {
    let str = StoreUtils.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj2 = { uri: str };
  }
  return obj2;
};
