// Module ID: 9258
// Function ID: 9259
// Dependencies: [4763, 9259, 1896, 2]

// Module 9258
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "USER_SETTINGS_CONNECTIONS_PS_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx");

export default {
  showModal(locationStack, platformType) {
    let obj = _modDef4763;
    obj = { locationStack, platformType };
    obj.pushLazy(asyncRequireImpl(9259, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4763.popWithKey(c3);
  }
};
