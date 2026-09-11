// Module ID: 11544
// Function ID: 11545
// Name: GiftBoxAnimation
// Dependencies: [19, 4599, 1373, 21, 504, 4792, 11545, 11546, 11547, 10925, 10934, 10931, 10928, 10937, 10940, 10943, 10946, 5581, 2]
// Exports: default

// Module 11544 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5581 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;

const require = globalThis.__r;

const _mod4792 = tmp(4792);
require = fn;
const PremiumGiftStyles = fn(1373).PremiumGiftStyles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const match = _mod4792.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931")).with(PremiumGiftStyles.CAKE, () => require("module_10928"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931")).with(PremiumGiftStyles.CAKE, () => require("module_10928")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10937"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931")).with(PremiumGiftStyles.CAKE, () => require("module_10928")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10937")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10940"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931")).with(PremiumGiftStyles.CAKE, () => require("module_10928")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10937")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10940")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10943"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931")).with(PremiumGiftStyles.CAKE, () => require("module_10928")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10937")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10940")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10943")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10946"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931")).with(PremiumGiftStyles.CAKE, () => require("module_10928")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10937")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10940")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10943")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10946")).otherwise(() => require("module_10925")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11545")).with(PremiumGiftStyles.BOX, () => require("module_11546")).with(PremiumGiftStyles.CUP, () => require("module_11547")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10925")).with(PremiumGiftStyles.COFFEE, () => require("module_10934")).with(PremiumGiftStyles.CHEST, () => require("module_10931")).with(PremiumGiftStyles.CAKE, () => require("module_10928")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10937")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10940")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10943")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10946")).otherwise(() => require("module_10925")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
