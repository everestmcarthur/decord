// Module ID: 12469
// Function ID: 12470
// Name: useEventsButtonProps
// Dependencies: [19, 4622, 4788, 4789, 504, 9755, 5109, 5621, 9791, 4574, 12470, 1896, 1114, 12474, 2]
// Exports: default

// Module 12469 (useEventsButtonProps)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9755 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4622 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4788 */;

const require = globalThis.__r;

require = fn;
const ReadStateTypes = fn(4789).ReadStateTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx");

export default function useEventsButtonProps(id) {
  _require = id;
  const items = [ReadStateStore];
  const items1 = [id.id];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ hasUnread: ReadStateStore.hasUnread(user.id, ReadStateTypes.GUILD_EVENT), mentionCount: ReadStateStore.getMentionCount(user.id, ReadStateTypes.GUILD_EVENT) }), items1);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  let obj = require("initialize");
  const items2 = [UserGuildSettingsStore];
  const eventsMuted = require("initialize").useStateFromStores(items2, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(user.id));
  const arr4 = useGuildScheduledEventsDefault(id.id);
  const items3 = [id];
  const items4 = [id.id];
  const handlePress = noop.useCallback(() => {
    if (obj.shouldShowMembershipVerificationGate(user.id)) {
      let result = tmp(5621).openMemberVerificationModal(tmp3.id);
      const tmpResult = tmp(5621);
    } else {
      result = tmp(9791).openGuildEventListActionSheet(tmp3);
      const tmpResult2 = tmp(9791);
    }
    return result;
  }, items3);
  const handleLongPress = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(12470, dependencyMap.paths), "UpcomingEventsLongPress-" + user.id, { guildId: user.id });
  }, items4);
  if (arr4.length > 0) {
    const intl2 = tmp(1114).intl;
    const obj3 = { number: arr4.length };
    let name = intl2.formatToPlainString(tmp(1114).t.IBdqSu, obj3);
  } else {
    const intl = tmp(1114).intl;
    name = intl.string(tmp(1114).t.tlopTM);
  }
  let mode = tmp(12474).ChannelModes.DEFAULT;
  let tmp8 = hasUnread;
  if (hasUnread) {
    tmp8 = !eventsMuted;
  }
  if (tmp8) {
    mode = tmp(12474).ChannelModes.UNREAD_IMPORTANT;
  }
  return { hasUnread, mentionCount, mode, name, eventsMuted, handlePress, handleLongPress };
};
