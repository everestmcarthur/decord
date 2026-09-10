// Module ID: 8226
// Function ID: 8227
// Name: UserProfileActionSheet
// Dependencies: [32, 19, 17, 1957, 2021, 1371, 8186, 7222, 1074, 7165, 21, 4574, 6641, 4310, 1611, 504, 8212, 7176, 7196, 8196, 1935, 8216, 5140, 8227, 8240, 8241, 8242, 8247, 8233, 8252, 8253, 8256, 1477, 5696, 8250, 4509, 4275, 576, 8225, 8257, 8207, 2009, 8213, 1242, 4432, 4541, 1483, 8205, 7164, 1178, 8258, 1114, 4284, 8263, 1115, 7396, 8266, 13017, 13090, 8835, 7168, 13161, 1187, 2]

// Module 8226 (UserProfileActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import isChangelogUserDefault from "isChangelogUser" /* 2009 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import BottomSheetModal from "BottomSheetModal" /* 6641 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7196 */;
import openUserSettings from "openUserSettings" /* 7396 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8205 */;
import UserActionCreators from "UserActionCreators" /* 8207 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8213 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8233 */;
import ProfileFrameDefault from "ProfileFrame" /* 8247 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8250 */;
import ApplicationPresenceUtils from "ApplicationPresenceUtils" /* 8257 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8186 */;

require = fn;
function UseAnimatedPosition(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedPosition2 = BottomSheetModal.useBottomSheet().animatedPosition;
  const fn = function n() {
    return animatedPosition2.get();
  };
  fn.__closure = { value: animatedPosition2 };
  fn.__workletHash = 5684011437075;
  fn.__initData = __initData;
  const fn2 = function o(arg0) {
    return animatedPosition.set(arg0);
  };
  fn2.__closure = { animatedPosition };
  fn2.__workletHash = 15360670503044;
  fn2.__initData = __initData2;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  return null;
}
function ActionSheetAlignedView(animatedPosition) {
  animatedPosition = animatedPosition.animatedPosition;
  const animatedIndex = animatedPosition.animatedIndex;
  const safeAreaTop = animatedPosition.safeAreaTop;
  const fn = function c() {
    const obj = { transform: null, opacity: null };
    const items = [{ translateY: animatedPosition.get() + safeAreaTop }];
    obj.transform = items;
    const obj2 = { translateY: animatedPosition.get() + safeAreaTop };
    value = animatedIndex.get();
    obj.opacity = ReanimatedRexport.interpolate(value, [-1, 0], [0, 1], ReanimatedRexport.Extrapolation.CLAMP);
    return obj;
  };
  let obj = animatedPosition(safeAreaTop[13]);
  fn.__closure = { animatedPosition, safeAreaTop, interpolate: animatedPosition(safeAreaTop[13]).interpolate, animatedIndex, Extrapolation: animatedPosition(safeAreaTop[13]).Extrapolation };
  fn.__workletHash = 16546700050596;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, pointerEvents: "box-none", children: animatedPosition.children };
  let items = [absoluteFill.absoluteFill, animatedStyle];
  obj3.style = items;
  return closure_16(animatedIndex(safeAreaTop[13]).View, obj3);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let UserProfileThemeTypes = fn(7222).UserProfileThemeTypes;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, EMPTY_STRING_SNOWFLAKE_ID: map1, UserSettingsSections: closure_14 } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7165).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4574);
let closure_18 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 }, profileEffect: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1 } });
const __initData = { code: "function UserProfileActionSheetTsx1(){const{value}=this.__closure;return value.get();}" };
const __initData2 = { code: "function UserProfileActionSheetTsx2(prepared){const{animatedPosition}=this.__closure;return animatedPosition.set(prepared);}" };
const __initData3 = { code: "function UserProfileActionSheetTsx3(){const{animatedPosition,safeAreaTop,interpolate,animatedIndex,Extrapolation}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop}],opacity:interpolate(animatedIndex.get(),[-1,0],[0,1],Extrapolation.CLAMP)};}" };
let closure_24 = { code: "function UserProfileActionSheetTsx4(payload,context){const{defaultHandleOnScroll,scrollPosition,animatedScrollableState,SCROLLABLE_STATE}=this.__closure;var _defaultHandleOnScrol;(_defaultHandleOnScrol=defaultHandleOnScroll)===null||_defaultHandleOnScrol===void 0||_defaultHandleOnScrol(payload,context);scrollPosition.set(animatedScrollableState.get()===SCROLLABLE_STATE.LOCKED?0:payload.contentOffset.y);}" };
let __initData4 = { code: "function UserProfileActionSheetTsx5(){const{scrollPosition}=this.__closure;const transform=scrollPosition.get()<=0?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActionSheet.tsx");

