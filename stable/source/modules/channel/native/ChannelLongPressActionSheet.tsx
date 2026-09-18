// Module ID: 10919
// Function ID: 10920
// Name: ChannelLongPressActionSheet
// Dependencies: [5, 19, 10920, 7330, 1962, 5507, 1961, 7117, 1957, 7527, 1979, 4199, 4575, 4209, 2011, 4741, 1371, 1074, 10921, 21, 8394, 1896, 4767, 1114, 10922, 8180, 4501, 4573, 4713, 4904, 10255, 10924, 4503, 4763, 10936, 3225, 9292, 1100, 10956, 10227, 10037, 9826, 10958, 7113, 4418, 5680, 10960, 8594, 10961, 10962, 10964, 10248, 10249, 10251, 6970, 7110, 9065, 9782, 7119, 7114, 10966, 8631, 5073, 10968, 10969, 5097, 5071, 4527, 10970, 10971, 4761, 8395, 8670, 8635, 6968, 5520, 7380, 4507, 9743, 10634, 7190, 4258, 7162, 7182, 10229, 504, 1965, 7535, 7885, 1935, 5584, 1178, 10972, 10979, 10980, 7198, 1608, 11003, 7200, 2]
// Exports: default

// Module 10919 (ChannelLongPressActionSheet)
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import StageChannelPermissions from "StageChannelPermissions" /* 1965 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import useChannelName from "useChannelName" /* 4713 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7110 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7113 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import ActionSheetRow from "ActionSheetRow" /* 7200 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8180 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8631 */;
import ReportModals from "ReportModals" /* 8635 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9743 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9826 */;
import markChannelUnreadDefault from "markChannelUnread" /* 10251 */;
import showChatGDMCustomizeActionSheetDefault from "showChatGDMCustomizeActionSheet" /* 10924 */;
import ChannelActionSheetUtils from "ChannelActionSheetUtils" /* 10960 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10961 */;
import MessageRequestActionCreators from "MessageRequestActionCreators" /* 10964 */;
import showThreadBrowserModalDefault from "showThreadBrowserModal" /* 10968 */;
import ChannelCollapseActionCreatorsDefault from "ChannelCollapseActionCreators" /* 10969 */;
import hideLaunchPadDefault from "hideLaunchPad" /* 10971 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelSpoilerAgreeStore from "ChannelSpoilerAgreeStore" /* 7330 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5507 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7117 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import CollapsedVoiceChannelStore from "CollapsedVoiceChannelStore" /* 7527 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

require = fn;
function handleVoiceOrStageChannelConnectPress() {
  const self = this;
  const apply = closure_35.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_35 = async function _handleVoiceOrStageChannelConnectPress(arg0) {
  let guildStageVoice = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp2;
            closure_129_0 = guildStageVoice;
            const tmp21 = asyncRequireImpl;
            if (isGuildStageVoiceResult) {
              c2 = 2;
              c3 = 1;
              const obj4 = { value: tmp21(tmp20[20], tmp20.paths), done: false };
              return obj4;
            } else {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: tmp21(tmp20[22], tmp20.paths), done: false };
              return obj5;
            }
            isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              value.openGuildVoiceModal(closure_129_0, "Channel List");
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            value.connectAndOpen(closure_129_0);
          }
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  })();
};
function ChannelLongPressActionSheetConnected(channel) {
  channel = channel.channel;
  const onClose = channel.onClose;
  let guildId;
  let setting;
  let items12;
  const tmp2 = guildId;
  const analyticsLocations = onClose(guildId[82])(onClose(guildId[83]).CHANNEL_LONG_PRESS_MENU).analyticsLocations;
  guildId = channel.getGuildId();
  const tmp5 = channel;
  const tmp3 = onClose(guildId[82]);
  const isFavoritesGuildSelected = channel(guildId[84]).useIsFavoritesGuildSelected();
  let obj = channel(guildId[84]);
  const items = [GuildStore];
  const stateFromStores = channel(guildId[85]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = channel(guildId[85]);
  const items1 = [PermissionStore];
  const stateFromStoresObject = channel(guildId[85]).useStateFromStoresObject(items1, () => ({ canManageChannel: PermissionStore.can(constants7.MANAGE_CHANNELS, channel), canCreateInstantInvite: PermissionStore.can(constants7.CREATE_INSTANT_INVITE, channel), canConnect: PermissionStore.can(constants7.CONNECT, channel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel) }));
  ({ canCreateInstantInvite, canManageChannel, canConnect, canModerateStage } = stateFromStoresObject);
  let obj3 = channel(guildId[85]);
  if (guildId == null) {
    guildId = closure_29;
  }
  const optInEnabledForGuild = channel(guildId[87]).useOptInEnabledForGuild(guildId);
  let obj4 = channel(guildId[87]);
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject1 = tmp5(tmp2[85]).useStateFromStoresObject(items2, () => {
    const obj = { isOptedIn: UserGuildSettingsStore.isChannelOptedIn(guildId, channel.id), isParentOptedIn: null, isPinned: null };
    let tmp = guildId;
    obj.isParentOptedIn = null != channel.parent_id && UserGuildSettingsStore.isChannelOptedIn(tmp, channel.parent_id);
    if (tmp == null) {
      tmp = __initData9;
    }
    obj.isPinned = UserGuildSettingsStore.isFavorite(tmp, channel.id);
    return obj;
  });
  ({ isOptedIn, isPinned, isParentOptedIn } = stateFromStoresObject1);
  let tmp10 = UserGuildSettingsStore;
  const tmp5Result = tmp5(tmp2[85]);
  const items3 = [UserGuildSettingsStore];
  const stateFromStores1 = tmp5(tmp2[85]).useStateFromStores(items3, () => UserGuildSettingsStore.isChannelMuted(guildId, channel.id));
  const tmp5Result13 = tmp5(tmp2[85]);
  const items4 = [ReadStateStore];
  const stateFromStores2 = tmp5(tmp2[85]).useStateFromStores(items4, () => ReadStateStore.hasUnreadOrMentions(channel.id));
  const tmp5Result14 = tmp5(tmp2[85]);
  const canMarkChannelUnread = tmp5(tmp2[53]).useCanMarkChannelUnread(channel);
  const tmp5Result15 = tmp5(tmp2[53]);
  const items5 = [ActiveThreadsStore];
  const stateFromStores3 = tmp5(tmp2[85]).useStateFromStores(items5, () => {
    let hasThreadsForChannelResult = null != guildId;
    if (hasThreadsForChannelResult) {
      hasThreadsForChannelResult = ActiveThreadsStore.hasThreadsForChannel(tmp, channel.id);
    }
    return hasThreadsForChannelResult;
  });
  const tmp5Result16 = tmp5(tmp2[85]);
  const items6 = [CategoryCollapseStore];
  const stateFromStores4 = tmp5(tmp2[85]).useStateFromStores(items6, () => CategoryCollapseStore.isCollapsed(channel.parent_id));
  const tmp5Result17 = tmp5(tmp2[85]);
  const items7 = [CollapsedVoiceChannelStore];
  const stateFromStores5 = tmp5(tmp2[85]).useStateFromStores(items7, () => CollapsedVoiceChannelStore.isCollapsed(channel.id));
  const tmp5Result18 = tmp5(tmp2[85]);
  const items8 = [StageInstanceStore];
  const stateFromStores6 = tmp5(tmp2[85]).useStateFromStores(items8, () => StageInstanceStore.isLive(channel.id));
  const tmp5Result19 = tmp5(tmp2[85]);
  const tmp19 = onClose(tmp2[28])(channel, true);
  const DeveloperMode = tmp5(tmp2[89]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (null != stateFromStores) {
    let obj5 = { guild: stateFromStores, size: tmp5(tmp2[90]).GuildIconSizes.LARGE };
    let tmp23 = jsx(tmp(tmp2[90]), { guild: stateFromStores, size: tmp5(tmp2[90]).GuildIconSizes.LARGE });
    let tmp22 = jsx;
    let tmpResult = tmp(tmp2[90]);
  } else {
    tmp22 = jsx;
    const obj6 = { size: tmp5(tmp2[91]).AvatarSizes.LARGE, channel };
    tmp23 = jsx(tmp5(tmp2[91]).Avatar, { size: tmp5(tmp2[91]).AvatarSizes.LARGE, channel });
  }
  const tmp20 = onClose(tmp2[88])(channel);
  const items9 = [UserStore];
  const stateFromStores7 = tmp5(tmp2[85]).useStateFromStores(items9, () => currentUser.getCurrentUser());
  const tmp5Result20 = tmp5(tmp2[85]);
  const tmp26 = null != stateFromStores7 && channel.isOwner(stateFromStores7.id);
  const items10 = [tmp10];
  const stateFromStores8 = tmp5(tmp2[85]).useStateFromStores(items10, () => UserGuildSettingsStore.isMessagesFavorite(channel.id));
  const tmp5Result21 = tmp5(tmp2[85]);
  const inappropriateConversationsTiers = tmp5(tmp2[92]).useInappropriateConversationsTiers(channel);
  let isTier1;
  if (inappropriateConversationsTiers != null) {
    isTier1 = inappropriateConversationsTiers.isTier1;
  }
  let tmp30 = null != isTier1;
  if (tmp30) {
    let isTier11;
    if (inappropriateConversationsTiers != null) {
      isTier11 = inappropriateConversationsTiers.isTier1;
    }
    tmp30 = !isTier11;
  }
  let isTier2;
  if (inappropriateConversationsTiers != null) {
    isTier2 = inappropriateConversationsTiers.isTier2;
  }
  let tmp33 = null != isTier2;
  if (tmp33) {
    let isTier21;
    if (inappropriateConversationsTiers != null) {
      isTier21 = inappropriateConversationsTiers.isTier2;
    }
    tmp33 = !isTier21;
  }
  const tmp5Result22 = tmp5(tmp2[92]);
  const items11 = [ChannelSpoilerAgreeStore];
  const stateFromStores9 = tmp5(tmp2[85]).useStateFromStores(items11, () => ChannelSpoilerAgreeStore.didAgree(channel.id));
  const tmp5Result23 = tmp5(tmp2[85]);
  const tmp37 = onClose(tmp2[94])(channel);
  if (stateFromStores7 != null) {
    const isStaffResult = stateFromStores7.isStaff();
  }
  closure_129_0 = channel;
  closure_129_1 = stateFromStores1;
  closure_129_2 = isOptedIn;
  closure_129_3 = isPinned;
  closure_129_4 = stateFromStores8;
  closure_129_5 = analyticsLocations;
  const obj7 = { sectionKey: "dm", buttons: [] };
  if (channel.isDM()) {
    let buttons = obj7.buttons;
    const obj8 = { label: null, IconComponent: null, onPress: null };
    let intl = tmp5(tmp2[23]).intl;
    obj8.label = intl.string(tmp5(tmp2[23]).t.LYju5J);
    obj8.IconComponent = tmp5(tmp2[24]).UserCircleIcon;
    obj8.onPress = function onPress() {
      const obj = { userId: channel.getRecipientId(), channelId: channel.id, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(obj);
    };
    buttons.push(obj8);
    if (!isFavoritesGuildSelected) {
      const buttons1 = obj7.buttons;
      const obj9 = { label: null, IconComponent: null, onPress: null };
      let intl2 = tmp5(tmp2[23]).intl;
      obj9.label = intl2.string(tmp5(tmp2[23]).t.jsvgc3);
      obj9.IconComponent = tmp5(tmp2[26]).UserMinusIcon;
      obj9.onPress = function onPress() {
        ChannelActionCreatorsDefault.closePrivateChannel(channel.id, SelectedChannelStore.getCurrentlySelectedChannelId() === channel.id);
      };
      buttons1.push(obj9);
    }
  }
  const obj10 = { sectionKey: "gdm", buttons: [] };
  const obj11 = { sectionKey: "gdm-destructive", buttons: [] };
  if (channel.isGroupDM()) {
    if (!isFavoritesGuildSelected) {
      const buttons2 = obj11.buttons;
      const obj12 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
      let intl3 = tmp5(tmp2[23]).intl;
      obj12.label = intl3.string(tmp5(tmp2[23]).t["26C4oi"]);
      obj12.IconComponent = tmp5(tmp2[26]).UserMinusIcon;
      obj12.onPress = function onPress() {
        const channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
        const intl = util.intl;
        const intl2 = util.intl;
        let formatResult = intl2.format(util.t.SSIVOu, { name: channelName });
        let formatToPlainStringResult1 = intl.formatToPlainString(util.t.hJ5Ap4, { name: channelName });
        if (channel.isManaged()) {
          const intl3 = tmp(1114).intl;
          const obj2 = { name: channelName };
          formatToPlainStringResult1 = intl3.formatToPlainString(tmp(1114).t.hVGjEW, obj2);
          const intl4 = tmp(1114).intl;
          const obj3 = { name: channelName };
          formatResult = intl4.format(tmp(1114).t.IK1Qvs, obj3);
        }
        const formatToPlainStringResult = intl.formatToPlainString(util.t.hJ5Ap4, { name: channelName });
        const obj5 = { title: formatToPlainStringResult1, body: formatResult, confirmText: null, cancelText: null, onConfirm: null };
        const intl5 = tmp(1114).intl;
        obj5.confirmText = intl5.string(util.t.p89ACt);
        const intl6 = tmp(1114).intl;
        obj5.cancelText = intl6.string(util.t.gm1Vej);
        obj5.onConfirm = function onConfirm() {
          onClose(guildId[27]).closePrivateChannel(user.id, currentlySelectedChannelId.getCurrentlySelectedChannelId() === user.id);
        };
        AlertActionCreatorsDefault.show(obj5);
      };
      buttons2.push(obj12);
    }
    const buttons3 = obj10.buttons;
    const obj13 = { label: null, IconComponent: null, onPress: null };
    let intl4 = tmp5(tmp2[23]).intl;
    obj13.label = intl4.string(tmp5(tmp2[23]).t["1r5E+m"]);
    obj13.IconComponent = tmp5(tmp2[30]).PencilIcon;
    obj13.onPress = function onPress() {
      showChatGDMCustomizeActionSheetDefault({ channelId: channel.id });
    };
    buttons3.push(obj13);
    if (tmp26) {
      const buttons4 = obj10.buttons;
      const obj14 = { label: null, IconComponent: null, onPress: null };
      let intl5 = tmp5(tmp2[23]).intl;
      obj14.label = intl5.string(tmp5(tmp2[23]).t.OQ9MKu);
      obj14.IconComponent = tmp5(tmp2[32]).LinkIcon;
      obj14.onPress = function onPress() {
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10936, dependencyMap.paths), { channelId: channel.id });
      };
      buttons4.push(obj14);
    }
  }
  items12 = [];
  if (obj7.buttons.length > 0) {
    items12.push(obj7);
  }
  let tmp45 = isFavoritesGuildSelected;
  if (isFavoritesGuildSelected) {
    tmp45 = null != channel.guild_id;
  }
  if (tmp45) {
    tmp45 = !channel.isCategory();
  }
  if (tmp45) {
    const obj15 = { sectionKey: "go-to-server", buttons: null };
    const obj16 = { label: null, IconComponent: null, onPress: null };
    let intl6 = tmp5(tmp2[23]).intl;
    obj16.label = intl6.string(tmp(tmp2[35])["3KruG3"]);
    obj16.IconComponent = tmp5(tmp2[36]).ServerIcon;
    obj16.onPress = function onPress() {
      router_utils.transitionToGuild(channel.guild_id, channel.id);
    };
    const items13 = [obj16];
    obj15.buttons = items13;
    items12.push(obj15);
  }
  if (null != tmp37) {
    const obj17 = { sectionKey: "favorites-add-to-category", buttons: null };
    const obj18 = { label: tmp37.label, IconComponent: tmp5(tmp2[38]).PlusLargeIcon, onPress: tmp37.perform };
    const items14 = [obj18];
    obj17.buttons = items14;
    items12.push(obj17);
  }
  const tmp48 = onClose(tmp2[39])(onClose(tmp2[93])(channel, "ChannelLongPressActionSheet"));
  if (null != tmp48) {
    const obj19 = { sectionKey: "favorites", buttons: null };
    const items15 = [tmp48];
    obj19.buttons = items15;
    items12.push(obj19);
  }
  const guildId1 = channel.getGuildId();
  closure_129_6 = guildId1;
  const obj20 = { sectionKey: "channel-actions", buttons: [] };
  if (canCreateInstantInvite) {
    canCreateInstantInvite = channel.type !== constants5.GUILD_CATEGORY;
  }
  if (canCreateInstantInvite) {
    const buttons5 = obj20.buttons;
    const obj21 = { label: null, IconComponent: null, onPress: null };
    const intl7 = tmp5(tmp2[23]).intl;
    obj21.label = intl7.string(tmp5(tmp2[23]).t.VINpSK);
    obj21.IconComponent = tmp5(tmp2[40]).GroupPlusIcon;
    obj21.onPress = function onPress() {
      const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, { source: constants6.CONTEXT_MENU });
    };
    buttons5.push(obj21);
  }
  let isThreadResult = isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isThreadResult = null == guildId1;
  }
  if (!isThreadResult) {
    isThreadResult = channel.isThread();
  }
  if (!isThreadResult) {
    if (channel.isCategory()) {
      if (optInEnabledForGuild) {
        const buttons6 = obj20.buttons;
        const push = buttons6.push;
        const obj22 = { label: null, IconComponent: null, onPress: null };
        const intl9 = tmp5(tmp2[23]).intl;
        const string2 = intl9.string;
        const t2 = tmp5(tmp2[23]).t;
        if (isParentOptedIn) {
          obj22.label = string2(t2.jNphKT);
          obj22.IconComponent = tmp5(tmp2[45]).XSmallIcon;
          obj22.onPress = function onPress() {
            if (null != channel.parent_id) {
              const obj = OptInChannelsActionCreators;
              const obj2 = { section: constants3.CHANNEL_ACTION_SHEET };
              obj.setOptInChannel(ChannelSpoilerAgreeStore, tmp.parent_id, false, obj2);
            }
          };
          push(obj22);
        } else {
          if (isOptedIn) {
            let string2Result = string2(t2["3zySTA"]);
          } else {
            string2Result = string2(t2["9mysCh"]);
          }
          obj22.label = string2Result;
          if (isOptedIn) {
            let PlusLargeIcon = tmp5(tmp2[45]).XSmallIcon;
          } else {
            PlusLargeIcon = tmp5(tmp2[38]).PlusLargeIcon;
          }
          obj22.IconComponent = PlusLargeIcon;
          obj22.onPress = function onPress() {
            OptInChannelsActionCreators.setOptInChannel(ChannelSpoilerAgreeStore, channel.id, !guildId, { section: constants3.CHANNEL_ACTION_SHEET });
          };
          push(obj22);
        }
      }
    } else {
      const buttons7 = obj20.buttons;
      const intl8 = tmp5(tmp2[23]).intl;
      const string = intl8.string;
      let t = tmp5(tmp2[23]).t;
      if (isPinned) {
        let stringResult = string(t.M5PWSf);
      } else {
        stringResult = string(t.RMpwZu);
      }
      const obj23 = {
        label: stringResult,
        IconComponent: tmp5(tmp2[42]).PinIcon,
        onPress() {
              OptInChannelsActionCreators.setIsFavorite(ChannelSpoilerAgreeStore, channel.id, !setting, { section: constants3.CHANNEL_ACTION_SHEET });
              if (!setting) {
                const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  const currentRoute = rootNavigationRef.getCurrentRoute();
                  let name;
                  if (currentRoute != null) {
                    name = currentRoute.name;
                  }
                  const currentRoute1 = rootNavigationRef.getCurrentRoute();
                  if (currentRoute1 != null) {
                    const params = currentRoute1.params;
                  }
                  let tmp10 = "guilds" === name;
                  if (tmp10) {
                    guildId = undefined;
                    if (params != null) {
                      guildId = params.guildId;
                    }
                    tmp10 = guildId === ChannelSpoilerAgreeStore;
                  }
                  if (tmp10) {
                    const obj3 = { jumpToChannelId: channel.id };
                    rootNavigationRef.setParams(obj3);
                  }
                }
                const tmpResult = RootNavigationRef;
              }
            }
      };
      t = buttons7.push(obj23);
    }
  }
  let isForumLikeChannelResult = closure_9(channel.type);
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = closure_10(channel.type);
  }
  if (!isForumLikeChannelResult) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (isForumLikeChannelResult) {
    const buttons8 = obj20.buttons;
    const obj24 = { label: null, IconComponent: null, isDestructive: false, onPress: null };
    const intl10 = tmp5(tmp2[23]).intl;
    obj24.label = intl10.string(tmp5(tmp2[23]).t.WqhZss);
    obj24.IconComponent = tmp5(tmp2[32]).LinkIcon;
    obj24.onPress = function onPress() {
      const result = ChannelActionSheetUtils.copyGuildChannelOrThreadLink(channel.guild_id, channel.id);
    };
    buttons8.push(obj24);
  }
  let isPrivateResult = !isFavoritesGuildSelected;
  if (!isFavoritesGuildSelected) {
    isPrivateResult = channel.isPrivate();
  }
  if (!isPrivateResult) {
    const obj25 = { sectionKey: "safety-warning-tooling", buttons: [] };
    if (tmp30) {
      const buttons9 = obj25.buttons;
      const obj26 = { label: null, IconComponent: null, onPress: null };
      const intl12 = tmp5(tmp2[23]).intl;
      obj26.label = intl12.string(tmp5(tmp2[23]).t.EuzCET);
      obj26.IconComponent = tmp5(tmp2[47]).WarningIcon;
      obj26.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
      };
      buttons9.push(obj26);
    }
    if (tmp33) {
      const buttons10 = obj25.buttons;
      const obj27 = { label: null, IconComponent: null, onPress: null };
      const intl13 = tmp5(tmp2[23]).intl;
      obj27.label = intl13.string(tmp5(tmp2[23]).t["tBw/1i"]);
      obj27.IconComponent = tmp5(tmp2[47]).WarningIcon;
      obj27.onPress = function onPress() {
        const result = InappropriateConversationsActionCreators.markAsInappropriateConversation(channel.id, SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2);
      };
      buttons10.push(obj27);
    }
    if (obj25.buttons.length > 0) {
      items12.push(obj25);
    }
    if (true === isStaffResult) {
      if (setting) {
        if (channel.isDM()) {
          const obj28 = { sectionKey: "message-request", buttons: [] };
          if (true !== channel.isMessageRequest) {
            const buttons11 = obj28.buttons;
            const obj29 = { label: null, IconComponent: null, onPress: null };
            const intl14 = tmp5(tmp2[23]).intl;
            obj29.label = intl14.string(tmp5(tmp2[23]).t.L6623r);
            obj29.IconComponent = tmp5(tmp2[49]).InboxIcon;
            obj29.onPress = function onPress() {
              MessageRequestActionCreators.markAsMessageRequest(channel.id);
            };
            buttons11.push(obj29);
          }
          const buttons12 = obj28.buttons;
          const obj30 = { label: null, IconComponent: null, onPress: null };
          const intl15 = tmp5(tmp2[23]).intl;
          obj30.label = intl15.string(tmp5(tmp2[23]).t["85YWlY"]);
          obj30.IconComponent = tmp5(tmp2[49]).InboxIcon;
          obj30.onPress = function onPress() {
            const result = MessageRequestActionCreators.clearMessageRequestState(channel.id);
          };
          buttons12.push(obj30);
          if (obj28.buttons.length > 0) {
            items12.push(obj28);
          }
        }
      }
    }
    if (obj20.buttons.length > 0) {
      items12.push(obj20);
    }
    const obj31 = { sectionKey: "notifications", buttons: [] };
    if (tmp72) {
      const MarkChannelUnreadExperiment = tmp5(tmp2[51]).MarkChannelUnreadExperiment;
      if (MarkChannelUnreadExperiment.getConfig({ location: "channel_action_sheet" }).enabled) {
        if (!stateFromStores2) {
          if (canMarkChannelUnread) {
            const buttons13 = obj31.buttons;
            const obj32 = { label: null, IconComponent: null, onPress: null };
            const intl16 = tmp5(tmp2[23]).intl;
            obj32.label = intl16.string(tmp5(tmp2[23]).t.RpE9k7);
            obj32.IconComponent = tmp5(tmp2[52]).ChatMarkUnreadIcon;
            obj32.onPress = function onPress() {
              markChannelUnreadDefault(channel.id);
            };
            buttons13.push(obj32);
          }
        }
      }
      const buttons14 = obj31.buttons;
      const obj33 = { label: null, IconComponent: null, onPress: null };
      const intl17 = tmp5(tmp2[23]).intl;
      obj33.label = intl17.string(tmp5(tmp2[23]).t.e6RscS);
      obj33.IconComponent = tmp5(tmp2[54]).EyeIcon;
      obj33.onPress = function onPress() {
        ReadStateActionCreators.ackChannel(channel, { section: constants3.CHANNEL_ACTION_SHEET, object: constants2.MARK_CHANNEL_AS_READ_BUTTON, objectType: constants.ACK_MANUAL });
      };
      buttons14.push(obj33);
    }
    if (!closure_12(channel.type)) {
      if (tmp82) {
        const buttons15 = obj31.buttons;
        const obj34 = { label: null, IconComponent: null, disableColor: true, onPress: null };
        const intl25 = tmp5(tmp2[23]).intl;
        obj34.label = intl25.string(tmp5(tmp2[23]).t.h850Ss);
        obj34.IconComponent = tmp5(tmp2[60]).ChannelNotificationIcon;
        obj34.onPress = function onPress() {
          ChannelSettingsActionCreatorsDefault.setSection(constants4.NOTIFICATIONS);
          ChannelSettingsActionCreatorsDefault.open(channel.id);
        };
        buttons15.push(obj34);
      }
      if (obj31.buttons.length > 0) {
        items12.push(obj31);
      }
      const obj35 = { sectionKey: "threads", buttons: [] };
      tmp82 = tmp58(channel.type) || channel.isCategory() || channel.isGuildStageVoice() || channel.isForumLikeChannel();
      if (!tmp85) {
        const buttons16 = obj35.buttons;
        const obj36 = { label: null, IconComponent: null, onPress: null };
        const intl26 = tmp5(tmp2[23]).intl;
        obj36.label = intl26.string(tmp5(tmp2[23]).t.B2panI);
        obj36.IconComponent = tmp5(tmp2[62]).ThreadIcon;
        obj36.onPress = function onPress() {
          showThreadBrowserModalDefault(channel);
        };
        buttons16.push(obj36);
      }
      if (obj35.buttons.length > 0) {
        items12.push(obj35);
      }
      const obj37 = { sectionKey: "voice", buttons: [] };
      tmp85 = channel.isThread() || channel.isForumLikeChannel() || !stateFromStores3 || tmp20;
      if (!tmp89) {
        if (channel.isGuildVocal()) {
          const buttons17 = obj37.buttons;
          const push2 = buttons17.push;
          const obj38 = { label: null, IconComponent: null, onPress: null };
          const intl28 = tmp5(tmp2[23]).intl;
          const string6 = intl28.string;
          const t6 = tmp5(tmp2[23]).t;
          if (isGuildStageVoiceResult) {
            obj38.label = string6(t6["7vb2cc"]);
            obj38.IconComponent = tmp5(tmp2[65]).StageIcon;
            obj38.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
            };
            push2(obj38);
            const buttons18 = obj37.buttons;
            const obj39 = { label: null, IconComponent: null, onPress: null };
            const intl29 = tmp5(tmp2[23]).intl;
            obj39.label = intl29.string(tmp5(tmp2[23]).t.ZXxLQg);
            obj39.IconComponent = tmp5(tmp2[66]).ChatIcon;
            obj39.onPress = function onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10970, dependencyMap.paths), { channel });
              hideLaunchPadDefault();
            };
            buttons18.push(obj39);
          } else {
            obj38.label = string6(t6.ZXxLQg);
            obj38.IconComponent = tmp5(tmp2[66]).ChatIcon;
            obj38.onPress = function onPress() {
              handleVoiceOrStageChannelConnectPress(channel);
              ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
              hideLaunchPadDefault();
            };
            push2(obj38);
          }
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (tmp95) {
          const buttons19 = obj37.buttons;
          const obj40 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl30 = tmp5(tmp2[23]).intl;
          obj40.label = intl30.string(tmp5(tmp2[23]).t.saZaRb);
          obj40.IconComponent = tmp5(tmp2[45]).XSmallIcon;
          obj40.onPress = function onPress() {
            return (async (arg0, value) => {
              if (paths === 2) {
                paths = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  paths = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      paths = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      paths = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      c1 = 1;
                      paths = 1;
                      const obj4 = { value: tmp4(paths[21])(paths[71], paths.paths), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    paths = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    paths = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    value.openEndStageModal(closure_128_0);
                    paths = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp10) {
                  paths = tmp;
                  throw tmp10;
                }
              }
            })();
          };
          buttons19.push(obj40);
        }
        tmp95 = channel.isGuildStageVoice() && stateFromStores6 && canModerateStage;
        if (tmp97) {
          const buttons20 = obj37.buttons;
          const obj41 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
          const intl31 = tmp5(tmp2[23]).intl;
          obj41.label = intl31.string(tmp5(tmp2[23]).t["+78Pfm"]);
          obj41.IconComponent = tmp5(tmp2[72]).FlagIcon;
          obj41.onPress = function onPress() {
            const result = ReportModals.showReportModalForStageChannel(channel);
          };
          buttons20.push(obj41);
        }
        if (obj37.buttons.length > 0) {
          items12.push(obj37);
        }
        if (channel.isSpoilerChannel()) {
          if (stateFromStores9) {
            const obj42 = { sectionKey: "spoiler", buttons: [] };
            const buttons21 = obj42.buttons;
            const obj43 = { label: null, IconComponent: null, onPress: null };
            const intl32 = tmp5(tmp2[23]).intl;
            obj43.label = intl32.string(tmp5(tmp2[23]).t.ix2UVZ);
            obj43.IconComponent = tmp5(tmp2[74]).EyeSlashIcon;
            obj43.onPress = function onPress() {
              GuildActionCreatorsDefault.clearSpoilerAgree(channel.id);
            };
            buttons21.push(obj43);
            items12.push(obj42);
          }
        }
        const obj44 = { sectionKey: "admin-actions", buttons: [] };
        if (canManageChannel) {
          const buttons22 = obj44.buttons;
          const intl33 = tmp5(tmp2[23]).intl;
          const string7 = intl33.string;
          const t7 = tmp5(tmp2[23]).t;
          if (isCategoryResult) {
            let string7Result = string7(t7.zdPFs9);
          } else {
            string7Result = string7(t7["3gUsJb"]);
          }
          const obj45 = {
            label: string7Result,
            IconComponent: tmp5(tmp2[76]).SettingsIcon,
            onPress() {
                      ChannelSettingsActionCreatorsDefault.setSection(constants4.OVERVIEW);
                      ChannelSettingsActionCreatorsDefault.open(channel.id);
                    }
          };
          buttons22.push(obj45);
          isCategoryResult = channel.isCategory();
          if (tmp105) {
            const buttons23 = obj44.buttons;
            const intl34 = tmp5(tmp2[23]).intl;
            const string8 = intl34.string;
            const t8 = tmp5(tmp2[23]).t;
            if (isCategoryResult1) {
              let string8Result = string8(t8["fUYU+j"]);
            } else {
              string8Result = string8(t8.dEaPc4);
            }
            let obj46 = { label: string8Result, IconComponent: null, onPress: null };
            if (channel.isCategory()) {
              let CopyIcon = tmp5(tmp2[38]).PlusLargeIcon;
            } else {
              CopyIcon = tmp5(tmp2[77]).CopyIcon;
            }
            obj46.IconComponent = CopyIcon;
            obj46.onPress = function onPress() {
              let type;
              if (!channel.isCategory()) {
                type = obj2.type;
              }
              guildId = obj2.getGuildId();
              const obj = CreateChannelModalActionCreatorsDefault;
              let id;
              if (!channel.isCategory()) {
                id = obj2.id;
              }
              obj.open(type, guildId, channel.isCategory() ? channel.id : channel.parent_id, id);
            };
            obj46 = buttons23.push(obj46);
            isCategoryResult1 = channel.isCategory();
          }
          tmp105 = tmp58(channel.type) || channel.isForumLikeChannel() || channel.isGuildVoice() || channel.isCategory();
        }
        if (setting) {
          const buttons24 = obj44.buttons;
          const obj47 = { label: null, IconComponent: null, onPress: null };
          const intl35 = tmp5(tmp2[23]).intl;
          obj47.label = intl35.string(tmp5(tmp2[23]).t.gFHI3k);
          obj47.IconComponent = tmp5(tmp2[79]).IdIcon;
          obj47.onPress = function onPress() {
            ClipboardUtils.copy(channel.id);
            ToastUtils.presentIdCopied();
          };
          buttons24.push(obj47);
        }
        if (obj44.buttons.length > 0) {
          items12.push(obj44);
        }
        if (obj10.buttons.length > 0) {
          items12.push(obj10);
        }
        if (obj11.buttons.length > 0) {
          items12.push(obj11);
        }
        let formatToPlainStringResult;
        if (channel.isGroupDM()) {
          const intl36 = tmp5(tmp2[23]).intl;
          const obj48 = { members: channel.recipients.length + 1 };
          formatToPlainStringResult = intl36.formatToPlainString(tmp5(tmp2[23]).t.ABMKx3, obj48);
        }
        const items16 = [items12.length, setting, onClose];
        const effect = items12.useEffect(() => {
          if (!tmp) {
            onClose();
          }
        }, items16);
        const obj49 = { value: analyticsLocations, children: null };
        const obj50 = { showGradient: true, startExpanded: null, header: null, children: null };
        tmp97 = channel.isGuildStageVoice() && stateFromStores6 && canConnect;
        obj50.startExpanded = tmp5(tmp2[96]).isMetaQuest();
        const obj51 = { icon: tmp23, title: tmp19, subtitle: formatToPlainStringResult };
        obj50.header = tmp22(tmp5(tmp2[97]).ActionSheetIconHeader, obj51);
        obj50.children = items12.map((buttons) => {
          const obj = { hasIcons: true, children: null };
          buttons = buttons.buttons;
          obj.children = buttons.map((onPress, index) => {
            onPress = onPress.onPress;
            let str = "default";
            ({ label, IconComponent, iconStyle, trailing, disableColor } = onPress);
            if (onPress.isDestructive) {
              str = "danger";
            }
            return closure_1_33(channel(7200).ActionSheetRow, {
              variant: str,
              label,
              icon: closure_1_33(channel(7200).ActionSheetRow.Icon, { IconComponent, style: iconStyle, disableColor }),
              trailing,
              onPress() {
                if (onPress != null) {
                  tmp();
                }
                onClose();
              }
            }, index);
          });
          return jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: null }, buttons.sectionKey);
        });
        obj49.children = tmp22(tmp5(tmp2[95]).ActionSheet, obj50);
        return tmp22(tmp5(tmp2[82]).AnalyticsLocationProvider, obj49);
      } else {
        const buttons25 = obj37.buttons;
        const intl27 = tmp5(tmp2[23]).intl;
        const string5 = intl27.string;
        let t5 = tmp5(tmp2[23]).t;
        if (stateFromStores5) {
          let string5Result = string5(t5.JYF2Oa);
        } else {
          string5Result = string5(t5.LxzNiu);
        }
        const obj52 = {
          label: string5Result,
          IconComponent: tmp5(tmp2[24]).UserCircleIcon,
          onPress() {
                  ChannelCollapseActionCreatorsDefault.update(channel.id);
                }
        };
        t5 = buttons25.push(obj52);
      }
      tmp89 = closure_10(channel.type) && !stateFromStores4;
    }
    const intl18 = tmp5(tmp2[23]).intl;
    const string4 = intl18.string;
    const t4 = tmp5(tmp2[23]).t;
    if (stateFromStores1) {
      if (channel.isCategory()) {
        const intl24 = tmp5(tmp2[23]).intl;
        let stringResult1 = intl24.string(tmp5(tmp2[23]).t.olaBeG);
        const buttons26 = obj31.buttons;
        const obj53 = {
          label: stringResult1,
          IconComponent: tmp5(tmp2[57]).BellIcon,
          onPress() {
                  guildId = channel.getGuildId();
                  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
                  const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(guildId, channel.id, { muted: !onClose }, NotificationLabel.muted(!onClose));
                }
        };
        buttons26.push(obj53);
      } else if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          stringResult1 = string4Result;
          if (channel.isThread()) {
            const intl22 = tmp5(tmp2[23]).intl;
            stringResult1 = intl22.string(tmp5(tmp2[23]).t["Cq/TzF"]);
          }
        }
      }
      const intl23 = tmp5(tmp2[23]).intl;
      stringResult1 = intl23.string(tmp5(tmp2[23]).t["s5/5fm"]);
      string4Result = string4(t4.OYefme);
    } else {
      if (channel.isCategory()) {
        const intl21 = tmp5(tmp2[23]).intl;
        let stringResult2 = intl21.string(tmp5(tmp2[23]).t.pNMCg2);
      } else {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            stringResult2 = string4Result1;
            if (channel.isThread()) {
              const intl19 = tmp5(tmp2[23]).intl;
              stringResult2 = intl19.string(tmp5(tmp2[23]).t.bUUd8q);
            }
          }
        }
        const intl20 = tmp5(tmp2[23]).intl;
        stringResult2 = intl20.string(tmp5(tmp2[23]).t.LO3kaK);
      }
      const buttons27 = obj31.buttons;
      const obj54 = {
        label: stringResult2,
        IconComponent: tmp5(tmp2[56]).BellSlashIcon,
        onPress() {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (tmp) {
                const obj2 = { channelId: channel.id, initialRouteName: constants.MUTE, source: "channel-long-press-sheet" };
                rootNavigationRef.navigate("sidebar", obj2);
              }
            }
      };
      buttons27.push(obj54);
      string4Result1 = string4(t4.tbeRRJ);
    }
    tmp72 = closure_11(channel.type) || channel.isCategory() || channel.isForumLikeChannel();
  } else {
    const buttons28 = obj20.buttons;
    const intl11 = tmp5(tmp2[23]).intl;
    const string3 = intl11.string;
    let t3 = tmp5(tmp2[23]).t;
    if (stateFromStores8) {
      let string3Result = string3(t3.vDYmad);
    } else {
      string3Result = string3(t3["uKw3A+"]);
    }
    const obj55 = {
      label: string3Result,
      IconComponent: tmp5(tmp2[42]).PinIcon,
      onPress() {
          OptInChannelsActionCreators.setMessagesFavorite(channel.id, !items12);
        }
    };
    t3 = buttons28.push(obj55);
  }
}
const SafetyWarningTypes = fn(10920).SafetyWarningTypes;
const ChannelRecord = fn(1961);
({ isGuildTextChannelType: closure_9, isGuildVocalChannelType: c10, isReadableType: closure_11, isTextChannel: closure_12 } = ChannelRecord);
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_23, AnalyticsObjects: closure_24, AnalyticsSections: closure_25, ChannelSettingsSections: closure_26, ChannelTypes: closure_27, InstantInviteSources: closure_28, NULL_STRING_GUILD_ID: closure_29, Permissions: closure_30, ZERO_STRING_GUILD_ID: items } = Constants);
let closure_32 = fn(10921).ChannelDetailsNavigatorScreens;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel/native/ChannelLongPressActionSheet.tsx");

export default function ChannelLongPressActionSheet(arg0) {
  ({ channelId: require, onClose } = arg0);
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [stateFromStores, onClose];
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      onClose();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores, onClose };
    tmp3 = <ChannelLongPressActionSheetConnected channel={stateFromStores} onClose={onClose} />;
  }
  return tmp3;
};
