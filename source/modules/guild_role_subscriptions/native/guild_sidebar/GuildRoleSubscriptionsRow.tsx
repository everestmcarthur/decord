// Module ID: 16300
// Function ID: 16301
// Name: GuildRoleSubscriptionsRow
// Dependencies: [19, 1074, 1964, 10246, 21, 4636, 576, 1100, 4603, 16301, 1896, 12508, 1114, 12908, 2]
// Exports: default

// Module 16300 (GuildRoleSubscriptionsRow)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12508 */;
import _modDef12908 from "module_12908" /* 12908 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = { container: { marginVertical: fn(10246).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsRow.tsx");

export default function GuildRoleSubscriptionsRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  importDefault = "role-subscriptions-channel-action-sheet";
  const items1 = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  }, items);
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16301, dependencyMap.paths), c1, {
      guildId: id,
      onClose() {
        c1(dependencyMap[8]).hideActionSheet(closure_1_1);
      }
    });
  }, items1);
  const ChannelModes = id(12508).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp6 = tmp4;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp6 = tmp4;
  }
  const obj = { onPress: callback, onLongPress: callback1, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp6(1114).intl;
  obj.accessibilityLabel = intl.string(tmp6(1114).t["KzCF/6"]);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp6(1114).intl;
  obj2.name = intl2.string(tmp6(1114).t["KzCF/6"]);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp6(12508).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp6(12508).BaseChannelIcon, { disableColor: true, mode: DEFAULT, source: _modDef12908 });
  return <tmp8 onPress={callback} onLongPress={callback1} style={closure_7().container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} />;
};
