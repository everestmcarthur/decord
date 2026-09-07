// Module ID: 11163
// Function ID: 11164
// Name: useMobileTenureBadgeImages
// Dependencies: [1373, 11164, 11165, 11166, 11167, 11168, 11169, 11170, 11171, 11172, 11173, 11174, 11175, 11176, 11177, 11178, 11179, 11180, 11181, 11182, 11183, 11184, 11185, 11186, 11187, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11163 (useMobileTenureBadgeImages)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import registerAssetDefault from "registerAsset" /* 11164 */;
import metadataDefault from "metadata" /* 11165 */;
import metadataDefault2 from "metadata" /* 11166 */;
import registerAssetDefault2 from "registerAsset" /* 11167 */;
import metadataDefault3 from "metadata" /* 11168 */;
import metadataDefault4 from "metadata" /* 11169 */;
import registerAssetDefault3 from "registerAsset" /* 11170 */;
import metadataDefault5 from "metadata" /* 11171 */;
import metadataDefault6 from "metadata" /* 11172 */;
import registerAssetDefault4 from "registerAsset" /* 11173 */;
import metadataDefault7 from "metadata" /* 11174 */;
import metadataDefault8 from "metadata" /* 11175 */;
import registerAssetDefault5 from "registerAsset" /* 11176 */;
import metadataDefault9 from "metadata" /* 11177 */;
import metadataDefault10 from "metadata" /* 11178 */;
import registerAssetDefault6 from "registerAsset" /* 11179 */;
import metadataDefault11 from "metadata" /* 11180 */;
import metadataDefault12 from "metadata" /* 11181 */;
import registerAssetDefault7 from "registerAsset" /* 11182 */;
import metadataDefault13 from "metadata" /* 11183 */;
import metadataDefault14 from "metadata" /* 11184 */;
import registerAssetDefault8 from "registerAsset" /* 11185 */;
import metadataDefault15 from "metadata" /* 11186 */;
import metadataDefault16 from "metadata" /* 11187 */;

const TieredTenureBadge = GuildFeatures.TieredTenureBadge;
let obj = {};
obj = { small: registerAssetDefault, medium: metadataDefault, large: metadataDefault2 };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: registerAssetDefault2, medium: metadataDefault3, large: metadataDefault4 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
const obj1 = { small: registerAssetDefault3, medium: metadataDefault5, large: metadataDefault6 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
const obj2 = { small: registerAssetDefault4, medium: metadataDefault7, large: metadataDefault8 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
const obj3 = { small: registerAssetDefault5, medium: metadataDefault9, large: metadataDefault10 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
const obj4 = { small: registerAssetDefault6, medium: metadataDefault11, large: metadataDefault12 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
const obj5 = { small: registerAssetDefault7, medium: metadataDefault13, large: metadataDefault14 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const obj6 = { small: registerAssetDefault8, medium: metadataDefault15, large: metadataDefault16 };
const result = set.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export const useMobileTenureBadgeImages = function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
};
export const getMobileTenureBadgeImages = function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
};
