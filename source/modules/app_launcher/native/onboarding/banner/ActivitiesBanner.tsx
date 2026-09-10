// Module ID: 12119
// Function ID: 12120
// Name: ActivitiesBanner
// Dependencies: [32, 19, 21, 12108, 12120, 12131, 1114, 2]
// Exports: default

// Module 12119 (ActivitiesBanner)
import useActivityApplications from "useActivityApplications" /* 12108 */;
import BannerBaseDefault from "BannerBase" /* 12131 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  const obj2 = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = useActivityApplications.useActivityApplications({ guildId: context.context.channel.guild_id, fetchesShelf: false });
  let tmp6Result = null;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      const obj3 = { image: tmp8, text: null };
      const intl = tmp(1114).intl;
      const obj4 = { activityName: tmp4.name };
      obj3.text = intl.formatToPlainString(tmp(1114).t.zHMWuV, obj4);
      tmp6Result = jsx(BannerBaseDefault, { image: tmp8, text: null });
      const tmp7Result = BannerBaseDefault;
    }
  }
  return tmp6Result;
};
