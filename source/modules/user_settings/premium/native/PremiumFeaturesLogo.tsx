// Module ID: 9475
// Function ID: 9476
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1373, 21, 9476, 7511, 5639, 4264, 2]
// Exports: default

// Module 9475 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4264 */;
import _modDef7511 from "module_7511" /* 7511 */;
import _modDef9476 from "module_9476" /* 9476 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9476;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7511;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5639);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
