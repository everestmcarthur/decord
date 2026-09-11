// Module ID: 9345
// Function ID: 9346
// Name: PlayStationLinkModalActionCreators
// Dependencies: [4810, 9346, 1896, 2]

// Module 9345 (PlayStationLinkModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import size from "module_2" /* 2 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9346, dependencyMap.paths), { locationStack, platformType }, c3);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};
