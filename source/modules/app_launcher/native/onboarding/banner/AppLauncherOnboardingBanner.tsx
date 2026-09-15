// Module ID: 12182
// Function ID: 12183
// Name: AppLauncherOnboardingBanner
// Dependencies: [19, 21, 1944, 12183, 12197, 12199, 2]
// Exports: default

// Module 12182 (AppLauncherOnboardingBanner)
import dismissible_content from "dismissible_content" /* 1944 */;
import ActivitiesBannerDefault from "ActivitiesBanner" /* 12183 */;
import AppsBannerDefault from "AppsBanner" /* 12197 */;
import BotsBannerDefault from "BotsBanner" /* 12199 */;
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
  } else if (tmp(1944).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER === visibleContent) {
    return jsx(AppsBannerDefault, {});
  } else if (tmp(1944).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER === visibleContent) {
    const obj = { context };
    return jsx(BotsBannerDefault, { context });
  } else {
    return null;
  }
};
