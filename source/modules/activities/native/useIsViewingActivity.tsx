// Module ID: 9586
// Function ID: 9587
// Name: useIsViewingActivity
// Dependencies: [4623, 9568, 4464, 9559, 504, 2]
// Exports: useIsViewingActivity

// Module 9586 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9559 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9568 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4623 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4464).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4464);
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
