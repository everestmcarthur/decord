// Module ID: 11453
// Function ID: 11454
// Name: GiftBoxAnimation
// Dependencies: [19, 4552, 1373, 21, 504, 4745, 11454, 11455, 11456, 10839, 10848, 10845, 10842, 10851, 10854, 10857, 10860, 5529, 2]
// Exports: default

// Module 11453 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import t from "t" /* 4745 */;
import playDefault from "play" /* 5529 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1373 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = closure_3;
  if (null == giftStyle) {
    return null;
  } else {
    const match = t.match(giftStyle);
    const str = t;
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848)).with(PremiumGiftStyles.CHEST, () => callback(10845));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848)).with(PremiumGiftStyles.CHEST, () => callback(10845)).with(PremiumGiftStyles.CAKE, () => callback(10842));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848)).with(PremiumGiftStyles.CHEST, () => callback(10845)).with(PremiumGiftStyles.CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10851));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848)).with(PremiumGiftStyles.CHEST, () => callback(10845)).with(PremiumGiftStyles.CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10851)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10854));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848)).with(PremiumGiftStyles.CHEST, () => callback(10845)).with(PremiumGiftStyles.CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10851)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10854)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10857));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848)).with(PremiumGiftStyles.CHEST, () => callback(10845)).with(PremiumGiftStyles.CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10851)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10854)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10857)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10860));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11454)).with(PremiumGiftStyles.BOX, () => callback(11455)).with(PremiumGiftStyles.CUP, () => callback(11456)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.COFFEE, () => callback(10848)).with(PremiumGiftStyles.CHEST, () => callback(10845)).with(PremiumGiftStyles.CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10851)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10854)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10857)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10860)).otherwise(() => callback(10839));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};
