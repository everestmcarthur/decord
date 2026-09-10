// Module ID: 17532
// Function ID: 17533
// Name: navigateToSystemDM
// Dependencies: [1957, 17531, 5425, 2]
// Exports: default

// Module 17532 (navigateToSystemDM)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5425 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const SYSTEM_USER = fn(17531).SYSTEM_USER;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/navigateToSystemDM.tsx");

export default function navigateToSystemDM() {
  const dMFromUserId = ChannelStore.getDMFromUserId(SYSTEM_USER);
  if (null != dMFromUserId) {
    const privateChannel = SelectedChannelActionCreatorsDefault.selectPrivateChannel(dMFromUserId);
  }
};
