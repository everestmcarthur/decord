// Module ID: 11480
// Function ID: 11481
// Name: GiftBoxAnimation
// Dependencies: [19, 4566, 1373, 21, 504, 4759, 11481, 11482, 11483, 10866, 10875, 10872, 10869, 10878, 10881, 10884, 10887, 5543, 2]
// Exports: default

// Module 11480 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5543 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;

const require = globalThis.__r;

const _mod4759 = tmp(4759);
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
    const match = _mod4759.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872")).with(PremiumGiftStyles.CAKE, () => require("module_10869"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872")).with(PremiumGiftStyles.CAKE, () => require("module_10869")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10878"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872")).with(PremiumGiftStyles.CAKE, () => require("module_10869")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10878")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10881"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872")).with(PremiumGiftStyles.CAKE, () => require("module_10869")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10878")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10881")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10884"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872")).with(PremiumGiftStyles.CAKE, () => require("module_10869")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10878")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10881")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10884")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10887"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872")).with(PremiumGiftStyles.CAKE, () => require("module_10869")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10878")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10881")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10884")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10887")).otherwise(() => require("module_10866")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11481")).with(PremiumGiftStyles.BOX, () => require("module_11482")).with(PremiumGiftStyles.CUP, () => require("module_11483")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10866")).with(PremiumGiftStyles.COFFEE, () => require("module_10875")).with(PremiumGiftStyles.CHEST, () => require("module_10872")).with(PremiumGiftStyles.CAKE, () => require("module_10869")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10878")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10881")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10884")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10887")).otherwise(() => require("module_10866")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};
