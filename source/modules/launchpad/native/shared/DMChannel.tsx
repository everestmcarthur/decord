// Module ID: 17073
// Function ID: 17074
// Name: shared/DMChannel
// Dependencies: [19, 4788, 21, 4617, 11005, 4606, 576, 16743, 16415, 15380, 11, 5033, 17065, 5174, 16742, 17066, 10198, 7953, 4759, 2]

// Module 17073 (shared/DMChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4617 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11005 */;
import noop from "module_19" /* 19 */;

require = fn;
const UnreadSetting = fn(4788).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
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
  const fontScale = channel(5033).useFontScale();
  const tmp5Result = channel(5033);
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
  const tmp2Result3 = flag(17065);
  obj4.unreadBadge = jsx(flag(17066), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: tmp5(7953).ChannelListLayoutTypes.COMPACT };
    tmp11Result = tmp11(tmp5(10198).ChannelRowPreview, obj6);
  }
  obj4.subtitle = tmp11Result;
  obj4.latestMessageTimestamp = extractTimestampResult;
  obj4.channelName = flag(4759)(channel);
  obj4.fontScale = fontScale;
  obj2.children = flag(16742)(obj4);
  return tmp2Result3(jsx(channel(5174).PressableHighlight, { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor }));
});
