// Module ID: 17583
// Function ID: 17584
// Name: navigateToSystemDM
// Dependencies: [1957, 17582, 5463, 2]
// Exports: default

// Module 17583 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5463 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const SYSTEM_USER = fn(17582).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
