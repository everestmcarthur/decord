// Module ID: 11797
// Function ID: 11798
// Name: useBatchUpdateChannelSettings
// Dependencies: [19, 7313, 4903, 1074, 573, 504, 7309, 11798, 11795, 2]
// Exports: default

// Module 11797 (useBatchUpdateChannelSettings)
import DispatcherDefault from "Dispatcher" /* 573 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7309 */;
import noop from "module_19" /* 19 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 7313 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4903 */;

const require = globalThis.__r;

require = fn;
const AnalyticsSections = fn(1074).AnalyticsSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(guildId) {
  _require = guildId;
  let items = [UserGuildSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserGuildSettingsStore.getPendingChannelUpdates(closure_0));
  let items1 = [guildId];
  const effect = noop.useEffect(() => {
    DispatcherDefault.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
    return () => {
      stateFromStores(573).dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
    };
  }, items1);
  const items2 = [guildId, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (null != stateFromStores) {
      const result = OptInChannelsActionCreators.updateOptInChannelsBatched(closure_0, tmp);
    }
  }, items2);
  let obj = require("initialize");
  return {
    onChannelClick: noop.useCallback((guildId, channelId, channel) => {
      const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(guildId, channelId);
      let isCollapsedResult = !isChannelOptedInResult;
      if (!isChannelOptedInResult) {
        isCollapsedResult = collapsed.isCollapsed(channel);
      }
      if (isCollapsedResult) {
        isCollapsedResult = null != channel;
      }
      if (isCollapsedResult) {
        guildId(11798).categoryExpand(channel);
        const obj = guildId(11798);
      }
      if (obj2.hasNotSetUpChannelOptIn(guildId)) {
        if (channelId === channel) {
          const obj3 = { include: null };
          const _Set2 = Set;
          const items = [channelId];
          const set = new Set(items);
          obj3.include = set;
          const result = tmp8(11795).optIntoAllChannelsForExistingMember(guildId, obj3);
          const tmp8Result = tmp8(11795);
        } else {
          const obj4 = { exclude: null };
          const _Set = Set;
          const items1 = [channelId];
          const set1 = new Set(items1);
          obj4.exclude = set1;
          const result1 = tmp8(11795).optIntoAllChannelsForExistingMember(guildId, obj4);
          const tmp8Result3 = tmp8(11795);
        }
      } else {
        const tmp8Result4 = tmp8(7309);
        const obj5 = { section: constants.CHANNEL_BROWSER };
        const result2 = tmp8Result4.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj5);
      }
    }, [])
  };
};
