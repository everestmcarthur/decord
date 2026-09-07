// Module ID: 9275
// Function ID: 9276
// Dependencies: [4763, 9276, 1896, 2]

// Module 9275
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "USER_SETTINGS_CONNECTIONS_CRUNCHYROLL_LINK_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModalActionCreators.tsx");

export default {
  showModal(locationStack) {
    let obj = _modDef4763;
    obj = { locationStack };
    obj.pushLazy(asyncRequireImpl(9276, dependencyMap.paths), obj, c3);
  },
  hideModal() {
    _modDef4763.popWithKey(c3);
  }
};
