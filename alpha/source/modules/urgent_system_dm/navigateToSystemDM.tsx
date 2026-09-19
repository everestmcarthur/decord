// Module ID: 17892
// Function ID: 17893
// Name: navigateToSystemDM
// Dependencies: [2041, 17891, 5623, 2]
// Exports: default

// Module 17892 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5623 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const SYSTEM_USER = fn(17891).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
