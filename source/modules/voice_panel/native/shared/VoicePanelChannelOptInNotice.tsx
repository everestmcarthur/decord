// Module ID: 17197
// Function ID: 17198
// Name: VoicePanelChannelOptInNotice
// Dependencies: [19, 21, 7186, 5640, 5656, 1114, 5662, 13897, 2]

// Module 17197 (VoicePanelChannelOptInNotice)
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 7186 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelChannelOptInNotice.tsx");

export default noop.memo(function VoicePanelChannelOptInNotice(channel) {
  channel = channel.channel;
  const analyticsSection = channel.analyticsSection;
  const items = [channel, analyticsSection];
  const callback = noop.useCallback(() => {
    OptInChannelsActionCreators.setOptInChannel(channel.guild_id, channel.id, true, { section: analyticsSection });
  }, items);
  const obj = { style: channel.style, children: null };
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true };
  const intl = channel(1114).intl;
  obj2.label = intl.string(channel(1114).t["9mysCh"]);
  const intl2 = channel(1114).intl;
  obj2.subLabel = intl2.string(channel(1114).t.PDUCIN);
  const tmp2 = analyticsSection(5640);
  obj2.icon = jsx(channel(5662).TableRowIcon, { IconComponent: channel(13897).ChannelListMagnifyingGlassIcon });
  obj2.onPress = callback;
  obj.children = jsx(channel(5656).TableRow, { label: null, subLabel: null, icon: null, onPress: null, start: true, end: true, arrow: true });
  return <tmp2 style={arg0.style}>{null}</tmp2>;
});
