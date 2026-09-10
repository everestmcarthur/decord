// Module ID: 15075
// Function ID: 15076
// Name: BountiesModalEndedCtaButtons
// Dependencies: [21, 4574, 576, 11518, 4310, 4575, 4578, 15070, 4989, 11528, 5465, 5463, 7742, 1114, 2]
// Exports: default

// Module 15075 (BountiesModalEndedCtaButtons)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4575 */;
import timingPresets from "timingPresets" /* 4578 */;
import QuestContent from "QuestContent" /* 5463 */;
import AdCreativeType from "AdCreativeType" /* 5465 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7742 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11528 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4574 */;
import size from "module_2" /* 2 */;

({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { gap: nativeDefault.space.PX_8 } };
  return obj;
});
const __initData = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default function BountiesModalEndedCtaButtons(bounty) {
  bounty = bounty.bounty;
  let visible = bounty.visible;
  ({ sourceQuestContent: dependencyMap, showCloseButton } = bounty);
  if (showCloseButton === undefined) {
    showCloseButton = true;
  }
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_5();
  closure_3 = bounty(11518).useGetQuestImpressionId();
  let obj = bounty(11518);
  const fn = function y() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  let obj2 = bounty(4310);
  fn.__closure = { withTiming: bounty(4575).withTiming, visible, timingStandard: bounty(4578).timingStandard };
  fn.__workletHash = 11417131685254;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  bounty(15070);
  if (visible) {
    const obj4 = { style: null, children: null };
    const items = [tmp.container, animatedStyle];
    obj4.style = items;
    const obj5 = {
      variant: "primary-overlay",
      text: tmp6.buttonLabel,
      size: "lg",
      disabled: flag,
      onPress() {
          const obj = QuestPlatformUtils;
          const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
          const result = obj.openAdGameLinkDirectly(obj2, { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_3(), sourceQuestContent });
        }
    };
    const items1 = [closure_3(tmp2(4989).Button, obj5), ];
    let tmp9Result = null;
    if (showCloseButton) {
      const obj6 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp2(1114).intl;
      obj6.text = intl.string(tmp2(1114).t.cpT0Cq);
      obj6.disabled = flag;
      obj6.onPress = bounty.onClose;
      tmp9Result = tmp9(tmp2(4989).Button, obj6);
    }
    items1[1] = tmp9Result;
    obj4.children = items1;
    visible = closure_4(visible(4310).View, obj4);
    tmp9 = closure_3;
  }
  return visible;
};
