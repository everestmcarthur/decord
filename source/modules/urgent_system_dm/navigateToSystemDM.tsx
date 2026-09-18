// Module ID: 17812
// Function ID: 17813
// Name: navigateToSystemDM
// Dependencies: [1958, 17811, 5581, 2]
// Exports: default

// Module 17812 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5581 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const SYSTEM_USER = fn(17811).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
