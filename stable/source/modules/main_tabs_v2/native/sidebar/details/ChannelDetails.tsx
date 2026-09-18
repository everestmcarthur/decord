// Module ID: 16627
// Function ID: 16628
// Name: ChannelDetails
// Dependencies: [19, 17, 12343, 1957, 7877, 10921, 21, 576, 4560, 504, 12303, 16628, 7162, 7182, 16626, 4962, 6945, 1611, 1115, 4539, 7475, 12365, 12342, 4296, 4561, 4564, 4974, 12351, 4425, 6655, 16629, 16639, 16731, 16733, 16734, 16735, 4923, 2]

// Module 16627 (ChannelDetails)
import nativeDefault from "native" /* 576 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12342 */;
import SearchActionCreatorsDefault from "SearchActionCreators" /* 12351 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12365 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12343 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const ChannelDetailsStore = fn(7877);
({ deleteChannelDetailsSearchState: closure_7, useChannelDetailsSearchActiveSource: closure_8, useIsChannelDetailsSearchActive: closure_9 } = ChannelDetailsStore);
const ChannelDetailsConstants = fn(10921);
({ SPRING_CHANNEL_HEADER: c10, CHANNEL_DETAILS_TOP_MARGIN } = ChannelDetailsConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4560);
let obj = { detailsContainer: null, information: null, linkedLobby: null, search: null, searchLocked: null, autocompleteSuggestions: null, newHeader: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj3.flex = 1;
obj.detailsContainer = obj3;
obj.information = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, paddingTop: PX_8 };
obj.linkedLobby = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.search = { flex: 1, flexGrow: 1 };
let obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4 };
obj.searchLocked = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.autocompleteSuggestions = { zIndex: 10 };
let obj6 = { marginTop: CHANNEL_DETAILS_TOP_MARGIN, marginBottom: nativeDefault.space.PX_16 };
obj.newHeader = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function ChannelDetailsTsx1(){const{headerHeight,isSearchActive,withTiming,timingFast,withSpring,SPRING_CHANNEL_HEADER}=this.__closure;const height=headerHeight.get();return{position:'relative',pointerEvents:isSearchActive?'none':'auto',opacity:withTiming(isSearchActive?0:1,timingFast,'animate-always'),height:height!=null&&height>=0?withSpring(isSearchActive?0:height,{...SPRING_CHANNEL_HEADER,clamp:{min:0,max:height}}):undefined};}" };
let obj7 = { paddingBottom: nativeDefault.space.PX_12, zIndex: 10 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetails.tsx");

export default noop.memo(function ChannelDetails(channelId) {
  channelId = channelId.channelId;
  const isSearchLocked = channelId.isSearchLocked;
  ({ onBackPress, componentWidth, isShowing } = channelId);
  if (isShowing === undefined) {
    isShowing = true;
  }
  const onChannelDeleted = channelId.onChannelDeleted;
  let flag = channelId.expandTopic;
  if (flag === undefined) {
    flag = false;
  }
  let channelDetailsSearchContext;
  closure_6 = undefined;
  closure_7 = undefined;
  let ref;
  let context;
  let top;
  let sharedValue;
  let tmp = closure_14();
  let obj = channelId;
  let tmp2 = isShowing;
  const items = [closure_6];
  const stateFromStores = channelId(isShowing[9]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [stateFromStores, onChannelDeleted];
  const effect = onChannelDeleted.useEffect(() => {
    if (null == stateFromStores) {
      if (onChannelDeleted != null) {
        tmp();
      }
    }
  }, items1);
  let obj2 = channelId(isShowing[9]);
  channelDetailsSearchContext = obj(tmp2[10]).useChannelDetailsSearchContext(channelId, guild_id);
  const objResult = obj(tmp2[10]);
  const searchSuggestionsGesture = obj(tmp2[11]).useSearchSuggestionsGesture(channelDetailsSearchContext);
  ({ dismissed, setDismissed, onLayoutMeasure } = searchSuggestionsGesture);
  let tmp7 = isSearchLocked;
  const objResult5 = obj(tmp2[11]);
  const tmp9 = context(channelId);
  closure_6 = tmp9;
  const tmp10 = ref(channelId);
  closure_7 = tmp10;
  ref = onChannelDeleted.useRef(null);
  context = onChannelDeleted.useContext(obj(tmp2[14]).SwipeForMemberListContext);
  const tmp8 = isSearchLocked(tmp2[12]);
  const isScreenReaderEnabled = obj(tmp2[15]).useIsScreenReaderEnabled();
  let isAndroidResult = isSearchLocked(tmp2[16])();
  top = isSearchLocked(tmp2[17])().top;
  const items2 = [top, context];
  const memo = onChannelDeleted.useMemo(() => {
    if (!obj.isAndroid()) {
      if (!tmpResult.isIpadOS()) {
        let tmp4 = null;
      }
      return tmp4;
    }
    tmp4 = { paddingTop: top };
  }, items2);
  const layoutEffect = onChannelDeleted.useLayoutEffect(() => channelId(isShowing[20]).trackAppUIViewed(), []);
  const items3 = [tmp9, isSearchLocked, tmp10, channelDetailsSearchContext];
  const effect1 = onChannelDeleted.useEffect(() => {
    if (!isSearchLocked) {
      if ("initial" !== closure_7) {
        const current = ref.current;
        if (closure_6) {
          if (current != null) {
            current.focus();
          }
        } else {
          if (current != null) {
            current.blur();
          }
          if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
            SearchPlatformActionCreatorsDefault.updateSearchQuery(tmp4, (reset) => reset.reset());
            const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(tmp4);
          }
        }
      }
    }
  }, items3);
  const objResult6 = obj(tmp2[15]);
  sharedValue = obj(tmp2[23]).useSharedValue(undefined);
  const items4 = [sharedValue];
  const callback = onChannelDeleted.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > PX_8) {
      value = sharedValue.get();
      let tmp3 = null != value;
      if (tmp3) {
        const _Math = Math;
        tmp3 = Math.abs(height - value) < 0.001;
      }
      if (!tmp3) {
        const result = obj.set(height);
      }
      obj = sharedValue;
    }
  }, items4);
  const objResult7 = obj(tmp2[23]);
  class Q {
    constructor() {
      value = closure_11.get();
      tmp2 = closure_6;
      str = "auto";
      if (closure_6) {
        str = "none";
      }
      obj = { position: "relative", pointerEvents: str, opacity: null, height: null };
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj2 = closure_0(closure_2[24]);
      num = 1;
      if (tmp2) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, tmp3(tmp4[25]).timingFast, "animate-always");
      withSpringResult = undefined;
      if (null != value) {
        num2 = 0;
        if (value >= 0) {
          tmp3Result = tmp3(tmp4[26]);
          num3 = 0;
          if (!tmp2) {
            num3 = value;
          }
          obj1 = {};
          tmp6 = SPRING_CHANNEL_HEADER;
          tmp7 = obj1;
          merged = Object.assign(SPRING_CHANNEL_HEADER);
          range = { min: 0, max: null };
          range.max = value;
          obj1.clamp = range;
          withSpringResult = tmp3Result.withSpring(num3, obj1);
        }
      }
      obj.height = withSpringResult;
      return obj;
    }
  }
  const objResult8 = obj(tmp2[23]);
  Q.__closure = { headerHeight: sharedValue, isSearchActive: tmp9, withTiming: obj(tmp2[24]).withTiming, timingFast: obj(tmp2[25]).timingFast, withSpring: obj(tmp2[26]).withSpring, SPRING_CHANNEL_HEADER: top };
  Q.__workletHash = 8423441529588;
  Q.__initData = __initData;
  const items5 = [channelDetailsSearchContext];
  const animatedStyle = objResult8.useAnimatedStyle(Q);
  const effect2 = onChannelDeleted.useEffect(() => {
    const result = SearchActionCreatorsDefault.initializeAutocomplete(channelDetailsSearchContext);
    const result1 = SearchPlatformActionCreatorsDefault.initializeSearchQuery(channelDetailsSearchContext);
  }, items5);
  const items6 = [channelDetailsSearchContext, isShowing];
  const effect3 = onChannelDeleted.useEffect(() => {
    if (isShowing) {
      const result = SearchActionCreatorsDefault.clearAllSearchMesssages();
      SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
    }
  }, items6);
  const items7 = [channelId, channelDetailsSearchContext];
  const effect4 = onChannelDeleted.useEffect(() => () => {
    const result = isSearchLocked(isShowing[27]).clearAllSearchMesssages();
    closure_7(channelId);
    const obj = isSearchLocked(isShowing[27]);
    isSearchLocked(isShowing[21]).deleteSearchQuery(channelDetailsSearchContext);
  }, items7);
  const items8 = [channelId];
  const effect5 = onChannelDeleted.useEffect(() => {
    const bestActiveInputForChannelId = ChatInputUtils.getBestActiveInputForChannelId(channelId);
    if (bestActiveInputForChannelId != null) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj4 = { value: tmp8(isSearchLocked(tmp2[13]).CHANNEL_DETAILS).analyticsLocations, children: null };
    let obj5 = { gesture: searchSuggestionsGesture.gesture, children: null };
    const obj6 = { style: null, accessibilityViewIsModal: true, onAccessibilityEscape: null, children: null };
    const items9 = [tmp.detailsContainer, memo];
    obj6.style = items9;
    obj6.onAccessibilityEscape = onBackPress;
    let obj7 = { style: null, children: null };
    if (isSearchLocked) {
      const items10 = [, ];
      ({ searchLocked: arr15[0], autocompleteSuggestions: arr15[1] } = tmp);
      obj7.style = items10;
      tmp = tmp7(tmp2[30]);
      const obj8 = { ref, channelId, guildId: guild_id, onSuggestionsLayoutMesure: onLayoutMeasure, onBackPress, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, showBackButton: null };
      if (!isAndroidResult) {
        isAndroidResult = isScreenReaderEnabled;
      }
      if (!isAndroidResult) {
        obj = obj(tmp2[18]);
        isAndroidResult = obj.isAndroid();
      }
      if (isAndroidResult) {
        isAndroidResult = null != onBackPress;
      }
      obj8.showBackButton = isAndroidResult;
      obj7.children = tmp25(tmp, obj8);
      obj7 = [, ];
      obj7[0] = tmp25(tmp27, obj7);
      tmp7 = tmp7(tmp2[31]);
      const obj9 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      tmp2 = tmp25(tmp7, obj9);
      obj7[1] = tmp2;
      obj6.children = obj7;
      let tmp29 = obj6;
      const tmp25Result = tmp25(tmp27, obj7);
    } else {
      obj7[0] = tmp.newHeader;
      const obj10 = { ref, channel: stateFromStores, onBackPress, onSuggestionsLayoutMeasure: onLayoutMeasure, suggestionsDismissed: dismissed, setSuggestionsDismissed: setDismissed, componentWidth };
      const items11 = [tmp25(tmp7(tmp2[32]), obj10), ];
      const obj11 = { style: animatedStyle, children: null };
      const obj12 = { style: tmp.information, onLayout: callback, children: null };
      const obj13 = { channel: stateFromStores };
      const items12 = [tmp25(tmp7(tmp2[33]), obj13), , ];
      const obj14 = { channel: stateFromStores, containerStyle: tmp.linkedLobby };
      items12[1] = tmp25(tmp7(tmp2[34]), obj14);
      let tmp25Result3 = null;
      if (!stateFromStores.isPrivate()) {
        const obj15 = { channel: stateFromStores, textAlign: "left", initialExpanded: flag };
        tmp25Result3 = tmp25(tmp7(tmp2[35]), obj15);
      }
      items12[2] = tmp25Result3;
      obj12.children = items12;
      obj11.children = tmp26(tmp7(tmp2[23]).View, obj12);
      items11[1] = tmp25(tmp7(tmp2[23]).View, obj11);
      obj7[1] = items11;
      const items13 = [tmp26(tmp27, obj7), ];
      const obj16 = { freeze: !isShowing, children: null };
      const obj17 = { style: tmp.search, collapsable: false, children: null };
      const obj18 = { searchContext: channelDetailsSearchContext, width: componentWidth };
      obj17.children = tmp25(tmp7(tmp2[31]), obj18);
      obj16.children = tmp25(tmp27, obj17);
      items13[1] = tmp25(obj(tmp2[36]).Freeze, obj16);
      obj6.children = items13;
      tmp29 = obj6;
    }
    obj5.children = closure_12(stateFromStores, tmp29);
    obj5 = tmp25(obj(tmp2[29]).GestureDetector, obj5);
    obj4.children = obj5;
    sharedValue(obj(tmp2[12]).AnalyticsLocationProvider, obj4);
  }
});
