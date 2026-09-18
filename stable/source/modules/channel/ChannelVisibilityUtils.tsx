// Module ID: 10092
// Function ID: 10093
// Name: ChannelVisibilityUtils
// Dependencies: [7280, 2011, 4381, 2]
// Exports: isChannelCurrentlyVisible

// Module 10092 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7280 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/ChannelVisibilityUtils.tsx");

export const isChannelCurrentlyVisible = function isChannelCurrentlyVisible(id) {
  const channelId = SelectedChannelStore.getChannelId(SelectedGuildStore.getGuildId());
  let tmp2 = channelId === id;
  if (!tmp2) {
    tmp2 = ChannelSectionStore.getCurrentSidebarChannelId(channelId) === id;
  }
  return tmp2;
};
