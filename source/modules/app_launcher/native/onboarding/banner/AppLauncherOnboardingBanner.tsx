// Module ID: 12178
// Function ID: 12179
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 1943, 12179, 12193, 12195, 2]
// Exports: default

// Module 12178 (AppLauncherOnboardingBanner)
import dismissible_content from "dismissible_content" /* 1943 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 12179 */;
import AppsBannerDefault from "AppsBanner" /* 12193 */;
import BotsBannerDefault from "BotsBanner" /* 12195 */;
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
