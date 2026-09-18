// Module ID: 16247
// Function ID: 16248
// Name: IAPUpsellActionSheet
// Dependencies: [19, 1074, 1964, 1954, 21, 16248, 16249, 1114, 1100, 2]
// Exports: default

// Module 16247 (IAPUpsellActionSheet)
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  ({ guildId: require, markAsDismissed } = arg0);
  const obj = { imageSource: markAsDismissed(16249), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null };
  const intl = util.intl;
  obj.header = intl.string(util.t.rBw4cE);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.mKHibc);
  const intl3 = util.intl;
  obj.cta = intl3.string(util.t.RzWDqY);
  obj.onCTAPress = function onCTAPress() {
    router_utils.transitionTo(Routes.CHANNEL(closure_1_0, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  obj.markAsDismissed = markAsDismissed;
  return jsx(markAsDismissed(16248), { imageSource: markAsDismissed(16249), header: null, body: null, cta: null, onCTAPress: null, markAsDismissed: null });
};
