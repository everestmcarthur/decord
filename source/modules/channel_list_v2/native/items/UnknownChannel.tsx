// Module ID: 16295
// Function ID: 16296
// Name: UnknownChannel
// Dependencies: [19, 10207, 4788, 21, 4606, 576, 4305, 1114, 4561, 4759, 11005, 16187, 2]

// Module 16295 (UnknownChannel)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4561 */;
import useChannelNameDefault from "useChannelName" /* 4759 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11005 */;
import ChannelItemDefault from "ChannelItem" /* 16187 */;
import noop from "module_19" /* 19 */;

require = fn;
function handlePress() {
  const obj2 = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD", content: null, IconComponent: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["/ZjyYE"]);
  obj2.IconComponent = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open(obj2);
}
const UnreadSetting = fn(4788).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let obj = { container: { marginVertical: fn(10207).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_6 = createStyles.createStyles(obj);
const obj3 = { marginVertical: fn(10207).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
  const tmp2 = useChannelNameDefault(channel);
  const intl = channel(1114).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(1114).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(ChannelItemDefault, { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
});
