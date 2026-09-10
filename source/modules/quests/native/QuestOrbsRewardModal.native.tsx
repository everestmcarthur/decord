// Module ID: 11850
// Function ID: 11851
// Name: QuestOrbsRewardModal
// Dependencies: [32, 5, 19, 17, 4597, 1371, 1895, 5494, 21, 4808, 11850, 1896, 4605, 576, 8906, 5681, 5730, 1114, 5637, 8879, 1116, 11851, 8372, 11852, 11853, 11854, 11855, 504, 8919, 1093, 11362, 11856, 11838, 5497, 7175, 4601, 5025, 2]
// Exports: default, openQuestOrbsRewardModal

// Module 11850 (QuestOrbsRewardModal)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import FastImageDefault from "FastImage" /* 5637 */;
import XSmallIcon from "XSmallIcon" /* 5730 */;
import common_Video from "common/Video" /* 8372 */;
import APNGPlayer from "APNGPlayer" /* 8879 */;
import OrbsIcon from "OrbsIcon" /* 8906 */;
import _modDef11851 from "module_11851" /* 11851 */;
import _modDef11852 from "module_11852" /* 11852 */;
import _modDef11853 from "module_11853" /* 11853 */;
import _modDef11854 from "module_11854" /* 11854 */;
import _modDef11855 from "module_11855" /* 11855 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;
import UserStore from "UserStore" /* 1371 */;
import AppStateStore from "AppStateStore" /* 1895 */;

const require = globalThis.__r;

