// Module ID: 12551
// Function ID: 12552
// Name: ChatInputGuardGuildMemberVerification
// Dependencies: [19, 17, 4599, 12057, 1074, 21, 4607, 5597, 4431, 12552, 1114, 4787, 5579, 12553, 5732, 5621, 504, 12543, 5581, 12554, 2]

// Module 12551 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4787 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5579 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5621 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12543 */;
import _modDef12552 from "module_12552" /* 12552 */;
import _modDef12553 from "module_12553" /* 12553 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;

const LottieAnimationViewDefault = tmp14(5581);
require = fn;
const Image = fn(17).Image;
const TextAreaCta = fn(12057).TextAreaCta;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_8 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  const currentUserGuildJoinRequest = guildId(5597).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4431).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef12552;
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t.lk30cY);
    let fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert({ guildId, canWithdraw: false });
    };
  } else if (tmp2(4431).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef12553;
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t["5iLvSx"]);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
      const obj4 = { guildId, subtitleText: null };
      const intl = util.intl;
      obj4.subtitleText = intl.string(util.t["13tjTU"]);
      const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj4);
    };
    const tmp7 = jsx(tmp2(5732).XSmallIcon, {});
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.rEBKvg);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
      const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
    };
  }
  let obj = guildId(5597);
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2Result = guildId(504);
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    let tmp13Result = tmp13(Image, obj2);
  } else {
    const obj3 = { style: tmp.lottieAnimation, source: tmp2(12554), autoPlay: !stateFromStores };
    tmp13Result = tmp13(LottieAnimationViewDefault, obj3);
    const tmp14Result = LottieAnimationViewDefault;
  }
  let obj4 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1114).intl;
  obj4.actionLabel = intl4.string(guildId(1114).t["r8/DT+"]);
  obj4.actionOnPress = fn;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});