export default noop.memo(function UserProfileActionSheet(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  const onClose = userId.onClose;
  ({ openedAt, isPreviewingChanges } = userId);
  ({ messageId, roleId, sessionId, disableCalls, disableMessage, isVoiceContext, location: _location } = userId);
  if (isPreviewingChanges === undefined) {
    isPreviewingChanges = false;
  }
  let flag = userId.showGuildProfile;
  if (flag === undefined) {
    flag = true;
  }
  let prop = userId.sourceAnalyticsLocations;
  if (prop === undefined) {
    prop = [];
  }
  let guild_id;
  let stateFromStores2;
  UserProfileThemeTypes = undefined;
  let analyticsLocations;
  let sharedValue2;
  let first;
  closure_15 = undefined;
  let first1;
  closure_17 = undefined;
  let pendingAvatarDecoration;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let createUserProfileAnalyticsContext;
  closure_22 = undefined;
  let width;
  closure_24 = undefined;
  __initData4 = undefined;
  function handleUserSettingsClose() {
    navigation.goBack();
    const merged = Object.assign(createUserProfileAnalyticsContext);
    showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations });
  }
  let tmp = pendingAvatarDecoration();
  const tmp3 = onClose;
  const sharedValue = userId(onClose[13]).useSharedValue(0);
  let obj = userId(onClose[13]);
  const sharedValue1 = userId(onClose[13]).useSharedValue(-1);
  const top = channelId(onClose[14])().top;
  let obj2 = userId(onClose[13]);
  let items = [guild_id];
  const stateFromStores = userId(onClose[15]).useStateFromStores(items, () => UserStore.getUser(userId));
  let obj3 = userId(onClose[15]);
  const items1 = [top];
  const items2 = [channelId];
  const stateFromStores1 = userId(onClose[15]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId), items2);
  guild_id = undefined;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  let obj5 = userId(onClose[15]);
  const items3 = [stateFromStores];
  stateFromStores2 = userId(tmp3[15]).useStateFromStores(items3, () => {
    let member = null;
    if (null != guild_id) {
      member = GuildMemberStore.getMember(tmp, userId);
    }
    return member;
  });
  let id;
  const tmp2Result = userId(tmp3[15]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = sharedValue2;
  }
  let tmp12;
  if (flag) {
    tmp12 = guild_id;
  }
  const tmp6ResultResult = channelId(tmp3[16])(id, tmp12);
  UserProfileThemeTypes = tmp6ResultResult;
  const items4 = [];
  const tmp6Result = channelId(tmp3[16]);
  const tmp6Result10 = channelId(tmp3[17]);
  items4[HermesBuiltin.arraySpread(prop, 0)] = channelId(tmp3[18]).USER_PROFILE_ACTION_SHEET;
  analyticsLocations = tmp6Result10(items4).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(prop, 0);
  const bottomSheetRef = userId(tmp3[19]).useBottomSheetRef();
  const bottomSheetClose = bottomSheetRef.bottomSheetClose;
  const ref = prop.useRef(null);
  const tmp2Result12 = userId(tmp3[19]);
  sharedValue2 = userId(tmp3[13]).useSharedValue(0);
  const items5 = [sharedValue2];
  const memo = prop.useMemo(() => {
    closure_0 = sharedValue2;
    return (arg0, arg1, arg2) => {
      const scrollEventsHandlersDefault = animatedScrollableState(6641).useScrollEventsHandlersDefault(arg0, arg1, arg2);
      const obj = animatedScrollableState(6641);
      animatedScrollableState = animatedScrollableState(6641).useBottomSheetInternal().animatedScrollableState;
      const handleOnScroll = scrollEventsHandlersDefault.handleOnScroll;
      const obj2 = animatedScrollableState(6641);
      const fn = function s(contentOffset, arg1) {
        if (handleOnScroll != null) {
          tmp(contentOffset, arg1);
        }
        value = animatedScrollableState.get();
        let num = 0;
        if (value !== userId(onClose[12]).SCROLLABLE_STATE.LOCKED) {
          num = contentOffset.contentOffset.y;
        }
        const result = animatedScrollableState.set(num);
      };
      const obj3 = animatedScrollableState(4310);
      fn.__closure = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(6641).SCROLLABLE_STATE };
      fn.__workletHash = 13254130622789;
      fn.__initData = __initData;
      const items = [handleOnScroll, animatedScrollableState];
      const obj5 = {};
      const obj4 = { defaultHandleOnScroll: handleOnScroll, scrollPosition: animatedScrollableState, animatedScrollableState, SCROLLABLE_STATE: animatedScrollableState(6641).SCROLLABLE_STATE };
      const merged = Object.assign(scrollEventsHandlersDefault);
      obj5.handleOnScroll = obj3.useWorkletCallback(fn, items);
      return obj5;
    };
  }, items5);
  const tmp2Result13 = userId(tmp3[13]);
  class V {
    constructor() {
      obj = closure_13;
      if (closure_13.get() <= 0) {
        obj1 = { translateY: null };
        obj1.translateY = obj.get();
        items = [];
        items[0] = obj1;
        items1 = items;
      } else {
        items1 = [];
      }
      return { transform: items1 };
    }
  }
  V.__closure = { scrollPosition: sharedValue2 };
  V.__workletHash = 6237718973214;
  V.__initData = __initData4;
  const animatedStyle = userId(tmp3[13]).useAnimatedStyle(V);
  const tmp21 = isPreviewingChanges(prop.useState(false), 2);
  first = tmp21[0];
  closure_15 = tmp21[1];
  const tmp23 = isPreviewingChanges(prop.useState(0), 2);
  first1 = tmp23[0];
  closure_17 = tmp23[1];
  const callback = prop.useCallback((nativeEvent) => {
    closure_17(Math.floor(nativeEvent.nativeEvent.layout.width));
  }, []);
  const ProfileVisibility = tmp2(tmp3[20]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const tmp2Result14 = userId(tmp3[13]);
  const items6 = [stateFromStores2];
  const stateFromStoresObject = userId(tmp3[15]).useStateFromStoresObject(items6, () => stateFromStores2.getPendingChanges());
  pendingAvatarDecoration = stateFromStoresObject.pendingAvatarDecoration;
  pendingProfileEffect = stateFromStoresObject.pendingProfileEffect;
  pendingProfileFrame = stateFromStoresObject.pendingProfileFrame;
  const tmp2Result15 = userId(tmp3[15]);
  createUserProfileAnalyticsContext = userId(tmp3[21]).useCreateUserProfileAnalyticsContext({ layout: "ACTION_SHEET", sourceSessionId: sessionId, userId, guildId: guild_id, channelId, messageId, roleId, showGuildProfile: flag });
  if (isPreviewingChanges) {
    if (undefined !== pendingProfileFrame) {
      let skuId1;
      if (pendingProfileFrame != null) {
        skuId1 = pendingProfileFrame.skuId;
      }
      let skuId = skuId1;
    }
    const isScreenLandscape = tmp2(tmp3[22]).useIsScreenLandscape();
    let tmp32;
    const tmp2Result17 = tmp2(tmp3[22]);
    if (!isScreenLandscape) {
      tmp32 = skuId;
    }
    const tmp6Result2Result = tmp6(tmp3[23])(tmp32, "UserProfileActionSheet");
    closure_22 = tmp6Result2Result;
    let tmp35;
    const tmp6Result11 = tmp6(tmp3[23]);
    if (!isScreenLandscape) {
      tmp35 = skuId;
    }
    let obj4 = { skuId: tmp35, openedAt, context: createUserProfileAnalyticsContext, analyticsLocations };
    tmp6(tmp3[24])(obj4);
    const tmp6Result12 = tmp6(tmp3[24]);
    const isShopThisLookMobileEnabled = tmp2(tmp3[25]).useIsShopThisLookMobileEnabled("UserProfileActionSheet");
    let tmp39;
    const tmp2Result18 = tmp2(tmp3[25]);
    if (flag) {
      tmp39 = guild_id;
    }
    tmp6(tmp3[26])(userId, tmp39, isShopThisLookMobileEnabled);
    const items7 = [tmp6Result2Result, sharedValue, top, sharedValue1, first1];
    const memo1 = obj8.useMemo(() => {
      let tmp2 = null;
      if (null != closure_22) {
        const obj = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: null };
        const obj2 = { frame: tmp, frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK, profileThemeType: UserProfileThemeTypes.ACTION_SHEET, containerWidth: first1 };
        obj.children = value2(ProfileFrameDefault, obj2);
        tmp2 = value2(ActionSheetAlignedView, obj);
      }
      return tmp2;
    }, items7);
    if (isPreviewingChanges) {
      if (undefined !== pendingProfileEffect) {
        let skuId3;
        if (pendingProfileEffect != null) {
          skuId3 = pendingProfileEffect.skuId;
        }
        let skuId2 = skuId3;
      }
      const tmp43Result = tmp43(skuId2);
      const obj6 = { user: stateFromStores, displayProfile: tmp6ResultResult, pendingThemeColors: null };
      let pendingThemeColors;
      if (isPreviewingChanges) {
        pendingThemeColors = stateFromStoresObject.pendingThemeColors;
      }
      obj6.pendingThemeColors = pendingThemeColors;
      const tmp6Result14 = tmp6(tmp3[30]);
      ({ theme, primaryColor, secondaryColor } = tmp6(tmp3[30])(obj6));
      const tmp6Result5Result = tmp6(tmp3[30])(obj6);
      const size = tmp6(tmp3[32])();
      width = size.width;
      const diff = size.height - tmp2(tmp3[33]).NAV_BAR_HEIGHT_MULTILINE - top;
      const items8 = [isPreviewingChanges, tmp6Result2Result, width];
      const memo2 = obj8.useMemo(() => {
        if (isPreviewingChanges) {
          if (null != closure_22) {
            const _Math = Math;
            const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
            return scaleProfileFrameDefault(tmp, bound).overflowTop;
          }
        }
        return 0;
      }, items8);
      const tmp50 = tmp6(tmp3[31])(closure_15);
      const tmp53 = tmp6(tmp3[35])();
      const token = tmp2(tmp3[36]).useToken(tmp6(tmp3[37]).colors.INTERACTIVE_TEXT_HOVER, theme);
      const obj7 = { userId, user: stateFromStores, channelId, guildId: guild_id, displayProfile: tmp6ResultResult, guildMember: stateFromStores2 };
      const tmp55 = tmp6(tmp3[38])(obj7);
      closure_24 = tmp55;
      const items9 = [stateFromStores, channelId];
      const items10 = [stateFromStores, userId];
      const memo3 = obj8.useMemo(() => {
        let result = null != stateFromStores;
        if (result) {
          result = ApplicationPresenceUtils.shouldDisableUserPresenceInChannel(tmp, channelId);
        }
        return result;
      }, items9);
      const effect = obj8.useEffect(() => {
        if (null == stateFromStores) {
          const user = UserActionCreators.getUser(userId);
        }
      }, items10);
      const items11 = [stateFromStores, guild_id, channelId];
      const effect1 = obj8.useEffect(() => {
        let tmp = null == stateFromStores;
        if (!tmp) {
          let isNonUserBotResult = obj.isNonUserBot();
          if (isNonUserBotResult) {
            isNonUserBotResult = !isChangelogUserDefault(obj.id);
          }
          tmp = isNonUserBotResult;
        }
        if (!tmp) {
          const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId: guild_id, channelId: null };
          const avatarURL = obj.getAvatarURL(guild_id, 80);
          obj2.channelId = channelId;
          maybeFetchUserProfileDefault(obj.id, avatarURL, obj2);
        }
      }, items11);
      const items12 = [tmp55, tmp6ResultResult, guild_id, first, stateFromStores2];
      const effect2 = obj8.useEffect(() => {
        let tmp = first;
        if (!first) {
          tmp = null == closure_11;
        }
        if (!tmp) {
          let tmp6 = null == guild_id;
          if (!tmp6) {
            prop = undefined;
            if (stateFromStores2 != null) {
              prop = stateFromStores2.fullProfileLoadedTimestamp;
            }
            tmp6 = null != prop;
          }
          if (tmp6) {
            AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, closure_24);
            closure_15(true);
          }
        }
      }, items12);
      let skuId4;
      if (pendingAvatarDecoration != null) {
        skuId4 = pendingAvatarDecoration.skuId;
      }
      const items13 = [skuId4, , , ];
      let skuId5;
      if (pendingProfileEffect != null) {
        skuId5 = pendingProfileEffect.skuId;
      }
      items13[1] = skuId5;
      let skuId6;
      if (pendingProfileFrame != null) {
        skuId6 = pendingProfileFrame.skuId;
      }
      items13[2] = skuId6;
      items13[3] = prop;
      const effect3 = obj8.useEffect(() => {
        if (atResult === AnalyticsLocationDefault.COLLECTIBLES_SHOP_PROFILE_PREVIEW) {
          const obj = { type: "Collectibles Shop Details Modal Expanded", location_stack: prop, sku_id: null };
          let skuId;
          if (pendingAvatarDecoration != null) {
            skuId = pendingAvatarDecoration.skuId;
          }
          if (skuId == null) {
            let skuId1;
            if (pendingProfileEffect != null) {
              skuId1 = pendingProfileEffect.skuId;
            }
            skuId = skuId1;
          }
          if (skuId == null) {
            let skuId2;
            if (pendingProfileFrame != null) {
              skuId2 = pendingProfileFrame.skuId;
            }
            skuId = skuId2;
          }
          obj.sku_id = skuId;
          AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj);
          const tmp3Result = AnalyticsUtilsDefault;
        }
      }, items13);
      const items14 = [onClose];
      const effect4 = obj8.useEffect(() => () => {
        if (onClose != null) {
          tmp();
        }
      }, items14);
      const effect5 = obj8.useEffect(() => {
        function handleNavigationChange() {
          key = undefined;
          if (rootNavigationRef != null) {
            const currentRoute = rootNavigationRef.getCurrentRoute();
            if (currentRoute != null) {
              key = currentRoute.key;
            }
          }
          if (key !== key) {
            channelId(onClose[45]).hideAllActionSheets();
            const obj2 = channelId(onClose[45]);
          }
        }
        rootNavigationRef = rootNavigationRef(handleNavigationChange[44]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            let currentRoute = rootNavigationRef.getCurrentRoute();
            let key;
            if (currentRoute != null) {
              key = currentRoute.key;
            }
            rootNavigationRef.addListener("state", handleNavigationChange);
            return () => {
              rootNavigationRef.removeListener("state", handleNavigationChange);
            };
          }
        }
      }, []);
      const tmp2Result19 = tmp2(tmp3[36]);
      __initData4 = tmp2(tmp3[46]).useNavigation();
      if (null == stateFromStores) {
        const obj9 = { value: analyticsLocations, children: null };
        const obj10 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        let fetchStartedAt;
        if (tmp6ResultResult != null) {
          fetchStartedAt = tmp6ResultResult.fetchStartedAt;
        }
        obj10.fetchStartedAt = fetchStartedAt;
        let fetchEndedAt;
        if (tmp6ResultResult != null) {
          fetchEndedAt = tmp6ResultResult.fetchEndedAt;
        }
        obj10.fetchEndedAt = fetchEndedAt;
        let isLoaded;
        if (tmp6ResultResult != null) {
          isLoaded = tmp6ResultResult.isLoaded;
        }
        obj10.isLoaded = isLoaded;
        const obj11 = { children: null };
        const obj12 = { style: { marginTop: 42 }, Illustration: tmp2(tmp3[50]).NoResults, body: null };
        const intl2 = tmp2(tmp3[51]).intl;
        obj12.body = intl2.string(tmp2(tmp3[51]).t.eAn6z2);
        obj11.children = first1(tmp2(tmp3[49]).EmptyState, obj12);
        obj10.children = first1(tmp2(tmp3[48]).BottomSheet, obj11);
        obj9.children = first1(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj10);
        let tmp100Result8 = tmp96(tmp2(tmp3[17]).AnalyticsLocationProvider, obj9);
      } else {
        const obj13 = { theme, primaryColor, secondaryColor, children: null };
        const obj14 = { value: analyticsLocations, children: null };
        const obj15 = { value: createUserProfileAnalyticsContext, openedAt, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
        let fetchStartedAt1;
        if (tmp6ResultResult != null) {
          fetchStartedAt1 = tmp6ResultResult.fetchStartedAt;
        }
        obj15.fetchStartedAt = fetchStartedAt1;
        let fetchEndedAt1;
        if (tmp6ResultResult != null) {
          fetchEndedAt1 = tmp6ResultResult.fetchEndedAt;
        }
        obj15.fetchEndedAt = fetchEndedAt1;
        let isLoaded1;
        if (tmp6ResultResult != null) {
          isLoaded1 = tmp6ResultResult.isLoaded;
        }
        obj15.isLoaded = isLoaded1;
        const obj16 = { ref: bottomSheetRef.bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, maxHeight: diff - memo2, contentStyles: tmp.noPadding, backdropChildren: memo1, animatedIndex: sharedValue1, children: null };
        let tmp100Result = null != tmp6Result2Result;
        if (tmp100Result) {
          const obj17 = { animatedPosition: sharedValue };
          tmp100Result = tmp100(createUserProfileAnalyticsContext, obj17);
        }
        const items15 = [tmp100Result, , , ];
        const obj18 = { gradientHeight: diff, bannerHeight: tmp50 };
        items15[1] = first1(tmp6(tmp3[53]), obj18);
        const obj19 = { scrollsToTop: false, style: tmp.container, contentContainerStyle: null, scrollEventsHandlersHook: null, ref: null, children: null };
        let str2;
        if (isPreviewingChanges) {
          str2 = "none";
        }
        const obj20 = { pointerEvents: str2 };
        obj19.contentContainerStyle = obj20;
        let tmp71;
        if (tmp2Result21.isIOS()) {
          tmp71 = memo;
        }
        obj19.scrollEventsHandlersHook = tmp71;
        obj19.ref = ref;
        const obj21 = { style: tmp.profileContainer, onLayout: callback, children: null };
        const obj22 = {
          user: stateFromStores,
          channel: stateFromStores1,
          displayProfile: tmp6ResultResult,
          disableCalls,
          disableMessage,
          isVoiceContext,
          location: _location,
          disableStatus: memo3,
          scrollViewRef: ref,
          isPreviewingChanges,
          navigateToShop() {
                  return openUserSettings.openUserSettings({ screen: constants2.COLLECTIBLES_SHOP, onClose: handleUserSettingsClose });
                },
          navigateToPremium() {
                  return openUserSettings.openUserSettings({ screen: constants2.PREMIUM, onClose: handleUserSettingsClose });
                },
          showUserProfileActionSheet: function showUserProfileActionSheetWithParams() {
                  const merged = Object.assign(createUserProfileAnalyticsContext);
                  showUserProfileActionSheetDefault({ sourceAnalyticsLocations: analyticsLocations });
                },
          initialSection: userId.initialSection,
          scrollPosition: null
        };
        tmp2Result21 = tmp2(tmp3[54]);
        let tmp73;
        if (tmp2Result22.isIOS()) {
          tmp73 = sharedValue2;
        }
        obj22.scrollPosition = tmp73;
        if (stateFromStores.isNonUserBot()) {
          const obj23 = {};
          let merged = Object.assign(obj22);
          let tmp100Result5 = tmp100(tmp6(tmp3[56]), obj23);
          const tmp6Result15 = tmp6(tmp3[56]);
        } else if (stateFromStores.bot) {
          const obj24 = {};
          const merged1 = Object.assign(obj22);
          tmp100Result5 = tmp100(tmp6(tmp3[57]), obj24);
          const tmp6Result16 = tmp6(tmp3[57]);
        } else {
          const obj25 = {};
          const merged2 = Object.assign(obj22);
          tmp100Result5 = tmp100(tmp6(tmp3[58]), obj25);
          const tmp6Result17 = tmp6(tmp3[58]);
        }
        const items16 = [tmp100Result5, ];
        let tmp100Result6 = null != tmp43Result;
        if (tmp100Result6) {
          const obj26 = { style: null, pointerEvents: "none", children: null };
          const items17 = [tmp.profileEffect, , ];
          const obj27 = { height: diff };
          items17[1] = obj27;
          items17[2] = animatedStyle;
          obj26.style = items17;
          const obj28 = { skuId: tmp43Result.skuId, bannerAdjustment: 0 };
          obj26.children = tmp100(tmp6(tmp3[59]), obj28);
          tmp100Result6 = tmp100(tmp6(tmp3[13]).View, obj26);
        }
        const obj29 = { children: null };
        items16[1] = tmp100Result6;
        obj21.children = items16;
        obj29.children = closure_17(sharedValue1, obj21);
        obj19.children = first1(sharedValue1, obj29);
        items15[2] = first1(tmp2(tmp3[12]).BottomSheetScrollView, obj19);
        let tmp100Result7 = null == tmp6Result2Result;
        if (tmp100Result7) {
          const obj30 = { variant: "floating", tabStyle: null, onPress: null };
          const obj31 = { backgroundColor: token };
          obj30.tabStyle = obj31;
          obj30.onPress = bottomSheetClose;
          tmp100Result7 = tmp100(tmp2(tmp3[60]).ActionSheetHeaderBar, obj30);
        }
        items15[3] = tmp100Result7;
        obj16.children = items15;
        const items18 = [closure_17(tmp2(tmp3[48]).BottomSheet, obj16), , ];
        let tmp101Result = null != tmp6Result2Result;
        if (tmp101Result) {
          const obj32 = { animatedPosition: sharedValue, safeAreaTop: top, animatedIndex: sharedValue1, children: null };
          const obj33 = { frame: tmp6Result2Result, profileThemeType: UserProfileThemeTypes.ACTION_SHEET, frameOrder: tmp2(tmp3[28]).ProfileFrameLayerOrder.FRONT, containerWidth: first1 };
          const items19 = [tmp100(tmp6(tmp3[27]), obj33), ];
          const obj34 = { variant: "floating", tabStyle: null, onPress: null };
          const obj35 = { backgroundColor: token };
          obj34.tabStyle = obj35;
          obj34.onPress = bottomSheetClose;
          items19[1] = tmp100(tmp2(tmp3[60]).ActionSheetHeaderBar, obj34);
          obj32.children = items19;
          tmp101Result = tmp101(width, obj32);
          const tmp6Result18 = tmp6(tmp3[27]);
        }
        items18[1] = tmp101Result;
        if (!isPreviewingChanges) {
          items18[2] = isPreviewingChanges;
          obj15.children = items18;
          obj14.children = tmp101(tmp2(tmp3[21]).UserProfileAnalyticsProvider, obj15);
          obj13.children = tmp100(tmp2(tmp3[17]).AnalyticsLocationProvider, obj14);
          tmp100Result8 = tmp100(tmp2(tmp3[52]).ThemeContextProvider, obj13);
        } else {
          const obj36 = { theme: tmp53, primaryColor: null, secondaryColor: null, children: null };
          const intl = tmp2(tmp3[51]).intl;
          if (setting === tmp2(tmp3[62]).ProfileVisibility.FRIENDS_ONLY) {
            let mNZcD8 = tmp2(tmp3[51]).t.mNZcD8;
          } else {
            mNZcD8 = tmp2(tmp3[51]).t["wSnI/0"];
          }
          const obj37 = { text: intl.string(mNZcD8), isExpanded: true };
          obj36.children = tmp100(tmp2(tmp3[61]).ActionSheetBackdropToast, obj37);
          tmp100(tmp2(tmp3[52]).ThemeContextProvider, obj36);
        }
        tmp2Result22 = tmp2(tmp3[54]);
      }
      return tmp100Result8;
    }
    if (tmp6ResultResult != null) {
      const profileEffect = tmp6ResultResult.profileEffect;
      if (profileEffect != null) {
        skuId2 = profileEffect.skuId;
      }
    }
    const tmp6Result13 = tmp6(tmp3[26]);
  }
  if (tmp6ResultResult != null) {
    const profileFrame = tmp6ResultResult.profileFrame;
    if (profileFrame != null) {
      skuId = profileFrame.skuId;
    }
  }
});
