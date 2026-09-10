// Module ID: 15282
// Function ID: 15283
// Name: QuestDockBountyHeader
// Dependencies: [19, 17, 5494, 15174, 21, 576, 4605, 15181, 1114, 15175, 4341, 5024, 15171, 15271, 5637, 7125, 4601, 15274, 5742, 2]

// Module 15282 (QuestDockBountyHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5024 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7125 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15271 */;
import QuestDockHeaderSeparatorDefault from "QuestDockHeaderSeparator" /* 15274 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const QuestDockMode = fn(5494).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = fn(15174).QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4605);
let obj = { wrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_8 }, productIcon: null, crossFadeWrapper: null, copy: null, expandedContent: null, expandedLabel: null, expandedLabelText: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1, justifyContent: "center" };
obj.copy = { flexShrink: 1 };
const rect = { alignItems: "center", bottom: 0, flexDirection: "row", gap: nativeDefault.space.PX_12, left: 0, position: "absolute", right: 0, top: 0 };
obj.expandedContent = rect;
let obj3 = { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_8 };
obj.expandedLabel = { alignItems: "center", flexDirection: "row", flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj.expandedLabelText = { opacity: 0.7 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let obj4 = { alignItems: "center", flexDirection: "row", flexShrink: 1, gap: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(function QuestDockBountyHeader() {
  const questDockBounty = activeQuestDockMode(15181).useQuestDockBounty();
  const tmp4 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  const intl = tmp(1114).intl;
  const stringResult = intl.string(activeQuestDockMode(1114).t["4QEsIN"]);
  activeQuestDockMode = noop.useContext(tmp(15175).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(15181);
  const fn = function n() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, closure_6) };
  };
  const tmpResult = activeQuestDockMode(4341);
  fn.__closure = { withSpring: activeQuestDockMode(5024).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const obj2 = { withSpring: activeQuestDockMode(5024).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const fn2 = function _() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, closure_6) };
  };
  const tmpResult4 = activeQuestDockMode(4341);
  fn2.__closure = { withSpring: activeQuestDockMode(5024).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 3799310117358;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult4.useAnimatedStyle(fn2);
  const obj3 = { withSpring: activeQuestDockMode(5024).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const bountyCreative = activeQuestDockMode(15181).useBountyCreative(questDockBounty);
  const tmpResult5 = activeQuestDockMode(15181);
  const tmpResult6 = activeQuestDockMode(15171);
  const obj4 = { onSubmenuPress: activeQuestDockMode(15171).useActionSheetPressHandler(bountyCreative), children: null };
  const obj5 = { style: tmp4.wrapper, accessible: true, accessibilityRole: "text", accessibilityLabel: null, children: null };
  let combined = stringResult;
  const actionSheetPressHandler = activeQuestDockMode(15171).useActionSheetPressHandler(bountyCreative);
  if ("" !== str) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + ", " + stringResult;
  }
  obj5.accessibilityLabel = combined;
  let tmp10Result = null != questDockBounty.productIcon;
  if (tmp10Result) {
    const obj6 = { style: tmp4.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj7 = { uri: questDockBounty.productIcon };
    obj6.source = obj7;
    tmp10Result = tmp10(tmp11(5637), obj6);
  }
  const items = [tmp10Result, ];
  const obj8 = { style: tmp4.crossFadeWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const obj9 = { style: null, children: null };
  const items1 = [tmp4.copy, animatedStyle];
  obj9.style = items1;
  const tmp12 = QuestDockBackgroundBlurHeaderDefault;
  const items2 = [closure_7(activeQuestDockMode(4601).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, accessible: false, children: stringResult }), closure_7(activeQuestDockMode(4601).Text, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, accessible: false, children: str })];
  obj9.children = items2;
  const items3 = [closure_8(ReanimatedNativeViewDefault, obj9), ];
  const obj10 = { style: null, children: null };
  const items4 = [tmp4.expandedContent, animatedStyle1];
  obj10.style = items4;
  const tmp11Result = ReanimatedNativeViewDefault;
  const items5 = [closure_7(QuestDockHeaderSeparatorDefault, {}), ];
  const obj11 = { style: tmp4.expandedLabel, children: null };
  const items6 = [closure_7(activeQuestDockMode(5742).BountiesPosterIllocon, { size: 32, accessible: false }), closure_7(activeQuestDockMode(4601).Text, { style: tmp4.expandedLabelText, variant: "text-sm/medium", color: "text-default", lineClamp: 1, accessible: false, children: stringResult })];
  obj11.children = items6;
  items5[1] = closure_8(View, obj11);
  obj10.children = items5;
  items3[1] = closure_8(ReanimatedNativeViewDefault, obj10);
  obj8.children = items3;
  items[1] = closure_8(View, obj8);
  obj5.children = items;
  obj4.children = closure_8(View, obj5);
  return closure_7(tmp12, obj4);
});
