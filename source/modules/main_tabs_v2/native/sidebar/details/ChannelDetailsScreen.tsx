// Module ID: 16945
// Function ID: 16946
// Name: ChannelDetailsScreen
// Dependencies: [19, 21, 1484, 4469, 16704, 2]

// Module 16945 (ChannelDetailsScreen)
import Link from "Link" /* 1484 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4469 */;
import ChannelDetailsDefault from "ChannelDetails" /* 16704 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default noop.memo((navigation) => {
  navigation = navigation.navigation;
  const route = Link.useRoute();
  const items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  return jsx(ChannelDetailsDefault, { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensionsDefault().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});
