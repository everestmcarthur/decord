// Module ID: 10218
// Function ID: 10219
// Name: ChannelVisibilityUtils
// Dependencies: [7387, 2012, 4461, 2]
// Exports: isChannelCurrentlyVisible

// Module 10218 (ChannelVisibilityUtils)
import ChannelSectionStore from "ChannelSectionStore" /* 7387 */;
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
