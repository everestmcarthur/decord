// Module ID: 13270
// Function ID: 13271
// Name: PrivateChannelHeader
// Dependencies: [19, 17, 1957, 4600, 4209, 1371, 1074, 21, 1178, 4560, 576, 504, 13267, 4713, 1114, 10881, 13271, 4404, 13273, 13276, 2]

// Module 13270 (PrivateChannelHeader)
import nativeDefault from "native" /* 576 */;
import ChannelHeader from "ChannelHeader" /* 13267 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function GroupDmMemberCount(channel) {
  channel = channel.channel;
  let items = [UserStore, PresenceStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const items = [...channel.recipients];
    const currentUser = UserStore.getCurrentUser();
    let str;
    if (currentUser != null) {
      str = currentUser.id;
    }
    if (str == null) {
      str = "0";
    }
    items[tmp] = str;
    return items.reduce((acc, item) => {
      status = status.getStatus(item);
      let num = 0;
      if (status !== constants.INVISIBLE) {
        num = 0;
        if (status !== tmp2.OFFLINE) {
          num = 0;
          if (status !== tmp2.UNKNOWN) {
            num = 1;
          }
        }
      }
      return acc + num;
    }, 0);
  });
  const obj = channel(504);
  return channel(13273).renderMemberCountText(stateFromStores, channel.recipients.length);
}
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelTypes: closure_9, StatusTypes: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.REFRESH_MEDIUM_32];
const createStyles = fn(4560);
let obj = { activityStatusText: { color: nativeDefault.colors.TEXT_MUTED }, groupDMIconAnchor: { marginRight: 12, flexShrink: 0 } };
let closure_15 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.colors.TEXT_MUTED };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default noop.memo(function PrivateChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_15();
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[11]);
  const items1 = [UserStore];
  const stateFromStores1 = channelId(stateFromStores[11]).useStateFromStores(items1, () => {
    let type;
    if (stateFromStores != null) {
      type = obj.type;
    }
    let user;
    if (type === constants.DM) {
      user = UserStore.getUser(obj.getRecipientId());
    }
    return user;
  });
  const obj3 = channelId(stateFromStores[11]);
  const tmp4 = UserStore;
  const items2 = [PresenceStore];
  const stateFromStoresObject = channelId(stateFromStores[11]).useStateFromStoresObject(items2, () => {
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(tmp.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != tmp;
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(tmp.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = PresenceStore.getStatus(tmp.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    let channelName = tmp2(tmp3[13]).computeChannelName(stateFromStores, tmp4, RelationshipStore);
    const tmp2Result = tmp2(tmp3[13]);
  } else {
    const intl = tmp2(tmp3[14]).intl;
    channelName = intl.string(tmp2(tmp3[14]).t.ai6Lbr);
  }
  let tmp10Result = null;
  if (null != stateFromStores1) {
    const obj2 = { userId: stateFromStores1.id, guildId: null, textStyle: null };
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    obj2.guildId = guild_id;
    obj2.textStyle = tmp.activityStatusText;
    tmp10Result = closure_11(screenIndex(tmp3[15]), obj2);
    const tmp12 = screenIndex(tmp3[15]);
  }
  const obj5 = channelId(stateFromStores[11]);
  let isMultiUserDMResult = null != stateFromStores;
  const shouldChannelShowLoadingIndicator = channelId(stateFromStores[16]).useShouldChannelShowLoadingIndicator(channelId);
  if (isMultiUserDMResult) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  if (shouldChannelShowLoadingIndicator) {
    tmp10Result = closure_11(tmp2(tmp3[16]).ChannelHeaderLoadingIndicator, {});
  } else if (isMultiUserDMResult) {
    const obj4 = { channel: stateFromStores };
    tmp10Result = closure_11(GroupDmMemberCount, obj4);
  }
  const intl2 = tmp2(tmp3[14]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[14]).t.UbNmGc, { channelName });
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj6 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = tmp2(tmp3[17]).humanizeStatus(status, obj6);
      const tmp2Result9 = tmp2(tmp3[17]);
    }
  }
  const intl3 = tmp2(tmp3[14]).intl;
  const stringResult = intl3.string(channelId(stateFromStores[14]).t.x87QCk);
  if (null != humanizeStatusResult) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + formatToPlainStringResult + ", " + humanizeStatusResult + ", " + stringResult;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + formatToPlainStringResult + ", " + stringResult;
  }
  if (null != stateFromStores1) {
    const tmp2Result10 = tmp2(tmp3[18]);
    let renderUserAvatarResult = tmp2Result10.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj7 = { style: tmp.groupDMIconAnchor, children: null };
      const obj8 = { channelId, location: "GroupDMChannelHeader", children: null };
      const tmp35 = screenIndex(tmp3[19]);
      obj8.children = tmp2(tmp3[18]).renderGroupDMIcon(stateFromStores);
      obj7.children = closure_11(tmp35, obj8, channelId);
      renderUserAvatarResult = closure_11(View, obj7);
      const tmp2Result11 = tmp2(tmp3[18]);
    } else {
      renderUserAvatarResult = tmp2(tmp3[18]).renderEmptyIcon();
      const tmp2Result12 = tmp2(tmp3[18]);
    }
  }
  const items4 = [renderUserAvatarResult, ];
  const tmp28 = closure_13;
  const tmp2Result8 = channelId(stateFromStores[16]);
  const obj9 = { accessibleTitle: formatToPlainStringResult, subtitle: tmp10Result, disableArrow: !pressable, userId: null, guildId: null };
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  obj9.userId = id;
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  const obj10 = { children: null };
  obj9.guildId = guild_id1;
  items4[1] = channelId(stateFromStores[18]).renderChannelTitle(channelName, obj9);
  obj10.children = items4;
  const tmp28Result = tmp28(closure_12, obj10);
  if (pressable) {
    let num = 44;
    if (null == tmp10Result) {
      num = closure_14;
    }
    const obj11 = { children: null };
    const tmp2Result14 = tmp2(tmp3[18]);
    obj11.children = tmp2Result14.renderTitleWrapper(tmp28Result, callback, combined, num);
    return closure_11(tmp29, obj11);
  } else {
    return tmp28Result;
  }
  const tmp2Result13 = channelId(stateFromStores[18]);
});
