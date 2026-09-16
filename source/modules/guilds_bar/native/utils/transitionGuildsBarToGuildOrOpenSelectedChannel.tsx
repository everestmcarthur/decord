// Module ID: 16439
// Function ID: 16440
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [2012, 4459, 1074, 4496, 4495, 4649, 7452, 2]
// Exports: default

// Module 16439 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import RootNavigationRef from "RootNavigationRef" /* 4496 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4459 */;

require = fn;
const ME = fn(1074).ME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    const coerceGuildsRouteResult = tmp(4495).coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    let drawerOpen;
    if (coerceGuildsRouteResult != null) {
      const params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (true !== drawerOpen) {
      let tmp7 = null;
      if (arg0 !== ME) {
        tmp7 = arg0;
      }
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      let tmp10;
      if (guildId === tmp7) {
        const channelId = SelectedChannelStore.getChannelId(arg0, false);
        tmp10 = channelId;
      }
      tmp4 = tmp10;
    }
    const tmpResult = tmp(4495);
  }
  if (null != tmp4) {
    tmp(4649).transitionToChannel(tmp4);
    const tmpResult3 = tmp(4649);
  } else {
    tmp(7452).transitionToGuild(arg0);
    const tmpResult4 = tmp(7452);
  }
};
