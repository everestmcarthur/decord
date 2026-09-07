// Module ID: 14784
// Function ID: 14785
// Dependencies: [4763, 14785, 1896, 2]

// Module 14784
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = set.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    let obj = _modDef4763;
    obj = { initialRouteName };
    obj.pushLazy(asyncRequireImpl(14785, dependencyMap.paths), obj, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    _modDef4763.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
