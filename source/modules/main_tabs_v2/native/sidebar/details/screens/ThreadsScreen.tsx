// Module ID: 16800
// Function ID: 16801
// Name: ThreadsScreen
// Dependencies: [19, 17, 1957, 1074, 1113, 21, 4605, 576, 7321, 7033, 11294, 4616, 16801, 563, 1484, 2]

// Module 16800 (ThreadsScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7033 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11294 */;
import ThreadListDefault from "ThreadList" /* 16801 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function ThreadsScreen(channel) {
  channel = channel.channel;
  const tmp = closure_9();
  const canStartThread = channel(7321).useCanStartThread(channel);
  const items = [channel];
  const callback = noop.useCallback(() => {
    const result = navigateToThreadCreation.navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  let obj2 = { style: null, children: null };
  const items1 = [tmp.container, channel.style];
  obj2.style = items1;
  const callback1 = noop.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const obj2 = { source: constants.BROWSER };
      channel(dependencyMap[11]).transitionToThread(channel, obj2);
      const obj = channel(dependencyMap[11]);
    }
  }, []);
  const obj3 = { channel, onCreateThreadPress: null, onThreadPress: null, contentContainerStyle: null };
  let tmp10;
  let obj = channel(7321);
  if (canStartThread) {
    tmp10 = callback;
  }
  obj3.onCreateThreadPress = tmp10;
  obj3.onThreadPress = callback1;
  obj3.contentContainerStyle = { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom + nativeDefault.space.PX_16, paddingHorizontal: 16 };
  obj2.children = <tmp9 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />;
  return <tmp8 style={null}>{null}</tmp8>;
}
const View = fn(17).View;
const SearchTypes = fn(1074).SearchTypes;
let closure_7 = fn(1113).OpenThreadAnalyticsLocations;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let obj = { container: { flex: 1 }, screen: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const memoResult = noop.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let channelId;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  const items = [ChannelStore];
  const stateFromStores = channelId(563).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp4 = <ThreadsScreen channel={stateFromStores} />;
  }
  return tmp4;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default noop.memo(() => {
  channelId = channelId(1484).useRoute().params.channelId;
  const obj = channelId(1484);
  const items = [ChannelStore];
  const stateFromStores = channelId(563).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj3 = { style: tmp2.screen, channel: stateFromStores };
    tmp3 = <ThreadsScreen style={tmp2.screen} channel={stateFromStores} />;
  }
  return tmp3;
});
export const SearchTabsThreadScreen = memoResult;
