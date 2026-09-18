// Module ID: 15204
// Function ID: 15205
// Name: QuestDockUnenrolledBackground
// Dependencies: [32, 19, 17, 4552, 5444, 15098, 1074, 21, 4560, 15105, 15094, 15099, 15102, 8266, 504, 4262, 576, 672, 4296, 4974, 1115, 15185, 11772, 7073, 8308, 5587, 4987, 2]

// Module 15204 (QuestDockUnenrolledBackground)
import _modDef672 from "module_672" /* 672 */;
import spring from "spring" /* 4974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15098);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9 } = QuestDockConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let obj = { backgroundWrapper: null, backgroundHeroAsset: null, backgroundHeroAssetVideo: null, backgroundGradient: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.right = undefined;
obj3.bottom = undefined;
obj3.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj3.zIndex = 1;
obj.backgroundWrapper = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj4.resizeMode = "cover";
obj.backgroundHeroAsset = obj4;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundHeroAssetVideo = {};
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.backgroundGradient = obj6;
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData2 = { code: "function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  const questDockQuest = activeQuestDockMode(setRestingQuestDockMode[9]).useQuestDockQuest();
  const tmp4 = closure_13();
  let obj = activeQuestDockMode(setRestingQuestDockMode[9]);
  const questDockHeroAsset = activeQuestDockMode(setRestingQuestDockMode[10]).useQuestDockHeroAsset(questDockQuest);
  ({ staticUrl, videoAsset } = questDockHeroAsset);
  const context = noop.useContext(activeQuestDockMode(setRestingQuestDockMode[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  setRestingQuestDockMode = noop.useContext(activeQuestDockMode(setRestingQuestDockMode[12]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj2 = activeQuestDockMode(setRestingQuestDockMode[10]);
  const tmp8 = windowDimensions(setRestingQuestDockMode[13])(activeQuestDockMode);
  let items = [closure_6];
  const stateFromStores = activeQuestDockMode(setRestingQuestDockMode[14]).useStateFromStores(items, () => closure_6.useReducedMotion);
  let obj4 = activeQuestDockMode(setRestingQuestDockMode[14]);
  const token = activeQuestDockMode(setRestingQuestDockMode[15]).useToken(windowDimensions(setRestingQuestDockMode[16]).colors.CARD_BACKGROUND_DEFAULT);
  const items1 = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [obj.alpha(0).hex(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).hex();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.8).hex();
    const alphaResult2 = obj.alpha(0.8);
    items[3] = obj.alpha(1).hex();
    return items;
  }, items1);
  const memo1 = noop.useMemo(() => [0, 0.33, 0.76, 1], []);
  const obj5 = activeQuestDockMode(setRestingQuestDockMode[15]);
  const fn = function s() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num = -1 * React7;
    }
    const obj2 = activeQuestDockMode;
    const tmp3 = QuestDockMode;
    const items = [{ translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }, ];
    const obj3 = { translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    const tmp5 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    let num3 = 0;
    if (obj2.get() === tmp3.COLLAPSED) {
      num3 = -1 * React7;
    }
    const obj4 = { transform: null, width: null };
    const tmpResult = spring;
    items[1] = { translateY: spring.withSpring(num3, tmp5) };
    obj4.transform = items;
    obj4.width = windowDimensions.get().width;
    return obj4;
  };
  const obj6 = activeQuestDockMode(setRestingQuestDockMode[18]);
  fn.__closure = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  fn.__workletHash = 3565242281634;
  fn.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const obj7 = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  const tmp14 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  const tmp16 = token;
  [tmp18, noop] = token(noop.useState("active" !== videoLoaded.currentState), 2);
  const items2 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = noop.useEffect(() => {
    closure_0 = first.addEventListener("change", (event) => {
      closure_1_4("active" !== event);
      let tmp3 = activeQuestDockMode(setRestingQuestDockMode[20]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = closure_0.get() === constants.EXPANDED;
      }
      if (tmp3) {
        closure_1_2(constants.COLLAPSED);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items2);
  let isRendered = !tmp18;
  if (!tmp18) {
    isRendered = noop.useContext(windowDimensions(setRestingQuestDockMode[21])).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoAsset;
  }
  if (isRendered) {
    isRendered = !tmp(tmp2[20]).isAndroid();
    let tmpResult = tmp(tmp2[20]);
  }
  if (isRendered) {
    isRendered = tmp(tmp2[22]).isHeroVideoSupported(videoAsset);
    const tmpResult3 = tmp(tmp2[22]);
  }
  const tmp16Result = tmp16(noop.useState(false), 2);
  videoLoaded = tmp16Result[0];
  closure_6 = tmp16Result[1];
  const callback = obj3.useCallback(() => {
    closure_6(true);
  }, []);
  const tmp17 = token(noop.useState("active" !== videoLoaded.currentState), 2);
  class G {
    constructor() {
      obj = closure_0(closure_2[19]);
      num = 1;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        tmp = closure_5;
        num = 1;
        if (closure_5) {
          num = 0;
        }
      }
      obj1 = { opacity: obj.withSpring(num, closure_8) };
      return obj1;
    }
  }
  const tmpResult4 = activeQuestDockMode(setRestingQuestDockMode[18]);
  G.__closure = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, videoLoaded, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp14 };
  G.__workletHash = 13084905891385;
  G.__initData = __initData2;
  const animatedStyle1 = tmpResult4.useAnimatedStyle(G);
  const obj9 = { style: null, children: null };
  const items3 = [tmp4.backgroundWrapper, animatedStyle];
  obj9.style = items3;
  const obj8 = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, videoLoaded, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp14 };
  if (isRendered) {
    const obj10 = { children: null };
    const obj11 = { style: tmp4.backgroundHeroAssetVideo, onLoad: callback, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj12 = { uri: videoAsset.url };
    obj11.source = obj12;
    obj11.paused = tmp8 !== tmp13.EXPANDED;
    const items4 = [closure_11(tmp(tmp2[24]).VideoComponent, obj11), ];
    const obj13 = { style: animatedStyle1, children: null };
    const obj14 = { style: tmp4.backgroundHeroAsset, source: null };
    const obj15 = { uri: staticUrl };
    obj14.source = obj15;
    obj13.children = closure_11(tmp7(tmp2[25]), obj14);
    items4[1] = closure_11(tmp7(tmp2[23]), obj13);
    obj10.children = items4;
    let tmp25Result = tmp25(obj3.Fragment, obj10);
    let tmp27 = closure_11;
    const tmp7Result2 = tmp7(tmp2[23]);
  } else {
    tmp27 = closure_11;
    const obj16 = { style: tmp4.backgroundHeroAsset, source: null };
    const obj17 = { uri: staticUrl };
    obj16.source = obj17;
    tmp25Result = closure_11(tmp7(tmp2[25]), obj16);
  }
  const items5 = [tmp25Result, tmp27(windowDimensions(setRestingQuestDockMode[26]), { locations: memo1, style: tmp4.backgroundGradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo })];
  obj9.children = items5;
  return closure_12(windowDimensions(setRestingQuestDockMode[23]), obj9);
});
