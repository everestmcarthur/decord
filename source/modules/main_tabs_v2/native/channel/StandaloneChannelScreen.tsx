// Module ID: 16566
// Function ID: 16567
// Name: StandaloneChannelScreen
// Dependencies: [19, 17, 1957, 7878, 1074, 1964, 21, 4574, 576, 1484, 1611, 7886, 504, 1982, 9318, 1114, 4431, 8699, 7879, 7170, 13290, 7889, 11498, 5021, 7236, 4509, 4434, 13301, 7258, 1178, 5139, 16567, 16584, 16602, 16619, 16648, 16654, 11372, 16658, 2]

// Module 16566 (StandaloneChannelScreen)
import nativeDefault from "native" /* 576 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4431 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 7879 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  const navigation = channelId(isNavigationScreen[9]).useNavigation();
  const tmp4 = closure_14();
  const headerWrapper = tmp4;
  const top = guildId(isNavigationScreen[10])().top;
  let obj = channelId(isNavigationScreen[9]);
  const gradientTop = channelId(isNavigationScreen[11]).useGradientTop();
  let items = [, , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const items1 = [navigation, isNavigationScreen];
  const memo = frame.useMemo(() => {
    const items = [headerWrapper.headerWrapper, gradientTop, , , , ];
    let prop;
    if (null != frame) {
      prop = tmp.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp.splitDivider;
    }
    items[3] = splitDivider;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = tmp.splitDividerTop;
    }
    items[4] = splitDividerTop;
    if (null != frame) {
      const obj2 = { marginTop: top, minHeight };
      let obj = obj2;
    } else {
      obj = { paddingTop: top, minHeight: top + minHeight };
    }
    items[5] = obj;
    return items;
  }, items);
  const onPress = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[11]);
  const items2 = [headerWrapper];
  const items3 = [guildId, channelId];
  const stateFromStores = channelId(isNavigationScreen[12]).useStateFromStores(items2, () => {
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp = guild_id;
    }
    return tmp;
  }, items3);
  const items4 = [stateFromStores];
  const obj4 = { IconComponent: null, label: null, action: null };
  const memo1 = frame.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== React6;
    }
    return tmp2;
  }, items4);
  obj4.IconComponent = channelId(isNavigationScreen[14]).ServerIcon;
  const intl = channelId(isNavigationScreen[15]).intl;
  obj4.label = intl.string(channelId(isNavigationScreen[15]).t.WYj55Y);
  obj4.action = function action() {
    NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false });
  };
  const items5 = [obj4];
  if (memo1) {
    const obj5 = {
      triggerOnLongPress: true,
      align: "below",
      items: items5,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.onPress = onPress;
          return closure_2_11(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
        }
    };
    let tmp13Result = tmp11(tmp(tmp2[17]).ContextMenu, obj5);
    let tmp13 = tmp11;
  } else {
    const obj6 = { onPress };
    tmp13Result = tmp11(tmp(tmp2[18]).PressableNavigatorBackIcon, obj6);
    tmp13 = tmp11;
  }
  const obj7 = { style: memo, children: null };
  const items6 = [tmp13(navigation, { style: tmp4.headerBottomBorder }), ];
  if (!channelId.isBackEnabled) {
    const obj9 = { style: tmp4.spacer };
    tmp13Result = tmp13(tmp16, obj9);
  }
  const obj10 = { children: null };
  const obj11 = { children: null };
  const items7 = [tmp13Result, tmp13(guildId(isNavigationScreen[20]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), tmp13(guildId(isNavigationScreen[21]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread })];
  obj11.children = items7;
  items6[1] = closure_12(channelId(isNavigationScreen[19]).LayerScope, obj11);
  obj7.children = items6;
  const items8 = [closure_12(navigation, obj7), frame];
  obj10.children = items8;
  return closure_12(closure_13, obj10);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(7878);
({ MIDNIGHT_BORDER_WIDTH, MIN_HEADER_HEIGHT: metroRequire } = MainTabsV2Constants);
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_7, ME: closure_8, ThemeTypes: closure_9 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4574);
let obj = { container: { flex: 1 }, midnightContainerBorder: { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" }, contentContainer: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDivider: null, splitDividerTop: null, actions: null, spacer: null };
let obj3 = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" };
obj.contentContainer = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.containerEmpty = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj5 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
let obj7 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.top = undefined;
obj7.height = 1;
obj7.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj7;
let obj6 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj.headerWithFadingFrame = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj8 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj9 = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.splitDividerTop = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj10 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj11 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
let obj12 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(function StandaloneChannelScreen(arg0) {
  ({ guildId, channelId } = arg0);
  ({ isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_14();
  dependencyMap = tmp;
  noop = channelId(1484).useNavigation();
  const obj = channelId(1484);
  const isSwipeToMemberListEnabled = channelId(11498).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5021)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(11498);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_7;
  }
  const canSeeOnboardingHome = channelId(7236).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(7236);
  const tmp9 = frame(4509)() === constants.MIDNIGHT;
  closure_4 = tmp9;
  const tmp10 = frame(4434)();
  isChatBesideChannelList = tmp10.isChatBesideChannelList;
  const isChatLockedOpen = tmp10.isChatLockedOpen;
  let items = [frame, tmp9, isChatBesideChannelList, , ];
  ({ container: arr[3], midnightContainerBorder: arr[4] } = tmp);
  const memo = noop.useMemo(() => {
    const items = [closure_2.container, ];
    let prop;
    if (null == frame) {
      if (closure_4) {
        if (!isChatBesideChannelList) {
          prop = tmp.midnightContainerBorder;
        }
      }
    }
    items[1] = prop;
    return items;
  }, items);
  const items1 = [frame, , ];
  ({ contentContainer: arr2[1], splitDivider: arr2[2] } = tmp);
  const memo1 = noop.useMemo(() => {
    const items = [closure_2.contentContainer, ];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_2.splitDivider;
    }
    items[1] = splitDivider;
    return items;
  }, items1);
  const ref = noop.useRef(null);
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = channelId(13301).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  const tmp2Result = channelId(13301);
  const items2 = [isChatBesideChannelList];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  channelId(7258);
  if (null != channelId) {
    if (null != guildId) {
      const obj4 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14 };
      const tmp35 = closure_11(Header, obj4);
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === tmp36.GUILD_HOME) {
            const obj5 = { style: memo, children: null };
            const items4 = [tmp35, ];
            const obj6 = { style: memo1, children: null };
            let tmp33Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp33Result = tmp33(tmp5(16584), obj7);
            }
            obj6.children = tmp33Result;
            items4[1] = tmp33(closure_4, obj6);
            obj5.children = items4;
            return closure_12(closure_4, obj5);
          } else if (channelId === tmp36.MEMBER_SAFETY) {
            const obj8 = { guildId };
            return tmp33(tmp5(16602), obj8);
          } else if (channelId === tmp36.VIBEGRATIONS) {
            const obj9 = { guildId };
            return tmp33(tmp5(16619), obj9);
          } else {
            if (tmp17) {
              if (null != stateFromStores) {
                const obj10 = { style: memo, children: null };
                const items5 = [tmp35, ];
                const obj11 = { style: memo1, children: null };
                const obj12 = { channel: stateFromStores };
                obj11.children = tmp33(tmp5(16648), obj12);
                items5[1] = tmp33(closure_4, obj11);
                obj10.children = items5;
                return closure_12(closure_4, obj10);
              }
            }
            if (showCreateThread) {
              const obj13 = { style: memo1, children: null };
              const items6 = [tmp35, ];
              const obj14 = { channelId, screenIndex };
              items6[1] = tmp33(tmp2(16654).CreateThreadView, obj14);
              obj13.children = items6;
              return tmp18(closure_4, obj13);
            } else {
              const obj15 = { children: null };
              const items7 = [tmp35, ];
              const obj16 = { style: memo1, children: null };
              const obj17 = { guildId, channelId, chatInputRef: ref, screenIndex };
              obj16.children = tmp33(tmp5(11372), obj17);
              items7[1] = tmp33(closure_4, obj16);
              obj15.children = items7;
              const tmp18Result = tmp18(closure_13, obj15);
              if (isSwipeToMemberListEnabled) {
                const obj18 = { style: memo, channelId, screenIndex, isBackEnabled: tmp14, children: tmp18Result };
                let tmp33Result2 = tmp33(tmp5(16658), obj18);
              } else {
                const obj19 = {
                  style: memo,
                  accessible: false,
                  onAccessibilityEscape() {
                                  if (closure_6) {
                                    navigation.goBack();
                                  }
                                },
                  children: tmp18Result
                };
                tmp33Result2 = tmp33(closure_4, obj19);
              }
              return tmp33Result2;
            }
          }
        }
      }
      const obj20 = { style: memo, children: null };
      const items8 = [tmp35, ];
      const obj21 = { style: memo1, children: null };
      const items9 = [closure_11(tmp5(5139), { absolute: true }), ];
      const obj22 = { guildId, gatedChannelId: null };
      let tmp32;
      if (needSubscriptionToAccess) {
        tmp32 = channelId;
      }
      obj22.gatedChannelId = tmp32;
      items9[1] = closure_11(tmp5(16567), obj22);
      obj21.children = items9;
      items8[1] = closure_12(closure_4, obj21);
      obj20.children = items8;
      return closure_12(closure_4, obj20);
    }
  }
  const obj23 = { style: null, children: null };
  const items10 = [memo, tmp.containerEmpty];
  obj23.style = items10;
  const obj24 = { title: null, body: null };
  const intl = tmp2(1114).intl;
  obj24.title = intl.string(channelId(1114).t.ai6Lbr);
  const intl2 = tmp2(1114).intl;
  obj24.body = intl2.string(channelId(1114).t["LTr+x9"]);
  obj23.children = closure_11(channelId(1178).EmptyState, obj24);
  return closure_11(closure_4, obj23);
});
