// Module ID: 15872
// Function ID: 15873
// Name: CollectiblesShopScreen
// Dependencies: [19, 1076, 21, 7067, 15873, 7458, 15874, 7255, 2]
// Exports: default

// Module 15872 (CollectiblesShopScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7067 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 7458 */;
import useShopOrientationLock from "useShopOrientationLock" /* 15873 */;
import noop from "module_19" /* 19 */;

const CollectiblesShopV2 = tmp(15874);
require = fn;
const constants = fn(1076).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  const settingNavigationRoute = useSettingNavigationRoute.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock.useShopOrientationLock();
  const giftCardMobileConsumptionHalfsheet = useGiftCardMobileConsumptionHalfsheet.useGiftCardMobileConsumptionHalfsheet();
  const params = settingNavigationRoute.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants.FEATURED_PAGE;
  }
  const params2 = settingNavigationRoute.params;
  let analyticsSource;
  if (params2 != null) {
    analyticsSource = params2.analyticsSource;
  }
  if (analyticsSource == null) {
    analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
  }
  const obj4 = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj4.onNavigateAway = onNavigateAway;
  return jsx(CollectiblesShopV2.CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};
