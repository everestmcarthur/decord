// Module ID: 12078
// Function ID: 12079
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 1943, 12079, 12093, 12095, 2]
// Exports: default

// Module 12078 (AppLauncherOnboardingBanner)
import dismissible_content from "dismissible_content" /* 1943 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 12079 */;
import AppsBannerDefault from "AppsBanner" /* 12093 */;
import BotsBannerDefault from "BotsBanner" /* 12095 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingBanner.tsx");

export default function AppLauncherOnboardingBanner(arg0) {
  ({ context, visibleContent } = arg0);
  if (dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER === visibleContent) {
    const obj2 = { context };
    return jsx(ActivitiesBannerDefault, { context });
  } else if (tmp(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBannerDefault, {});
  } else if (tmp(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    const obj = { context };
    return jsx(BotsBannerDefault, { context });
  } else {
    return null;
  }
};
