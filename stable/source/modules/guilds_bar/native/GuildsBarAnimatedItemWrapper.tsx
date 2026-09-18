// Module ID: 16297
// Function ID: 16298
// Name: GuildsBarAnimatedItemWrapper
// Dependencies: [19, 4984, 16288, 21, 4560, 576, 4262, 4271, 4974, 4296, 7073, 16298, 16025, 1114, 4272, 5589, 8819, 2]
// Exports: default, useGuildsBarAnimatedWrapperStyles

// Module 16297 (GuildsBarAnimatedItemWrapper)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useToken from "useToken" /* 4262 */;
import native from "native" /* 4271 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
class UnreadIndicator {
  constructor(arg0) {
    sharedId = global.sharedId;
    id = global.id;
    MOUNTED = global.transitionState;
    if (MOUNTED === undefined) {
      tmp = sharedId;
      tmp2 = MOUNTED;
      MOUNTED = sharedId(MOUNTED[7]).TransitionStates.MOUNTED;
    }
    cleanUp = global.cleanUp;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    c7 = undefined;
    tmp3 = sharedId;
    tmp4 = MOUNTED;
    obj = sharedId(MOUNTED[6]);
    tmp5 = id;
    token = obj.useToken(id(MOUNTED[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
    closure_4 = token;
    tmp7 = closure_12(c7());
    closure_5 = tmp7;
    tmp8 = MOUNTED === sharedId(MOUNTED[7]).TransitionStates.MOUNTED;
    closure_6 = tmp8;
    num = 8;
    if (global.selected) {
      num = 8;
      if (MOUNTED !== tmp3(tmp4[7]).TransitionStates.YEETED) {
        num = 40;
      }
    }
    c7 = num;
    items = [, , ];
    items[0] = num;
    items[1] = MOUNTED;
    items[2] = tmp7.unreadIndicator;
    fn = function h(targetOriginY) {
      if (closure_6) {
        const obj2 = { animations: {}, initialValues: {} };
        let obj3 = obj2;
      } else {
        obj3 = { animations: null, initialValues: null };
        const obj7 = { originY: spring.withSpring(targetOriginY.targetOriginY, closure_11, "animate-always"), originX: null, height: null };
        obj7.originX = spring.withSpring(targetOriginY.targetOriginX, closure_11, "animate-always");
        obj7.height = spring.withSpring(targetOriginY.targetHeight, closure_11, "animate-always");
        obj3.animations = obj7;
        const obj8 = { height: 8, originY: token / 2, originX: -12 };
        obj3.initialValues = obj8;
      }
      return obj3;
    };
    obj1 = { disableEntering: tmp8, sharedId, id, withSpring: null, BAR_SPRING_PHYSICS: null, guildItemSize: null };
    memo = cleanUp.useMemo(() => {
      const items = [unreadIndicator.unreadIndicator, ];
      const obj = { height: num, marginTop: num / 2 * -1, marginLeft: null };
      num = 0;
      if (MOUNTED === native.TransitionStates.YEETED) {
        num = -4;
      }
      obj.marginLeft = num;
      items[1] = obj;
      return items;
    }, items);
    obj1.withSpring = tmp3(tmp4[8]).withSpring;
    obj1.BAR_SPRING_PHYSICS = closure_11;
    obj1.guildItemSize = token;
    fn.__closure = obj1;
    fn.__workletHash = 404454683979;
    fn.__initData = closure_14;
    items1 = [, , , ];
    items1[0] = tmp8;
    items1[1] = sharedId;
    items1[2] = id;
    items1[3] = token;
    fn2 = function p(height) {
      const obj = { animations: null, initialValues: null, callback: null };
      const obj2 = { originY: spring.withSpring(height.targetOriginY, closure_11, "animate-always"), originX: null, height: null };
      obj2.originX = spring.withSpring(height.targetOriginX, closure_11, "animate-always");
      obj2.height = spring.withSpring(height.targetHeight, closure_11, "animate-always");
      obj.animations = obj2;
      obj.initialValues = { height: height.currentHeight, originY: height.currentOriginY, originX: height.currentOriginX };
      obj.callback = function callback(arg0) {
        let tmp3 = closure_1_2 === sharedId(MOUNTED[7]).TransitionStates.YEETED && arg0;
        if (tmp3) {
          tmp3 = null != cleanUp;
        }
        if (tmp3) {
          sharedId(MOUNTED[9]).runOnJS(cleanUp)();
          const tmpResult = sharedId(MOUNTED[9]);
        }
      };
      return obj;
    };
    obj4 = { withSpring: null, BAR_SPRING_PHYSICS: null, transitionState: null, TransitionStates: null, cleanUp: null, runOnJS: null };
    callback = cleanUp.useCallback(fn, items1);
    obj4.withSpring = tmp3(tmp4[8]).withSpring;
    obj4.BAR_SPRING_PHYSICS = closure_11;
    obj4.transitionState = MOUNTED;
    obj4.TransitionStates = tmp3(tmp4[7]).TransitionStates;
    obj4.cleanUp = cleanUp;
    obj4.runOnJS = tmp3(tmp4[9]).runOnJS;
    fn2.__closure = obj4;
    fn2.__workletHash = 10632665703864;
    fn2.__initData = closure_15;
    items2 = [, ];
    items2[0] = MOUNTED;
    items2[1] = cleanUp;
    callback1 = cleanUp.useCallback(fn2, items2);
    return jsx(tmp5(tmp4[10]), { collapsable: false, entering: callback, layout: callback1, style: memo, pointerEvents: "none" });
  }
}
function renderUnreadIndicator(arg0, sharedId, transitionState, cleanUp) {
  return React6(UnreadIndicator, { sharedId: sharedId.sharedId, id: sharedId.id, selected: sharedId.selected, transitionState, cleanUp }, arg0);
}
const IOS_POINTER_STYLE = fn(4984).IOS_POINTER_STYLE;
const GuildsBarConstants = fn(16288);
({ GUILD_ITEM_HIT_SLOP: hasOwnProperty, GUILD_ITEM_INSET_LEFT: metroRequire, useGuildWrapperSize: closure_7 } = GuildsBarConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { mass: 0.8, damping: 100, stiffness: 150 };
const BAR_SPRING_PHYSICS = { mass: 0.25, damping: 100, stiffness: 200 };
let createStyles = fn(4560);
let closure_12 = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 56;
  }
  const obj = { draggedElement: { opacity: 0 }, selectedBackgroundOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, container: { position: "relative", overflow: "visible" }, unreadIndicator: null, expandedChildrenWrapper: null };
  const size = { position: "absolute", top: num / 2, left: -4, height: 8, width: 8, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.TEXT_STRONG };
  obj.unreadIndicator = size;
  const rect = { position: "absolute", left: num + 16, top: 0, right: 8, height: num, display: "flex", flexDirection: "row", alignItems: "center" };
  obj.expandedChildrenWrapper = rect;
  return obj;
});
createStyles = fn(4560);
let closure_13 = createStyles.createStyles((arg0, arg1, width, height) => {
  const obj = { pressableWrapper: null, itemShape: null, itemShapeSelected: null };
  const size = { position: "relative", paddingTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, paddingLeft, height, width: width + hasOwnProperty.left + hasOwnProperty.right };
  obj.pressableWrapper = size;
  const size1 = { position: "relative", width, height: width, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: null };
  let str = "transparent";
  let str2 = "transparent";
  if (!arg1) {
    str2 = tmp(576).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT;
  }
  size1.backgroundColor = str2;
  obj.itemShape = size1;
  if (arg0) {
    if (!arg1) {
      str = tmp(576).colors.BACKGROUND_SURFACE_HIGH;
    }
    let BACKGROUND_BRAND = str;
  } else {
    BACKGROUND_BRAND = tmp(576).colors.BACKGROUND_BRAND;
  }
  obj.itemShapeSelected = { backgroundColor: BACKGROUND_BRAND };
  return obj;
});
const __initData = { code: "function GuildsBarAnimatedItemWrapperTsx1(values){const{disableEntering,sharedId,id,withSpring,BAR_SPRING_PHYSICS,guildItemSize}=this.__closure;if(disableEntering||sharedId!=null&&sharedId.get()!==id){return{animations:{},initialValues:{}};}return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:8,originY:guildItemSize/2,originX:-12}};}" };
const __initData2 = { code: "function GuildsBarAnimatedItemWrapperTsx2(values){const{withSpring,BAR_SPRING_PHYSICS,transitionState,TransitionStates,cleanUp,runOnJS}=this.__closure;return{animations:{originY:withSpring(values.targetOriginY,BAR_SPRING_PHYSICS,'animate-always'),originX:withSpring(values.targetOriginX,BAR_SPRING_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,BAR_SPRING_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight,originY:values.currentOriginY,originX:values.currentOriginX},callback:function(finished){if(transitionState===TransitionStates.YEETED&&finished&&cleanUp!=null){runOnJS(cleanUp)();}}};}" };
let __initData3 = { code: "function GuildsBarAnimatedItemWrapperTsx3(){const{withSpring,circle,guildItemSelectedBorderRadius,guildItemSize,CORNER_SPRING_PHYSICS}=this.__closure;return{borderRadius:withSpring(!circle?guildItemSelectedBorderRadius:guildItemSize/2,CORNER_SPRING_PHYSICS,'animate-always')};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarAnimatedItemWrapper.tsx");

export default function GuildsBarAnimatedItemWrapper(id) {
  id = id.id;
  const selected = id.selected;
  ({ unread, circle } = id);
  const hint = id.hint;
  let flag = id.draggable;
  ({ children, externalChildren, expandedChildren, config, label } = id);
  if (flag === undefined) {
    flag = false;
  }
  ({ isDragTarget, cutouts } = id);
  if (isDragTarget === undefined) {
    isDragTarget = false;
  }
  const dragState = id.dragState;
  let flag2 = id.isDragPreview;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let num = id.draggedItemSize;
  if (num === undefined) {
    num = 0;
  }
  const overState = id.overState;
  const styles = id.styles;
  ({ accessibilityActions, expanded } = id);
  ({ zIndex, onAccessibilityAction, entering, exiting, layout } = id);
  if (zIndex === undefined) {
    zIndex = 0;
  }
  const sharedId = id.sharedId;
  flag2 = undefined;
  __initData3 = undefined;
  closure_19 = undefined;
  let tmp = num();
  closure_13 = tmp;
  const token = id(circle[6]).useToken(selected(circle[5]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp6 = sharedId(tmp);
  let draggedElement = tmp6;
  const tmp7 = selected(circle[11])(config);
  let obj = id(circle[6]);
  const token1 = id(circle[6]).useToken(selected(circle[5]).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = id(circle[6]);
  class X {
    constructor() {
      obj = closure_0(closure_2[8]);
      if (circle) {
        tmp2 = closure_14;
        num = 2;
        result = closure_14 / 2;
      } else {
        result = closure_16;
      }
      obj1 = { borderRadius: obj.withSpring(result, closure_10, "animate-always") };
      return obj1;
    }
  }
  const obj3 = id(circle[9]);
  X.__closure = { withSpring: id(circle[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: expanded };
  X.__workletHash = 15930523896348;
  X.__initData = __initData3;
  const animatedStyle = obj3.useAnimatedStyle(X);
  const enableHome = hint.useContext(id(circle[12]).HomeDrawerStateContext).enableHome;
  let items = [isDragTarget, dragState, num, overState, zIndex, tmp];
  const memo = hint.useMemo(() => {
    if (isDragTarget) {
      if ("dragging" === dragState) {
        let tmp2 = overState;
        let str2 = "hide";
      }
      if ("drag-target" === str2) {
        num = height + num;
      } else {
        num = 0;
        if ("hide" !== str2) {
          num = height;
        }
      }
      const obj = { height: num, top: null, zIndex: null };
      let num2 = 0;
      if ("drag-target" === str2) {
        if ("before" === tmp2) {
          num2 = num;
        } else {
          num2 = 0;
        }
      }
      const obj2 = { style: null, unreadStyle: null };
      obj.top = num2;
      obj.zIndex = zIndex;
      obj2.style = obj;
      const size = { position: "absolute", width: height, height };
      obj2.unreadStyle = size;
      return obj2;
    }
    if (null != overState) {
      if ("self" !== tmp3) {
        let str5 = "drag-target";
      }
      str2 = str5;
      tmp2 = tmp3;
    }
    str5 = "none";
  }, items);
  const items1 = [styles.pressableWrapper, isDragTarget, tmp6.draggedElement];
  ({ style, unreadStyle } = memo);
  let tmp12 = !unread;
  const memo1 = hint.useMemo(() => {
    const items = [styles.pressableWrapper, , ];
    draggedElement = undefined;
    if (isDragTarget) {
      draggedElement = draggedElement.draggedElement;
    }
    items[1] = draggedElement;
    items[2] = IOS_POINTER_STYLE;
    return items;
  }, items1);
  if (!unread) {
    tmp12 = !selected;
  }
  if (!tmp12) {
    tmp12 = isDragTarget;
  }
  if (!tmp12) {
    tmp12 = flag2;
  }
  flag2 = tmp12;
  const items2 = [tmp12, selected, sharedId, id];
  const memo2 = obj5.useMemo(() => {
    if (!flag2) {
      const obj = { selected, sharedId, id };
      return obj;
    }
  }, items2);
  __initData3 = obj5.useRef(undefined);
  const items3 = [expanded];
  const effect = obj5.useEffect(() => {
    if (undefined !== ref.current) {
      if (tmp.current !== expanded) {
        let AccessibilityAnnouncer = require;
        const intl = util.intl;
        const t = util.t;
        AccessibilityAnnouncer = AccessibilityAnnouncer(4272).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(intl.string(tmp3 ? t.CUnsOR : t.jsudFd));
        tmp.current = tmp3;
        const stringResult = intl.string(tmp3 ? t.CUnsOR : t.jsudFd);
      }
    } else {
      tmp.current = expanded;
    }
  }, items3);
  let tmp15 = null != accessibilityActions;
  if (tmp15) {
    tmp15 = accessibilityActions.length > 0;
  }
  closure_19 = tmp15;
  const items4 = [hint, flag, tmp15];
  const memo3 = obj5.useMemo(() => {
    let tmp = null != hint;
    if (tmp) {
      tmp = arr.length > 0;
    }
    const items = [];
    if (tmp) {
      items.push(arr);
    }
    if (flag) {
      const intl = util.intl;
      items.push(intl.string(util.t.BGMUFB));
    }
    if (closure_19) {
      const intl2 = util.intl;
      items.push(intl2.string(util.t.X2x0MF));
    }
    return items.join(". ");
  }, items4);
  const obj6 = {};
  const obj4 = { withSpring: id(circle[8]).withSpring, circle, guildItemSelectedBorderRadius: token1, guildItemSize: token, CORNER_SPRING_PHYSICS: expanded };
  const merged = Object.assign(tmp7);
  obj6.style = memo1;
  obj6.accessibilityLabel = label;
  obj6.accessible = true;
  obj6.focusable = true;
  obj6.accessibilityRole = "button";
  obj6.accessibilityState = { selected, expanded };
  obj6.hitSlop = isDragTarget;
  let tmp19;
  if (memo3.length > 0) {
    tmp19 = memo3;
  }
  obj6.accessibilityHint = tmp19;
  obj6.collapsable = false;
  obj6.accessibilityActions = accessibilityActions;
  obj6.onAccessibilityAction = onAccessibilityAction;
  const items5 = [externalChildren, , ];
  const obj7 = { pointerEvents: "none", style: unreadStyle, collapsable: false, children: null };
  const tmp4Result = selected(circle[15]);
  obj7.children = overState(id(circle[7]).TransitionItem, { item: memo2, renderItem: flag2 });
  items5[1] = overState(selected(circle[15]), obj7);
  const obj9 = { style: null, cutouts, children: null };
  const items6 = [styles.itemShape, animatedStyle];
  obj9.style = items6;
  const items7 = [tmp6.selectedBackgroundOverlay, ];
  let itemShapeSelected = null;
  const obj8 = { item: memo2, renderItem: flag2 };
  const tmp4Result5 = selected(circle[15]);
  if (selected) {
    itemShapeSelected = styles.itemShapeSelected;
  }
  items7[1] = itemShapeSelected;
  const items8 = [overState(selected(circle[15]), { pointerEvents: "none", style: items7 }), ];
  let tmp24 = !isDragTarget;
  if (!isDragTarget) {
    tmp24 = children;
  }
  items8[1] = tmp24;
  obj9.children = items8;
  items5[2] = styles(id(circle[16]).ClipViewAnimated, obj9);
  obj6.children = items5;
  const tmp4Result6 = selected(circle[15]);
  let container = null;
  const tmp16Result = styles(tmp4Result, obj6);
  if (enableHome) {
    container = tmp6.container;
  }
  const obj10 = { style: null, layout, entering, exiting, collapsable: false, children: null };
  const items9 = [container, style];
  obj10.style = items9;
  const items10 = [tmp16Result, ];
  let tmp20Result = null;
  if (enableHome) {
    const obj11 = {};
    const merged1 = Object.assign(tmp7);
    obj11.style = tmp6.expandedChildrenWrapper;
    obj11.collapsable = false;
    let tmp33 = !isDragTarget;
    if (!isDragTarget) {
      tmp33 = expandedChildren;
    }
    obj11.children = tmp33;
    tmp20Result = tmp20(tmp4(tmp3[15]), obj11);
    const tmp4Result8 = tmp4(tmp3[15]);
  }
  items10[1] = tmp20Result;
  obj10.children = items10;
  return styles(selected(circle[10]), obj10);
};
export const useGuildsBarAnimatedWrapperStyles = function useGuildsBarAnimatedWrapperStyles(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.disableSelectedColor;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.disableBGColor;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  return closure_13(flag, flag2, token, React5());
};
export { UnreadIndicator };
export { renderUnreadIndicator };
