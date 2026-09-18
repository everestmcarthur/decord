// Module ID: 16219
// Function ID: 16220
// Name: VibegrationsChannelRow
// Dependencies: [19, 1074, 1964, 10123, 21, 4560, 576, 1100, 12383, 1114, 3547, 10158, 2]
// Exports: default

// Module 16219 (VibegrationsChannelRow)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import _modDef3547 from "module_3547" /* 3547 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12383 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj2 = { container: { marginVertical: fn(10123).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelRow.tsx");

export default function VibegrationsChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
  }, items);
  if (true === selected) {
    let DEFAULT = id(12383).ChannelModes.SELECTED;
    let tmp5 = id;
  } else {
    DEFAULT = id(12383).ChannelModes.DEFAULT;
    tmp5 = id;
  }
  const obj = { onPress: callback, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp5(1114).intl;
  obj.accessibilityLabel = intl.string(_modDef3547.Xmvb23);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp5(1114).intl;
  obj2.name = intl2.string(_modDef3547.Xmvb23);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp5(12383).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp5(12383).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(10158).MagicWandIcon });
  return <tmp8 onPress={callback} style={closure_7().container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} />;
};
