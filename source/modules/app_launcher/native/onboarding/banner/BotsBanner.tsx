// Module ID: 12207
// Function ID: 12208
// Name: BotsBanner
// Dependencies: [19, 21, 12208, 12192, 12203, 1115, 2]
// Exports: default

// Module 12207 (BotsBanner)
import BannerBaseDefault from "BannerBase" /* 12203 */;
import useBannerBots from "useBannerBots" /* 12208 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  const bannerBots = useBannerBots.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp4Result = null;
  if (null != firstBotApplication) {
    tmp4Result = null;
    if (null != secondBotApplication) {
      const obj2 = { image: tmp6, text: null };
      const intl = tmp(1115).intl;
      const obj3 = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      obj2.text = intl.formatToPlainString(tmp(1115).t["9SN0xw"], obj3);
      tmp4Result = jsx(BannerBaseDefault, { image: tmp6, text: null });
      const tmp5Result = BannerBaseDefault;
    }
  }
  return tmp4Result;
};
