// Module ID: 17591
// Function ID: 17592
// Name: navigateToSystemDM
// Dependencies: [1957, 17590, 5461, 2]
// Exports: default

// Module 17591 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5461 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const SYSTEM_USER = fn(17590).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
