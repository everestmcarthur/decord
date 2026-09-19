// Module ID: 9661
// Function ID: 9662
// Name: useIsViewingActivity
// Dependencies: [4772, 9648, 4613, 9645, 504, 2]
// Exports: useIsViewingActivity

// Module 9661 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9645 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9648 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4772 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4613).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4613);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
