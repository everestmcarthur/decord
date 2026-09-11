// Module ID: 17074
// Function ID: 17075
// Name: shared/DMChannel
// Dependencies: [19, 4789, 21, 4618, 11007, 4607, 576, 16743, 16415, 15380, 11, 5034, 17066, 5175, 16742, 17067, 10200, 7954, 4760, 2]

// Module 17074 (shared/DMChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4618 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11007 */;
import noop from "module_19" /* 19 */;

require = fn;
const UnreadSetting = fn(4789).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default noop.memo(function DMChannel(navigationReplace) {
  ({ channel, muted } = navigationReplace);
  if (muted === undefined) {
    muted = false;
  }
  let flag = navigationReplace.navigationReplace;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const tmp4 = flag(16743)();
  const baseChannelUnreadBadgeState = channel(16415).useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(15380)(channel, { unread });
  let extractTimestampResult;
  if (null != tmp7) {
    extractTimestampResult = tmp2(11).extractTimestamp(tmp7.id);
    const tmp2Result = tmp2(11);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  const obj = channel(16415);
  const fontScale = channel(5034).useFontScale();
  const tmp5Result = channel(5034);
  const obj2 = { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj2.style = items;
  const obj3 = { onPress: null, onLongPress: null };
  const items1 = [channel.id, flag];
  obj3.onPress = noop.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id, { navigationReplace: flag });
  }, items1);
  const items2 = [channel.id];
  obj3.onLongPress = noop.useCallback(() => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id), items2);
  const merged = Object.assign(obj3);
  const obj4 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: null, latestMessageTimestamp: null, channelName: null, fontScale: null };
  const tmp2Result3 = flag(17066);
  obj4.unreadBadge = jsx(flag(17067), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: tmp5(7954).ChannelListLayoutTypes.COMPACT };
    tmp11Result = tmp11(tmp5(10200).ChannelRowPreview, obj6);
  }
  obj4.subtitle = tmp11Result;
  obj4.latestMessageTimestamp = extractTimestampResult;
  obj4.channelName = flag(4760)(channel);
  obj4.fontScale = fontScale;
  obj2.children = flag(16742)(obj4);
  return tmp2Result3(jsx(channel(5175).PressableHighlight, { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor }));
});
