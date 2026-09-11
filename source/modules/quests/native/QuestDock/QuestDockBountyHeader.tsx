// Module ID: 15261
// Function ID: 15262
// Name: QuestDockBountyHeader
// Dependencies: [19, 17, 5496, 15153, 21, 576, 4607, 15160, 15154, 4343, 5026, 15150, 15250, 7147, 5639, 4603, 2]

// Module 15261 (QuestDockBountyHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5026 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7147 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15250 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const QuestDockMode = fn(5496).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = fn(15153).QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
const createStyles = fn(4607);
let obj = { wrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_8 }, productIcon: null, crossFadeWrapper: null, copy: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1, justifyContent: "center" };
obj.copy = { flexShrink: 1 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let obj3 = { alignItems: "center", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(function QuestDockBountyHeader() {
  const questDockBounty = activeQuestDockMode(15160).useQuestDockBounty();
  const tmp4 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  activeQuestDockMode = noop.useContext(tmp(15154).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(15160);
  const fn = function n() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, closure_6) };
  };
  const tmpResult = activeQuestDockMode(4343);
  fn.__closure = { withSpring: activeQuestDockMode(5026).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const obj2 = { withSpring: activeQuestDockMode(5026).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const fn2 = function l() {
    let num = 1;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 0;
    }
    return { opacity: spring.withSpring(num, closure_6) };
  };
  const tmpResult4 = activeQuestDockMode(4343);
  fn2.__closure = { withSpring: activeQuestDockMode(5026).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 7823648730606;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult4.useAnimatedStyle(fn2);
  const obj3 = { withSpring: activeQuestDockMode(5026).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  const bountyCreative = activeQuestDockMode(15160).useBountyCreative(questDockBounty);
  const tmpResult5 = activeQuestDockMode(15160);
  const tmpResult6 = activeQuestDockMode(15150);
  const obj4 = { onSubmenuPress: activeQuestDockMode(15150).useActionSheetPressHandler(bountyCreative), children: null };
  const obj5 = { style: tmp4.wrapper, accessible: true, accessibilityRole: "text", accessibilityLabel: str, children: null };
  let tmp9Result = null != questDockBounty.productIcon;
  const actionSheetPressHandler = activeQuestDockMode(15150).useActionSheetPressHandler(bountyCreative);
  if (tmp9Result) {
    const obj6 = { style: animatedStyle1, children: null };
    const obj7 = { style: tmp4.productIcon, source: null, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    const obj8 = { uri: questDockBounty.productIcon };
    obj7.source = obj8;
    obj6.children = tmp9(tmp10(5639), obj7);
    tmp9Result = tmp9(tmp10(7147), obj6);
    const tmp10Result = tmp10(7147);
  }
  const items = [tmp9Result, ];
  const obj9 = { style: tmp4.crossFadeWrapper, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const obj10 = { style: null, children: null };
  const items1 = [tmp4.copy, animatedStyle];
  obj10.style = items1;
  const tmp11 = QuestDockBackgroundBlurHeaderDefault;
  const tmp12 = closure_8;
  obj10.children = closure_7(activeQuestDockMode(4603).Text, { variant: "text-md/medium", color: "text-strong", lineClamp: 1, accessible: false, children: str });
  obj9.children = closure_7(ReanimatedNativeViewDefault, obj10);
  items[1] = closure_7(View, obj9);
  obj5.children = items;
  obj4.children = tmp12(View, obj5);
  return closure_7(tmp11, obj4);
});
