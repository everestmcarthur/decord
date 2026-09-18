// Module ID: 13393
// Function ID: 13394
// Name: BuyNitroPurchaseButtonLegalDisclaimer
// Dependencies: [19, 1074, 21, 4560, 576, 1114, 1115, 4218, 2024, 4556, 2]
// Exports: default

// Module 13393 (BuyNitroPurchaseButtonLegalDisclaimer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import noop from "module_19" /* 19 */;

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const Constants = fn(1074);
({ HelpdeskArticles: c3, MarketingURLs: closure_4 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj2 = { disclaimer: { marginTop: nativeDefault.space.PX_12, textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonLegalDisclaimer.tsx");

export default function BuyNitroPurchaseButtonLegalDisclaimer(arg0) {
  ({ item, ctaText } = arg0);
  ({ isTrial, isDiscounted } = arg0);
  let interval;
  if (item != null) {
    interval = item.interval;
  }
  if (null == interval) {
    return null;
  } else {
    const intl = util.intl;
    const format = intl.format;
    if (!isTrial) {
      if (isDiscounted) {
        const obj = { buttonText: ctaText, interval: PremiumUtilsDefault.formatInterval(item.interval), cancelSubscriptionArticle: null, paidServiceTermsArticle: null };
        obj.cancelSubscriptionArticle = HelpdeskUtilsDefault.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
        obj.paidServiceTermsArticle = HelpdeskUtilsDefault.getArticleURL(constants.PAID_TERMS);
        let formatResult = format(tmp3(1114).t["3uC7vj"], obj);
        let tmp10 = tmp3;
      } else {
        const tmp3Result = tmp3(1115);
        const t = tmp3(1114).t;
        const obj2 = { paidURL: constants2.PAID_TERMS, interval: null, ctaText: null };
        const isAndroidResult = tmp3(1115).isAndroid();
        const tmp6 = tmp3(1115).isAndroid() ? t.COObWR : t["7wpqfj"];
        obj2.interval = tmp3(4218).getIntervalStringAsNoun(item.interval);
        obj2.ctaText = ctaText;
        formatResult = format(tmp6, obj2);
        tmp10 = tmp3;
        const tmp3Result4 = tmp3(4218);
      }
      const obj3 = { style: tmp.disclaimer, variant: "text-xxs/medium", children: formatResult };
      jsx(tmp10(4556).Text, { style: tmp.disclaimer, variant: "text-xxs/medium", children: formatResult });
    }
    const tmp3Result5 = PlatformUtils;
    tmp3(1114).t;
    const isAndroidResult1 = PlatformUtils.isAndroid();
    const t1 = { paidURL: constants2.PAID_TERMS, interval: null, cancelURL: null };
    const tmp14 = PlatformUtils.isAndroid() ? t1.tINI9V : t1.ZWXtAj;
    t1.interval = PremiumUtils.getIntervalStringAsNoun(item.interval);
    const tmp3Result6 = PremiumUtils;
    item = HelpdeskUtilsDefault.getArticleURL(constants.PREMIUM_DETAILS_CANCEL_SUB);
    t1.cancelURL = item;
    format(tmp14, t1);
  }
};
