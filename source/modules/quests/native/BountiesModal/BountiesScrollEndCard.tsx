// Module ID: 15121
// Function ID: 15122
// Name: BountiesScrollEndCard
// Dependencies: [19, 17, 4597, 5494, 21, 4605, 576, 4606, 4609, 11593, 15119, 1114, 4341, 5037, 15122, 15124, 4601, 10250, 15086, 504, 15087, 10039, 2]
// Exports: default

// Module 15121 (BountiesScrollEndCard)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4606 */;
import timingPresets from "timingPresets" /* 4609 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10039 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 15086 */;
import useVisibilityTransition from "useVisibilityTransition" /* 15087 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;

require = fn;
function BountiesScrollEndCardContent(isScrollingInBoundsSharedValue) {
  ({ bounty, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  ({ visible, onReplay, opacityStyle } = isScrollingInBoundsSharedValue);
  const tmp = closure_11();
  const isBountiesVerticalScrollExperimentEnabled = isActive(11593).useIsBountiesVerticalScrollExperimentEnabled("BountiesScrollEndCard");
  let obj = isActive(11593);
  const bountyCtaInfo = isActive(15119).getBountyCtaInfo(bounty);
  const intl = isActive(1114).intl;
  const stringResult = intl.string(isActive(1114).t["9UtZAY"]);
  let obj2 = isActive(15119);
  const fn = function y() {
    if (isScrollingInBoundsSharedValue != null) {
      value = obj.get();
    }
    let num = 0;
    if (isActive) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    obj = isScrollingInBoundsSharedValue;
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  const obj3 = isActive(4341);
  fn.__closure = { isScrollingInBoundsSharedValue, withTiming: isActive(4606).withTiming, isActive, timingStandard: isActive(4609).timingStandard };
  fn.__workletHash = 4903386092677;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = { style: null, pointerEvents: "box-none", children: null };
  const items = [tmp.container, opacityStyle];
  obj5.style = items;
  const items1 = [closure_9(closure_6, { style: tmp.backdropTint, pointerEvents: "none" }), closure_9(isScrollingInBoundsSharedValue(5037), { colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"], style: tmp.backdropGradient, pointerEvents: "none" }), ];
  if (isBountiesVerticalScrollExperimentEnabled) {
    const obj8 = { style: null, pointerEvents: "box-none", children: null };
    const items2 = [tmp.overlayContent, animatedStyle];
    obj8.style = items2;
    const obj9 = { bounty, sourceQuestContent, disabled: !isActive };
    const items3 = [tmp10(tmp9(15122), obj9), ];
    const obj10 = { style: tmp.endedCtaButtonsContainer, pointerEvents: "box-none", children: null };
    const obj11 = {
      bounty,
      visible,
      sourceQuestContent,
      onClose() {

        },
      showCloseButton: false,
      disabled: !isActive
    };
    obj10.children = tmp10(tmp9(15124), obj11);
    items3[1] = tmp10(tmp11, obj10);
    obj8.children = items3;
    let tmp10Result = tmp8(tmp9(4341).View, obj8);
  } else {
    let tmp13;
    if (isActive) {
      tmp13 = onReplay;
    }
    const obj12 = { onPress: tmp13, disabled: !isActive, accessibilityRole: "button", accessibilityLabel: stringResult, style: tmp.pressable, children: null };
    const obj13 = { style: null, children: null };
    const items4 = [tmp.overlayContent, animatedStyle];
    obj13.style = items4;
    const obj14 = { style: tmp.textBlock, children: null };
    const obj15 = { variant: "heading-md/semibold", color: "text-strong", children: bountyCtaInfo.label };
    const items5 = [tmp10(tmp2(4601).Text, obj15), ];
    const obj16 = { variant: "heading-sm/medium", color: "text-default", children: stringResult };
    items5[1] = tmp10(tmp2(4601).Text, obj16);
    obj14.children = items5;
    const items6 = [tmp8(tmp11, obj14), ];
    const obj17 = { accessible: false, color: tmp9(576).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, style: tmp.replayIcon };
    items6[1] = tmp10(tmp2(10250).RetryIcon, obj17);
    obj13.children = items6;
    obj12.children = tmp8(tmp9(4341).View, obj13);
    tmp10Result = tmp10(closure_4, obj12);
  }
  items1[2] = tmp10Result;
  obj5.children = items1;
  return closure_10(isScrollingInBoundsSharedValue(4341).View, obj5);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5494).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4605);
let closure_11 = createStyles.createStyles(() => {
  const obj = { container: null, backdropTint: null, backdropGradient: null, overlayContent: null, pressable: null, textBlock: null, replayIcon: null, endedCtaButtonsContainer: null };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj.container = {};
  const obj3 = {};
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj3.backgroundColor = "rgba(0, 0, 0, 0.6)";
  obj.backdropTint = obj3;
  const merged2 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj.backdropGradient = {};
  const obj5 = {};
  const merged3 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj5.justifyContent = "center";
  obj5.alignItems = "center";
  obj.overlayContent = obj5;
  const obj6 = {};
  const merged4 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj6.justifyContent = "center";
  obj6.alignItems = "center";
  obj.pressable = obj6;
  obj.textBlock = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  const obj2 = {};
  const obj4 = {};
  const obj7 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.replayIcon = { margin: nativeDefault.space.PX_12 };
  const rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
  obj.endedCtaButtonsContainer = rect;
  return obj;
});
const entering = function t(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
entering.__closure = { withTiming: fn(4606).withTiming, timingStandard: fn(4609).timingStandard };
entering.__workletHash = 12127714049951;
entering.__initData = { code: "function BountiesScrollEndCardTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function n(value, fn2) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn2) };
  return obj;
};
let obj2 = { withTiming: fn(4606).withTiming, timingStandard: fn(4609).timingStandard };
fn2.__closure = { withTiming: fn(4606).withTiming, timingStandard: fn(4609).timingStandard };
fn2.__workletHash = 7470211880124;
fn2.__initData = { code: "function BountiesScrollEndCardTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
const __initData = { code: "function BountiesScrollEndCardTsx3(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(visible) {
  visible = visible.visible;
  const isBountiesModalTransitionsRefactorEnabled = BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    return closure_1_9(BountiesScrollEndCardContent, obj);
  }, []);
  const obj3 = useVisibilityTransition;
  const visibilityTransition = obj3.useVisibilityTransition({ visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard });
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp15;
    if (visible) {
      tmp15 = visible;
    }
    obj5.item = tmp15;
    obj5.entering = entering;
    obj5.exiting = fn2;
    obj5.renderItem = callback;
    shouldRender = React7(AnimatedEnterExitItemDefault, obj5);
  } else if (shouldRender) {
    const obj6 = {};
    let merged = Object.assign(visible);
    obj6.opacityStyle = tmp6;
    shouldRender = React7(BountiesScrollEndCardContent, obj6);
  }
  return shouldRender;
};
