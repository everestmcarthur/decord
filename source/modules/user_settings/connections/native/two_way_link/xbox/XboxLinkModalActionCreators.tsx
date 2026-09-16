// Module ID: 9360
// Function ID: 9361
// Name: XboxLinkModalActionCreators
// Dependencies: [4841, 9361, 1897, 2]

// Module 9360 (XboxLinkModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

let c3 = "USER_SETTINGS_CONNECTIONS_XBOX_LINK_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9361, dependencyMap.paths), { locationStack }, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};
