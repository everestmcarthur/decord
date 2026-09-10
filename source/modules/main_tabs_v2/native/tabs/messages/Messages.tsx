// Module ID: 16052
// Function ID: 16053
// Name: messages/Messages
// Dependencies: [19, 4566, 5291, 21, 7176, 7196, 4310, 15130, 16053, 16078, 16080, 16081, 16082, 13437, 16083, 1115, 4432, 4431, 5595, 7489, 9, 15129, 1114, 16084, 8848, 576, 16054, 16086, 16088, 16134, 16135, 11927, 2]

// Module 16052 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7489 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5291 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const __initData = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default noop.memo(function Messages(style) {
  let sharedValue;
  let dataKey;
  let sections;
  let externalScrollEventHandler;
  const tmp3 = dataKey(sections[4]);
  const tmp4 = sharedValue;
  sharedValue = sharedValue(sections[6]).useSharedValue(0);
  let obj = sharedValue(sections[6]);
  const youBarTotalHeight = sharedValue(sections[7]).useYouBarTotalHeight();
  const obj2 = sharedValue(sections[7]);
  const youBarTotalHeight1 = sharedValue(sections[7]).useYouBarTotalHeight(-16);
  const obj3 = sharedValue(sections[7]);
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[8])());
  const tmp9 = dataKey(sections[9])();
  dataKey = tmp9.dataKey;
  sections = tmp9.sections;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  const tmp8 = dataKey(sections[8])();
  const config = dataKey(sections[10]).useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(sections[11])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(sections[12])();
  const obj4 = dataKey(sections[10]);
  const commonTriggerPoint = sharedValue(sections[13]).useCommonTriggerPoint(sharedValue(sections[14]).DmGdmListRenderTriggerPoint);
  const items = [dataKey];
  const effect = externalScrollEventHandler.useEffect(() => {
    if (null != dataKey) {
      if (!obj7.isAndroid()) {
        if (!AccessibilityStore.useReducedMotion) {
          const rootNavigationRef = tmp5(4432).getRootNavigationRef();
          let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp2) {
            const tmp5Result4 = tmp5(4431);
            const rootNavigationRef1 = tmp5(4432).getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef1 != null) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp2 = null != tmp5Result4.coerceGuildsRoute(currentRoute);
            const tmp5Result5 = tmp5(4432);
          }
          if (tmp2) {
            const result = tmp5(5595).DeprecatedLayoutAnimation();
            const tmp5Result6 = tmp5(5595);
          }
          const tmp5Result = tmp5(4432);
        }
      }
      obj7 = PlatformUtils;
    }
  }, items);
  const layoutEffect = externalScrollEventHandler.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const reduced = sections.reduce((acc, item) => acc + item, 0);
    TTITrackerDefault.recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const obj5 = sharedValue(sections[13]);
  externalScrollEventHandler = sharedValue(sections[21]).useExternalScrollEventHandler({ id: "messages" });
  const obj6 = sharedValue(sections[21]);
  class O {
    constructor(arg0) {
      result = closure_0.set(style.contentOffset.y);
      tmp2 = closure_3(style.contentOffset.y, style.contentSize.height, style.layoutMeasurement.height);
      return;
    }
  }
  O.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  O.__workletHash = 5461403437592;
  O.__initData = __initData;
  const obj8 = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  let obj7 = sharedValue(sections[6]);
  const intl = sharedValue(sections[22]).intl;
  obj8.accessibilityLabel = intl.string(sharedValue(sections[22]).t.OIgYlQ);
  obj8.data = tmp9;
  obj8.handleScrollAnimated = sharedValue(sections[6]).useAnimatedScrollHandler(O);
  obj8.insetEnd = youBarTotalHeight;
  obj8.listItemHeight = listItemHeight;
  obj8.listItemSizes = listItemSizes;
  obj8.listItemSuggestedFriendHeight = listItemSuggestedFriendHeight;
  obj8.listLeft = listLeft;
  obj8.listRefHappeningNow = ref1;
  obj8.listTop = listTop;
  obj8.recycleItems = recycleItems;
  obj8.scrollIndicatorInsetBottom = youBarTotalHeight1;
  obj8.scrollPosition = sharedValue;
  const obj9 = { value: tmp3(dataKey(sections[5]).MESSAGES).analyticsLocations, children: null };
  const obj10 = { style: style.style, children: null };
  const animatedScrollHandler = sharedValue(sections[6]).useAnimatedScrollHandler(O);
  const obj11 = { backgroundColor: dataKey(sections[25]).colors.PANEL_BG, children: null };
  const items1 = [closure_6(dataKey(sections[26]), { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp9.showFullscreenEmptyState) {
    let tmp20Result = tmp20(tmp(tmp2[27]), {});
  } else {
    if ("legend" === list) {
      let tmp23 = tmp2[28];
    } else {
      tmp23 = "flash" === list ? tmp2[29] : tmp2[30];
    }
    const obj12 = { ref };
    const merged = Object.assign(obj8);
    tmp20Result = tmp20(tmp(tmp23), obj12);
    const tmpResult = tmp(tmp23);
  }
  items1[1] = tmp20Result;
  items1[2] = closure_6(tmp4(sections[31]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  obj11.children = items1;
  obj10.children = closure_7(sharedValue(sections[24]).CutoutBackgroundProvider, obj11);
  obj9.children = closure_6(dataKey(sections[23]), obj10);
  return closure_6(sharedValue(sections[4]).AnalyticsLocationProvider, obj9);
});
