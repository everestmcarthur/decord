// Module ID: 9525
// Function ID: 9526
// Name: PremiumFeaturesLogo
// Dependencies: [19, 1374, 21, 9526, 7547, 5673, 4295, 2]
// Exports: default

// Module 9525 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4295 */;
import _modDef7547 from "module_7547" /* 7547 */;
import _modDef9526 from "module_9526" /* 9526 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9526;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7547;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5673);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};
