// Module ID: 17078
// Function ID: 17079
// Name: LaunchPadMembers
// Dependencies: [19, 17, 1957, 2011, 21, 4607, 563, 12281, 16771, 11683, 4603, 1114, 2]

// Module 17078 (LaunchPadMembers)
import useStateFromStores from "useStateFromStores" /* 563 */;
import GuildChannelUserListDefault from "GuildChannelUserList" /* 11683 */;
import PrivateChannelUserListDefault from "PrivateChannelUserList" /* 12281 */;
import ThreadChannelUserListDefault from "ThreadChannelUserList" /* 16771 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_7 = createStyles.createStyles({ wrapper: { minHeight: 16 }, listStyle: { flex: 0 }, emptyWrapper: { padding: 20 }, emptyText: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default noop.memo(function LaunchPadMembers() {
  const tmp = closure_7();
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    channel = channel.getChannel(currentlySelectedChannelId);
    if (null != currentlySelectedChannelId) {
      if (null != channel) {
        if (channel.isPrivate()) {
          const obj = { channelId: currentlySelectedChannelId, type: "private" };
          return obj;
        } else {
          const guild_id = channel.guild_id;
          if (channel.isThread()) {
            const obj2 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
            let obj3 = obj2;
          } else {
            obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
          }
          return obj3;
        }
      }
    }
    return { channelId: "call", type: "add" };
  });
  if ("private" === stateFromStoresObject.type) {
    let obj2 = { style: tmp.wrapper, children: null };
    const obj4 = { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 };
    obj2.children = jsx(PrivateChannelUserListDefault, { channelId: stateFromStoresObject.channelId, listStyleOverride: tmp.listStyle, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    let tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("thread" === stateFromStoresObject.type) {
    const obj6 = { style: tmp.wrapper, children: null };
    const obj7 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
    obj7.listStyleOverride = tmp.listStyle;
    obj6.children = jsx(ThreadChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else if ("guild" === stateFromStoresObject.type) {
    const obj8 = { style: tmp.wrapper, children: null };
    const obj9 = { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 };
    ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
    obj9.listStyleOverride = tmp.listStyle;
    obj8.children = jsx(GuildChannelUserListDefault, { channelId: null, guildId: null, listStyleOverride: null, disableBottomSafeZone: true, insetEnd: 20 }, stateFromStoresObject.channelId);
    tmp8 = <View style={tmp.wrapper}>{null}</View>;
  } else {
    const obj17 = { style: tmp.emptyWrapper, children: null };
    const obj18 = { style: tmp.emptyText, variant: "text-md/semibold", children: null };
    const intl = tmp2(1114).intl;
    obj18.children = intl.string(tmp2(1114).t["+7wtJq"]);
    obj17.children = jsx(tmp2(4603).Text, { style: tmp.emptyText, variant: "text-md/semibold", children: null });
    tmp8 = <View style={tmp.emptyWrapper}>{null}</View>;
  }
  return tmp8;
});
