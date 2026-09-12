// Module ID: 16237
// Function ID: 16238
// Name: FavoritesGuildChannelSortModal
// Dependencies: [19, 16238, 1961, 1074, 21, 16239, 1611, 1114, 16240, 16236, 7103, 2]
// Exports: default

// Module 16237 (FavoritesGuildChannelSortModal)
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16239 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 16240 */;
import noop from "module_19" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16238 */;

require = fn;
const ALL_CHANNEL_TYPES = fn(1961).ALL_CHANNEL_TYPES;
const FAVORITES = fn(1074).FAVORITES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  const effect = noop.useEffect(() => {
    const guild = GuildSettingsModalChannelsStore.initGuild(guildId);
    const items = [...closure_1_5];
    GuildSettingsModalChannelsActionCreatorsDefault.startReordering.apply(items);
    return () => {
      closure_1_1(16239).stopReordering();
      const obj = closure_1_1(16239);
      closure_1_1(16239).terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let items = [bottom];
  const screens = noop.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    const obj2 = { title: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.OGiMXJ);
    obj2.render = function render() {
      const obj = { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(16236).closeFavoritesGuildChannelSortModal };
      return jsx(GuildSettingsModalChannelsDefault, { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(16236).closeFavoritesGuildChannelSortModal });
    };
    obj.FAVORITES_GUILD_CHANNEL_SORT = obj2;
    return obj;
  }, items);
  return jsx(bottom(7103).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};