require = fn;
function OrbsBalance(balance) {
  const tmp = closure_19();
  const obj = { children: null };
  const items = [map1(OrbsIcon.OrbsIcon, { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon }), map1(React6, { style: tmp.spacer }), balance.balance];
  obj.children = items;
  return __initData(closure_1_14, obj);
}
function CancelButton() {
  const tmp = closure_17();
  _require = tmp;
  let obj = {
    onPress() {
      ModalActionCreatorsDefault.popWithKey(QuestOrbsRewardModal);
    },
    backImage() {
      const obj = { size: "lg", style: null };
      const items = [closeButtonIcon.closeButtonIcon];
      obj.style = items;
      return map1(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: null,
    displayMode: "minimal",
    style: null
  };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
  obj.style = tmp.closeButton;
  return closure_13(require("module_5681").HeaderBackButton, obj);
}
function StaticOrb() {
  const obj = { style: { width: "100%", height: "100%" }, children: null };
  const obj2 = { source: null, style: null, fade: false };
  const obj3 = { uri: null };
  const tmp = closure_26();
  obj3.uri = _modDef11853;
  obj2.source = obj3;
  obj2.style = tmp.animatedOrb;
  obj.children = map1(FastImageDefault, obj2);
  return map1(React6, obj);
}
function AnimatedOrbContainer(isAppActive) {
  isAppActive = isAppActive.isAppActive;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  c4 = undefined;
  const tmp = closure_26();
  [first, closure_1] = noop.useState(false);
  [first1, closure_3] = noop.useState(false);
  [tmp7, c4] = noop.useState(true);
  const callback = noop.useCallback(() => {
    closure_1(true);
  }, []);
  const items = [first, first1];
  const callback1 = noop.useCallback(() => {
    closure_3(true);
  }, []);
  const effect = noop.useEffect(() => {
    if (timeout) {
      if (first1) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  const obj = { style: { width: "100%", height: "100%" }, children: null };
  let tmp13 = !first;
  if (!first) {
    tmp13 = !first1;
  }
  if (tmp13) {
    const obj2 = { style: { height: "100%" } };
    tmp13 = map1(tmp12, obj2);
  }
  const items1 = [tmp13, , ];
  const obj3 = { uri: _modDef11854, style: null, onLoad: null, animate: null };
  const items2 = [tmp.animatedOrb, ];
  let obj4 = tmp15Result;
  if (!tmp15Result) {
    obj4 = !first1;
  }
  if (obj4) {
    obj4 = { opacity: 0 };
  }
  items2[1] = obj4;
  obj3.style = items2;
  obj3.onLoad = callback1;
  let tmp19 = !tmp15Result;
  if (!tmp15Result) {
    tmp19 = isAppActive;
  }
  obj3.animate = tmp19;
  items1[1] = map1(closure_24, obj3);
  if (tmp15Result) {
    const obj5 = { uri: _modDef11855, style: null, onLoad: null, animate: null };
    const items3 = [tmp.animatedOrb];
    obj5.style = items3;
    obj5.onLoad = callback;
    obj5.animate = isAppActive;
    tmp15Result = tmp15(tmp16, obj5);
  }
  items1[2] = tmp15Result;
  obj.children = items1;
  return __initData(React6, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const RewardFilterTypes = fn(5494).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const QuestOrbsRewardModal = "QuestOrbsRewardModal";
let createStyles = fn(4605);
let obj = { closeButton: { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 }, closeButtonIcon: null };
let obj3 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
obj.closeButtonIcon = { tintColor: nativeDefault.colors.WHITE };
let closure_17 = createStyles.createStyles(obj);
createStyles = fn(4605);
let closure_18 = createStyles.createStyles(() => {
  const obj = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: React5.absoluteFillObject, loading: null, header: null, main: null, animation: null, body: null, title: null, buttonsContainer: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(React5.absoluteFillObject);
  obj.loading = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.header = { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" };
  obj.main = { flex: 2 };
  obj.animation = { flex: 3 };
  const obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.body = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  const obj4 = { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 };
  obj.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  const obj5 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
  obj.buttonsContainer = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
  return obj;
});
createStyles = fn(4605);
let obj5 = { orbsIcon: null, spacer: { width: 2 } };
const obj8 = { transform: null };
let items = [{ translateY: 3 }];
obj8.transform = items;
obj5.orbsIcon = obj8;
let closure_19 = createStyles.createStyles(obj5);
let closure_22 = noop.memo((onLoad) => {
  const uri = onLoad.uri;
  let flag = onLoad.animate;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = noop.useEffect(() => {
    FastImageDefault.preload(uri);
  }, items);
  return closure_13(FastImageDefault, { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad: onLoad.onLoad, usesSmallCache: false, fade: false }, "orb-animate-" + flag);
});
let closure_23 = noop.memo((animate) => {
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const ref = noop.useRef(null);
  const aPNGPlayerControls = APNGPlayer.useAPNGPlayerControls(ref);
  const items = [flag, aPNGPlayerControls];
  const effect = noop.useEffect(() => {
    if (flag) {
      obj.play();
    } else {
      obj.stop();
    }
  }, items);
  return map1(APNGPlayer.APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
});
let closure_24 = noop.memo((animate) => {
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  return map1(React6, { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: map1(utils_PlatformUtils.isAndroid() ? closure_23 : closure_22, { uri, onLoad, animate: flag }) });
});
let closure_25 = noop.memo((arg0) => {
  ({ useReducedMotion, style } = arg0);
  ({ onStaticBgLoad, onAnimatedBgLoad, isAppActive } = arg0);
  const obj = { source: null, style: null, resizeMode: "cover", onLoad: null };
  const obj2 = { uri: _modDef11851 };
  obj.source = obj2;
  obj.style = style;
  obj.onLoad = onStaticBgLoad;
  const children = [map1(FastImageDefault, obj), ];
  let tmp2Result = !useReducedMotion;
  if (!useReducedMotion) {
    tmp2Result = isAppActive;
  }
  if (tmp2Result) {
    const obj3 = { source: null, style: null, resizeMode: "cover", onLoad: null, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj4 = { uri: _modDef11852 };
    obj3.source = obj4;
    obj3.style = style;
    obj3.onLoad = onAnimatedBgLoad;
    tmp2Result = map1(common_Video.VideoComponent, obj3);
  }
  children[1] = tmp2Result;
  return __initData(noop.Fragment, { children });
});
createStyles = fn(4605);
let closure_26 = createStyles.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default function QuestOrbsRewardModal(quest) {
  quest = quest.quest;
  let num;
  c1 = undefined;
  dependencyMap = undefined;
  let tmp = closure_18();
  let stringResult = dependencyMap;
  const items = [AccessibilityStore];
  const stateFromStores = num(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = num(504);
  num = num(8919).useFetchVirtualCurrencyBalance().balance;
  let obj2 = num(8919);
  [tmp6, c1] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c2] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const items1 = [AppStateStore];
  const stateFromStores1 = num(504).useStateFromStores(items1, () => state.getState());
  const obj4 = num(504);
  const items2 = [UserStore];
  const userStatus = quest.userStatus;
  let num2;
  const stateFromStores2 = num(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    num2 = tmp2(11362).getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
    const tmp2Result = tmp2(11362);
  }
  const tmp11 = stateFromStores1 === num(1093).AppStates.ACTIVE;
  const effect = obj3.useEffect(() => {
    num(_undefined2[31]).applyOrientationLock("PORTRAIT");
    return () => {
      const result = num(_undefined2[31]).restoreDefaultOrientationLock();
    };
  }, []);
  const callback = obj3.useCallback(() => {
    _undefined(true);
  }, []);
  const callback1 = obj3.useCallback(() => {
    _undefined2(true);
  }, []);
  let string = obj3.useCallback(() => {
    _undefined(_undefined2[9]).popWithKey(QuestOrbsRewardModal);
    const obj = _undefined(_undefined2[9]);
    const obj2 = num(_undefined2[32]);
    obj2.openQuestHome({ filter: constants.VIRTUAL_CURRENCY, fromContent: num(_undefined2[33]).QuestContent.REWARD_MODAL });
  }, []);
  const obj6 = { style: tmp.root, children: null };
  const obj7 = { style: absoluteFill.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_13(closure_25, { useReducedMotion: stateFromStores, style: tmp.background, onStaticBgLoad: callback, onAnimatedBgLoad: callback1, isAppActive: tmp11 }) };
  const items3 = [closure_13(closure_8, obj7), , ];
  let tmp17Result = !tmp6;
  if (!tmp6) {
    let tmp19 = stateFromStores;
    if (!stateFromStores) {
      tmp19 = !tmp8;
    }
    tmp17Result = tmp19;
  }
  if (tmp17Result) {
    const obj9 = { style: tmp.loading, children: tmp17(closure_6, { animating: true }) };
    tmp17Result = tmp17(tmp16, obj9);
  }
  items3[1] = tmp17Result;
  if (!tmp6) {
    const tmp21 = !stateFromStores;
  }
  if (!tmp6) {
    items3[2] = tmp6;
    obj6.children = items3;
    return tmp15(tmp16, obj6);
  } else {
    const rect = { style: null, top: true, bottom: true, left: true, right: true, children: null };
    const items4 = [tmp.main];
    rect.style = items4;
    const obj10 = { style: tmp.header, children: tmp17(CancelButton, {}) };
    const items5 = [tmp17(tmp16, obj10), , , ];
    const obj11 = { style: tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    if (stateFromStores) {
      let tmp17Result2 = tmp17(StaticOrb, {});
    } else {
      const obj12 = { isAppActive: tmp11 };
      tmp17Result2 = tmp17(AnimatedOrbContainer, obj12);
    }
    obj11.children = tmp17Result2;
    items5[1] = tmp17(tmp16, obj11);
    let obj13 = { style: tmp.body, children: null };
    const obj14 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: null };
    let intl = tmp2(1114).intl;
    if (num2 == null) {
      num2 = 0;
    }
    const obj15 = { count: num2 };
    obj14.children = intl.format(tmp2(1114).t.FIilK5, obj15);
    let items6 = [tmp17(tmp2(4601).Heading, obj14), ];
    let obj16 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: null };
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp2(1114).intl;
      const obj17 = {
        balanceHook() {
              return map1(OrbsBalance, { balance: num }, "balance");
            },
        profileDecoHook() {
              const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
              const intl = num(_undefined2[17]).intl;
              obj.children = intl.string(num(_undefined2[17]).t.pGDUH9);
              return closure_1_13(num(_undefined2[35]).Text, obj, "profileDeco");
            }
      };
      let formatResult = intl3.format(tmp2(1114).t["2dz2AL"], obj17);
    } else {
      const intl2 = tmp2(1114).intl;
      const obj18 = {
        balanceHook() {
              return map1(OrbsBalance, { balance: num }, "balance");
            }
      };
      formatResult = intl2.format(tmp2(1114).t.rKHvlX, obj18);
    }
    obj16.children = formatResult;
    items6[1] = tmp17(tmp2(4601).Text, obj16);
    obj13.children = items6;
    items5[2] = tmp15(tmp16, obj13);
    const obj19 = { style: tmp.buttonsContainer, children: null };
    items6 = tmp2(5025).Button;
    const obj20 = { onPress: string, variant: "primary", size: "lg", text: null };
    obj16 = tmp2(1114).intl;
    string = obj16.string;
    stringResult = string(tmp2(1114).t.uJAMFX);
    obj20.text = stringResult;
    tmp = tmp17(items6, obj20);
    obj19.children = tmp;
    obj13 = tmp17(tmp16, obj19);
    items5[3] = obj13;
    rect.children = items5;
    tmp15(tmp2(7175).SafeAreaPaddingView, rect);
  }
};
export const openQuestOrbsRewardModal = function openQuestOrbsRewardModal(quest) {
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[10], paths.paths);
    return arg1.default;
  }), { quest: quest.quest }, QuestOrbsRewardModal);
};
