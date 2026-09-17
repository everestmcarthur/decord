// Module ID: 10237
// Function ID: 10238
// Name: ChannelVisibilityUtils
// Dependencies: [7394, 2012, 4461, 2]
// Exports: isChannelCurrentlyVisible

// Module 10237 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7394 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;

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
