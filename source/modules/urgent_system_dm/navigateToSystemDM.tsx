// Module ID: 17748
// Function ID: 17749
// Name: navigateToSystemDM
// Dependencies: [1958, 17747, 5499, 2]
// Exports: default

// Module 17748 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5499 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const SYSTEM_USER = fn(17747).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
