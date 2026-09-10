// Module ID: 15098
// Function ID: 15099
// Name: BountyCard
// Dependencies: [32, 19, 17, 4566, 7716, 21, 4574, 576, 1116, 504, 11317, 4275, 5621, 8336, 5601, 9471, 4570, 1114, 4989, 4534, 2]

// Module 15098 (BountyCard)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;
import BountyStore from "BountyStore" /* 7716 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 188;
const createStyles = fn(4574);
let closure_13 = createStyles.createStyles(() => {
  const obj = { tile: { gap: nativeDefault.space.PX_12 }, card: null, cardImage: null, previewVideo: null, badge: null, badgeContent: null, badgeText: null, startButton: null, cardFooter: null, advertiserRow: null, advertiserName: null, advertiserIcon: null };
  const size = { width: v188, height: 313, overflow: "hidden", padding: 0 };
  obj.card = size;
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj.cardImage = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj.previewVideo = {};
  const rect = { position: "absolute", top: nativeDefault.space.PX_12, left: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.badge = rect;
  const obj2 = { gap: nativeDefault.space.PX_12 };
  const obj3 = {};
  const obj4 = {};
  obj.badgeContent = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  const obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.badgeText = { textTransform: "uppercase", color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const rect1 = { position: "absolute", bottom: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
  obj.startButton = rect1;
  obj.cardFooter = { flexDirection: "column", alignItems: "flex-start", maxWidth: v188 };
  const obj6 = { textTransform: "uppercase", color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.advertiserRow = { flexDirection: "row", gap: nativeDefault.space.PX_4, alignItems: "center" };
  obj.advertiserName = { flexShrink: 1 };
  obj.advertiserIcon = { flexShrink: 0, opacity: 0.7 };
  return obj;
});
let PlatformUtils = fn(1116);
PlatformUtils = fn(1116);
let closure_15 = PlatformUtils.isAndroid();
PlatformUtils = fn(1116);
let closure_16 = PlatformUtils.isAndroid();
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountyCard.tsx");

export default noop.memo((bounty) => {
  bounty = bounty.bounty;
  const index = bounty.index;
  const isActive = bounty.isActive;
  const onPress = bounty.onPress;
  noop = undefined;
  currentState = undefined;
  let first;
  closure_7 = undefined;
  closure_8 = undefined;
  let ref;
  c10 = undefined;
  c11 = undefined;
  let tmp = closure_13();
  const items = [ref];
  const stateFromStores = bounty(isActive[9]).useStateFromStores(items, () => BountyStore.isBountyCompleted(bounty.id));
  const items1 = [onPress, bounty, index];
  const callback = noop.useCallback(() => {
    onPress(bounty, index);
  }, items1);
  const videoPreview = bounty.videoPreview;
  let scaledImageUrl = null;
  if (null != bounty.imagePreview) {
    const size = { assetUrl: bounty.imagePreview, width: v188, height: 313 };
    scaledImageUrl = tmp2(tmp3[10]).getScaledImageUrl(size);
    const tmp2Result = tmp2(tmp3[10]);
  }
  if (tmp8) {
    const size1 = { assetUrl: videoPreview, width: v188, height: 313 };
    scaledImageUrl = tmp2(tmp3[10]).getScaledFirstFrameImageUrl(size1);
    const tmp2Result4 = tmp2(tmp3[10]);
  }
  const obj = bounty(isActive[9]);
  const tmp10 = onPress;
  tmp8 = null == scaledImageUrl && null != videoPreview;
  [tmp12, c4] = onPress(noop.useState(false), 2);
  const callback1 = obj2.useCallback(() => {
    _undefined(true);
  }, []);
  const tmp11 = onPress(noop.useState(false), 2);
  [tmp15, tmp16] = onPress(noop.useState(false), 2);
  currentState = tmp16;
  const tmp17 = onPress(noop.useState(false), 2);
  first = tmp17[0];
  closure_7 = tmp19;
  const tmp14 = onPress(noop.useState(false), 2);
  const items2 = [closure_8];
  const stateFromStores1 = bounty(isActive[9]).useStateFromStores(items2, () => closure_8.useReducedMotion);
  const tmp2Result5 = bounty(isActive[9]);
  const token = bounty(isActive[11]).useToken(index(tmp3[7]).modules.mobile.BOUNTY_TILE_BORDER_RADIUS);
  closure_8 = obj2.useRef(null);
  const callback2 = obj2.useCallback(() => {
    if (null != closure_8.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    closure_8.current = setTimeout(() => {
      _undefined2(true);
    }, num);
  }, []);
  const tmp24 = onPress(noop.useState(isActive), 2);
  if (isActive !== tmp24[0]) {
    tmp24[1](isActive);
    if (isActive) {
      let tmp28 = tmp15;
      if (tmp15) {
        tmp28 = !first;
      }
      if (tmp28) {
        tmp16(false);
      }
      if (first) {
        tmp19(false);
      }
    } else if (closure_15) {
      tmp19(true);
    }
  }
  ref = obj2.useRef(null);
  const items3 = [first];
  const effect = obj2.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_7(false);
        _undefined2(false);
        ref.current = null;
      }, 150);
    }
    return () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = null;
      }
    };
  }, items3);
  const items4 = [isActive];
  const effect1 = obj2.useEffect(() => {
    let tmp = isActive;
    let tmp2 = isActive;
    if (isActive) {
      tmp2 = null != ref.current;
    }
    if (tmp2) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    if (!tmp) {
      tmp = null == closure_8.current;
    }
    if (!tmp) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_8.current);
      closure_8.current = null;
    }
  }, items4);
  const effect2 = obj2.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const tmp2Result6 = bounty(isActive[11]);
  [tmp35, c10] = tmp10(noop.useState("active" === currentState.currentState), 2);
  const effect3 = obj2.useEffect(() => {
    closure_0 = _undefined2.addEventListener("change", (event) => {
      closure_1_10("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let tmp42Result = isActive;
  if (!isActive) {
    tmp42Result = first;
  }
  if (tmp42Result) {
    tmp42Result = null != videoPreview;
  }
  if (tmp42Result) {
    tmp42Result = tmp12;
  }
  let isModalVisible = closure_16;
  if (closure_16) {
    isModalVisible = bounty.isModalVisible;
  }
  let tmp38 = !isModalVisible;
  if (!isModalVisible) {
    if (first) {
      first = !isActive;
    }
    tmp38 = !first;
  }
  if (tmp38) {
    tmp38 = tmp42Result;
  }
  if (tmp38) {
    tmp38 = tmp15;
  }
  c11 = tmp38;
  const items5 = [tmp38];
  const obj3 = { style: tmp.tile, children: null };
  const memo = obj2.useMemo(() => {
    let opacity = 1;
    if (c11) {
      opacity = 0;
    }
    return { opacity };
  }, items5);
  const obj4 = { style: tmp.card, radius: token, onPress: callback, android_ripple: { color: "transparent" }, children: null };
  if (tmp42Result) {
    const obj5 = { accessible: false, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", onReadyForDisplay: callback2, source: null, style: null, resizeMode: "cover", repeat: true, muted: true, disableFocus: true, paused: null };
    const obj6 = { uri: videoPreview };
    obj5.source = obj6;
    obj5.style = tmp.previewVideo;
    let tmp44 = !tmp35;
    if (tmp35) {
      tmp44 = stateFromStores1;
    }
    obj5.paused = tmp44;
    tmp42Result = c10(tmp21(tmp3[13]), obj5);
    const tmp21Result = tmp21(tmp3[13]);
  }
  const items6 = [tmp42Result, , , ];
  const obj7 = { style: null, onLoad: callback1, source: null, resizeMode: "cover" };
  const items7 = [tmp.cardImage, memo];
  obj7.style = items7;
  const tmp10Result = tmp10(noop.useState("active" === currentState.currentState), 2);
  obj7.source = { uri: scaledImageUrl };
  items6[1] = c10(index(isActive[14]), obj7);
  const obj8 = { style: tmp.badge, children: null };
  const obj9 = { style: tmp.badgeContent, children: null };
  let tmp45Result = stateFromStores;
  if (stateFromStores) {
    const obj10 = { size: "xxs", color: tmp21(tmp3[7]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
    tmp45Result = tmp45(tmp2(tmp3[15]).CheckmarkSmallBoldIcon, obj10);
  }
  const items8 = [tmp45Result, ];
  const obj11 = { variant: "text-xs/bold", style: tmp.badgeText, children: null };
  const intl = tmp2(tmp3[17]).intl;
  const t = tmp2(tmp3[17]).t;
  obj11.children = intl.string(stateFromStores ? t.vlGTLf : t["fFIJ/9"]);
  items8[1] = c10(bounty(isActive[16]).Text, obj11);
  obj9.children = items8;
  obj8.children = c11(closure_7, obj9);
  items6[2] = c10(closure_7, obj8);
  const obj12 = { style: tmp.startButton, children: null };
  const intl2 = tmp2(tmp3[17]).intl;
  const string = intl2.string;
  const t2 = tmp2(tmp3[17]).t;
  if (stateFromStores) {
    let stringResult = string(t2["9UtZAY"]);
  } else {
    stringResult = string(t2.LhlgY9);
  }
  obj12.children = c10(bounty(isActive[18]).Button, { variant: "secondary-overlay", text: stringResult, onPress: callback });
  items6[3] = c10(closure_7, obj12);
  obj4.children = items6;
  const items9 = [c11(bounty(isActive[12]).Card, obj4), ];
  const obj13 = { style: tmp.cardFooter, children: null };
  const obj14 = { style: tmp.advertiserRow, children: null };
  const items10 = [c10(bounty(isActive[16]).Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.advertiserName, children: bounty.advertiserName }), ];
  const obj15 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.advertiserName, children: bounty.advertiserName };
  const tmp21Result2 = index(isActive[14]);
  items10[1] = c10(bounty(isActive[19]).CircleCheckIcon, { size: "xxs", style: tmp.advertiserIcon, color: index(isActive[7]).colors.ICON_SUBTLE });
  obj14.children = items10;
  const items11 = [c11(closure_7, obj14), ];
  const obj17 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj17.children = intl3.string(bounty(isActive[17]).t.o6FLcF);
  items11[1] = c10(bounty(isActive[16]).Text, obj17);
  obj13.children = items11;
  items9[1] = c11(closure_7, obj13);
  obj3.children = items9;
  return c11(closure_7, obj3);
});
export const CARD_WIDTH = 188;
