// Module ID: 11255
// Function ID: 11256
// Name: useMobileTenureBadgeImages
// Dependencies: [1373, 11256, 11257, 11258, 11259, 11260, 11261, 11262, 11263, 11264, 11265, 11266, 11267, 11268, 11269, 11270, 11271, 11272, 11273, 11274, 11275, 11276, 11277, 11278, 11279, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11255 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import _modDef11256 from "module_11256" /* 11256 */;
import _modDef11257 from "module_11257" /* 11257 */;
import _modDef11258 from "module_11258" /* 11258 */;
import _modDef11259 from "module_11259" /* 11259 */;
import _modDef11260 from "module_11260" /* 11260 */;
import _modDef11261 from "module_11261" /* 11261 */;
import _modDef11262 from "module_11262" /* 11262 */;
import _modDef11263 from "module_11263" /* 11263 */;
import _modDef11264 from "module_11264" /* 11264 */;
import _modDef11265 from "module_11265" /* 11265 */;
import _modDef11266 from "module_11266" /* 11266 */;
import _modDef11267 from "module_11267" /* 11267 */;
import _modDef11268 from "module_11268" /* 11268 */;
import _modDef11269 from "module_11269" /* 11269 */;
import _modDef11270 from "module_11270" /* 11270 */;
import _modDef11271 from "module_11271" /* 11271 */;
import _modDef11272 from "module_11272" /* 11272 */;
import _modDef11273 from "module_11273" /* 11273 */;
import _modDef11274 from "module_11274" /* 11274 */;
import _modDef11275 from "module_11275" /* 11275 */;
import _modDef11276 from "module_11276" /* 11276 */;
import _modDef11277 from "module_11277" /* 11277 */;
import _modDef11278 from "module_11278" /* 11278 */;
import _modDef11279 from "module_11279" /* 11279 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11256, medium: _modDef11257, large: _modDef11258 };
const obj2 = { small: _modDef11256, medium: _modDef11257, large: _modDef11258 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11259, medium: _modDef11260, large: _modDef11261 };
const obj3 = { small: _modDef11259, medium: _modDef11260, large: _modDef11261 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11262, medium: _modDef11263, large: _modDef11264 };
const obj4 = { small: _modDef11262, medium: _modDef11263, large: _modDef11264 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11265, medium: _modDef11266, large: _modDef11267 };
const obj5 = { small: _modDef11265, medium: _modDef11266, large: _modDef11267 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11268, medium: _modDef11269, large: _modDef11270 };
const obj6 = { small: _modDef11268, medium: _modDef11269, large: _modDef11270 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11271, medium: _modDef11272, large: _modDef11273 };
const obj7 = { small: _modDef11271, medium: _modDef11272, large: _modDef11273 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11274, medium: _modDef11275, large: _modDef11276 };
const obj8 = { small: _modDef11274, medium: _modDef11275, large: _modDef11276 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11277, medium: _modDef11278, large: _modDef11279 };
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

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
