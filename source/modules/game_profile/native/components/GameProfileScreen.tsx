// Module ID: 8772
// Function ID: 8773
// Name: GameProfileScreen
// Dependencies: [32, 19, 17, 8773, 21, 4606, 576, 5026, 1114, 8255, 8774, 4301, 8777, 7382, 5162, 4343, 8778, 4607, 8779, 8784, 4573, 8801, 7223, 6698, 8802, 8804, 8991, 7227, 2]
// Exports: default

// Module 8772 (GameProfileScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4343 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4573 */;
import timing from "timing" /* 4607 */;
import components_Button_Button from "components/Button/Button" /* 5026 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8777 */;
import getGameProfileStoreWebsiteDataDefault from "getGameProfileStoreWebsiteData" /* 8784 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 8801 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8773 */;

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

require = fn;
function GetButton(onPress) {
  const obj = { variant: "primary", size: "sm", text: null, onPress: null, accessibilityLabel: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.l8JeHg);
  obj.onPress = onPress.onPress;
  const intl2 = util.intl;
  obj.accessibilityLabel = intl2.string(util.t.Vsxqmz);
  return React6(components_Button_Button.Button, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4606);
let obj2 = { loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, scrollView: null, stickyHeader: null };
let obj3 = { flex: 1, justifyContent: "center", alignItems: "center", minHeight: 300, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.scrollView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.stickyHeader = { position: "absolute", top: 0, left: 0, right: 0 };
let closure_10 = createStyles.createStyles(obj2);
let closure_12 = { code: "function GameProfileScreenTsx1(){const{heroHeaderHeight,scrollY,STICKY_HEADER_HEIGHT}=this.__closure;return heroHeaderHeight.get()>0&&scrollY.get()>=heroHeaderHeight.get()-STICKY_HEADER_HEIGHT;}" };
let closure_13 = { code: "function GameProfileScreenTsx2(isVisible,wasVisible){const{stickyHeaderVisible,withTiming}=this.__closure;if(isVisible!==wasVisible){stickyHeaderVisible.set(withTiming(isVisible?1:0,{duration:150}));}}" };
let closure_14 = { code: "function GameProfileScreenTsx3(){const{interpolate,stickyHeaderVisible,STICKY_HEADER_HEIGHT}=this.__closure;return{transform:[{translateY:interpolate(stickyHeaderVisible.get(),[0,1],[-1*STICKY_HEADER_HEIGHT,0])}]};}" };
let closure_15 = { code: "function GameProfileScreenTsx4(){const{scrollY,storeLinksSectionBottomY,STICKY_HEADER_HEIGHT}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get()-STICKY_HEADER_HEIGHT;}" };
let __initData = { code: "function GameProfileScreenTsx5(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileScreen.tsx");

export default function GameProfileScreen(gameId) {
  gameId = gameId.gameId;
  const source = gameId.source;
  const sourceUserId = gameId.sourceUserId;
  let num = gameId.initialScrollOffset;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first2;
  __initData = undefined;
  let gameProfileStoreWebsites;
  let memo;
  let callback2;
  let callback3;
  let tmp = sharedValue();
  const bottomSheetRef1 = gameId(sourceUserId[9]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  let obj = gameId(sourceUserId[9]);
  const tmp6Result = source(sourceUserId[10])(source(sourceUserId[11]).openURL);
  noop = tmp6Result;
  const viewId = num(noop.useState(() => gameId(sourceUserId[12]).generateViewId()), 1)[0];
  let ref = noop.useRef(null);
  const ref1 = noop.useRef(0);
  const tmp6 = source(sourceUserId[10]);
  const tmp8 = num;
  const game = gameId(sourceUserId[13]).useGame(gameId);
  ({ data, isLoading } = game);
  let obj3 = gameId(sourceUserId[13]);
  const tmp14 = num(noop.useState(null), 2);
  const first1 = tmp14[0];
  let name;
  if (data != null) {
    name = data.name;
  }
  let tmp13 = source(sourceUserId[14])(data);
  sharedValue = gameId(sourceUserId[15]).useSharedValue(0);
  let items = [sharedValue];
  const callback = obj2.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const result = sharedValue.set(y);
    ref1.current = y;
  }, items);
  ref = obj2.useRef(false);
  const items1 = [num];
  const callback1 = obj2.useCallback(() => {
    let tmp2 = num > 0;
    if (tmp2) {
      tmp2 = !ref.current;
    }
    if (tmp2) {
      ref.current = true;
      const current = ref.current;
      if (current != null) {
        const obj = { y: num, animated: false };
        current.scrollTo(obj);
      }
    }
  }, items1);
  let id;
  const tmp2Result = gameId(sourceUserId[15]);
  if (data != null) {
    id = data.id;
  }
  source(sourceUserId[16])({ gameId: id, scrollOffsetRef: ref1 });
  const tmp5Result = source(sourceUserId[16]);
  sharedValue1 = gameId(sourceUserId[15]).useSharedValue(0);
  const tmp2Result8 = gameId(sourceUserId[15]);
  sharedValue2 = gameId(sourceUserId[15]).useSharedValue(0);
  const tmp2Result9 = gameId(sourceUserId[15]);
  class U {
    constructor() {
      obj = closure_12;
      tmp = closure_12.get() > 0;
      if (tmp) {
        tmp2 = closure_10;
        value = closure_10.get();
        num = 56;
        tmp = value >= obj.get() - 56;
      }
      return tmp;
    }
  }
  U.__closure = { heroHeaderHeight: sharedValue1, scrollY: sharedValue, STICKY_HEADER_HEIGHT: 56 };
  U.__workletHash = 15395308691297;
  U.__initData = sharedValue1;
  let fn = function j(arg0, arg1) {
    if (arg0 !== arg1) {
      num = 0;
      if (arg0) {
        num = 1;
      }
      const result = sharedValue2.set(timing.withTiming(num, { duration: 150 }));
    }
  };
  const tmp2Result10 = gameId(sourceUserId[15]);
  fn.__closure = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[17]).withTiming };
  fn.__workletHash = 3161097061646;
  fn.__initData = sharedValue2;
  const animatedReaction = tmp2Result10.useAnimatedReaction(U, fn);
  const obj4 = { stickyHeaderVisible: sharedValue2, withTiming: gameId(sourceUserId[17]).withTiming };
  const fn2 = function q() {
    const obj = { transform: null };
    const obj2 = { translateY: ReanimatedRexport.interpolate(sharedValue2.get(), [0, 1], [-56, 0]) };
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  const tmp2Result11 = gameId(sourceUserId[15]);
  fn2.__closure = { interpolate: gameId(sourceUserId[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  fn2.__workletHash = 16452163547712;
  fn2.__initData = sharedValue3;
  const animatedStyle = tmp2Result11.useAnimatedStyle(fn2);
  const obj5 = { interpolate: gameId(sourceUserId[15]).interpolate, stickyHeaderVisible: sharedValue2, STICKY_HEADER_HEIGHT: 56 };
  sharedValue3 = gameId(sourceUserId[15]).useSharedValue(Infinity);
  const tmp8Result = tmp8(noop.useState(false), 2);
  first2 = tmp8Result[0];
  __initData = tmp30;
  const tmp2Result12 = gameId(sourceUserId[15]);
  class X {
    constructor() {
      value = closure_10.get();
      return value > closure_14.get() - 56;
    }
  }
  X.__closure = { scrollY: sharedValue, storeLinksSectionBottomY: sharedValue3, STICKY_HEADER_HEIGHT: 56 };
  X.__workletHash = 14521195063038;
  X.__initData = first2;
  class Q {
    constructor(arg0, arg1) {
      if (gameId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_16;
        tmp4 = obj.runOnJS(closure_16)(gameId);
      }
      return;
    }
  }
  const tmp2Result13 = gameId(sourceUserId[15]);
  Q.__closure = { runOnJS: gameId(sourceUserId[15]).runOnJS, setShowGetButton: tmp8Result[1] };
  Q.__workletHash = 15045914286853;
  Q.__initData = __initData;
  const animatedReaction1 = tmp2Result13.useAnimatedReaction(X, Q);
  const obj6 = { runOnJS: gameId(sourceUserId[15]).runOnJS, setShowGetButton: tmp8Result[1] };
  gameProfileStoreWebsites = gameId(sourceUserId[18]).useGameProfileStoreWebsites(data);
  const items2 = [gameProfileStoreWebsites];
  memo = obj2.useMemo(() => {
    const mapped = gameProfileStoreWebsites.map(getGameProfileStoreWebsiteDataDefault);
    return mapped.filter((item) => null != item);
  }, items2);
  noop.useRef(undefined);
  noop.useRef(null);
  const items3 = [name];
  const effect = obj2.useEffect(() => {
    closure_19.current = name;
  }, items3);
  const items4 = [first1];
  const effect1 = obj2.useEffect(() => {
    closure_20.current = first1;
  }, items4);
  const items5 = [gameId, viewId, source];
  callback2 = obj2.useCallback((action, similarGameId) => {
    const guildIdAndVerifiedFromInvite = GameProfileAnalyticUtils.getGuildIdAndVerifiedFromInvite(ref3.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    const result = GameProfileAnalyticUtils.trackGameProfileAction({ gameName: str, gameId, action, similarGameId, viewId, guildId, isVerified, source });
  }, items5);
  const items6 = [memo, callback2, tmp6Result];
  callback3 = obj2.useCallback(() => {
    if (1 === memo.length) {
      const first = _slicedToArray(arr, 1)[0];
      callback2(first.action);
      closure_4(first.url);
    } else if (arr.length > 1) {
      const obj3 = { key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY, content: null, stackingBehavior: "stack" };
      let str = ref2.current;
      const obj2 = ActionSheetActionCreators;
      const tmp11 = React6;
      if (str == null) {
        str = "";
      }
      const obj = { gameName: str, websiteButtons: arr, trackAction: callback2 };
      obj3.content = tmp11(GameProfileStoreLinksActionSheetDefault, obj);
      obj2.showActionSheet(obj3);
    }
  }, items6);
  const items7 = [gameId, source, sourceUserId, viewId];
  const effect2 = obj2.useEffect(() => {
    const obj2 = { source, viewId, gameId, gameName: null, authorId: null, profileType: null };
    let str = ref2.current;
    if (str == null) {
      str = "";
    }
    obj2.gameName = str;
    obj2.authorId = sourceUserId;
    obj2.profileType = GameProfileAnalyticUtils.GameProfileTypes.FullProfile;
    GameProfileAnalyticUtils.trackGameProfileOpen(obj2);
  }, items7);
  const items8 = [gameId, source, sourceUserId, viewId];
  const effect3 = obj2.useEffect(() => () => {
    const guildIdAndVerifiedFromInvite = gameId(sourceUserId[12]).getGuildIdAndVerifiedFromInvite(ref2.current);
    ({ guildId, isVerified } = guildIdAndVerifiedFromInvite);
    const obj = gameId(sourceUserId[12]);
    const obj3 = { viewId, gameId, gameName: null, playedFriendIds: null, playedFriendsData: null, similarGames: null, guildId: null, isVerified: null };
    let str = ref.current;
    if (str == null) {
      str = "";
    }
    obj3.gameName = str;
    obj3.playedFriendIds = [];
    obj3.playedFriendsData = [];
    let similarGames = ref1.getSimilarGames(gameId);
    if (similarGames == null) {
      similarGames = [];
    }
    obj3.similarGames = similarGames;
    obj3.guildId = guildId;
    obj3.isVerified = isVerified;
    const result = gameId(sourceUserId[12]).trackGameProfileClose(obj3);
  }, items8);
  const items9 = [sharedValue1];
  const items10 = [sharedValue3];
  const callback4 = obj2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items9);
  const items11 = [memo, first2, callback3];
  const callback5 = obj2.useCallback((arg0) => {
    const result = sharedValue3.set(arg0);
  }, items10);
  const memo1 = obj2.useMemo(() => {
    let fn;
    if (memo.length > 0) {
      if (first2) {
        fn = () => first1(closure_11, { onPress });
      }
    }
    return fn;
  }, items11);
  const obj7 = { ref: bottomSheetRef, startExpanded: true, scrollable: true, handleDisabled: true, onExpand: callback1, children: null };
  if (!isLoading) {
    if (null != data) {
      let tmp46 = first1;
      const obj8 = { ref, style: tmp.scrollView, onScroll: callback, children: null };
      const obj9 = { obscured: tmp13, children: null };
      const obj10 = {
        game: data,
        invite: first1,
        viewId,
        source,
        trackAction: callback2,
        onGuildInviteResolved: tmp14[1],
        closeModal() {
              return source(sourceUserId[20]).hideAllActionSheets();
            },
        scrollY: sharedValue,
        websiteButtons: memo,
        onStoreLinksMeasured: callback5,
        onHeaderHeightMeasured: callback4,
        scrollOffsetRef: ref1
      };
      obj9.children = first1(tmp5(tmp3[25]), obj10);
      obj8.children = first1(tmp5(tmp3[24]), obj9);
      let tmp45 = first1(tmp2(tmp3[23]).BottomSheetScrollView, obj8);
      const tmp5Result2 = tmp5(tmp3[24]);
    }
    const items12 = [tmp45, , ];
    const obj11 = { style: null, pointerEvents: "box-none", children: null };
    const items13 = [tmp.stickyHeader, animatedStyle];
    obj11.style = items13;
    const obj12 = { game: data, headerRight: memo1 };
    obj11.children = tmp46(tmp5(tmp3[26]), obj12);
    items12[1] = tmp46(tmp5(tmp3[15]).View, obj11);
    const obj13 = { variant: "overlay", onPress: bottomSheetClose };
    items12[2] = tmp46(tmp2(tmp3[27]).ActionSheetHeaderBar, obj13);
    obj7.children = items12;
    return tmp43(tmp44, obj7);
  }
  const tmp2Result14 = gameId(sourceUserId[18]);
  tmp43 = name;
  tmp45 = first1(viewId, { style: tmp.loadingContainer, children: first1(ref, { animating: true, size: "large" }) });
  tmp46 = first1;
};
