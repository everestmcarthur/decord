// Module ID: 17501
// Function ID: 17502
// Name: navigateToSystemDM
// Dependencies: [1957, 17500, 5411, 2]
// Exports: default

// Module 17501 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const SYSTEM_USER = fn(17500).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
