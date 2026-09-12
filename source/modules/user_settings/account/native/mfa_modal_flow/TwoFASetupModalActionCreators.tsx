// Module ID: 14869
// Function ID: 14870
// Name: TwoFASetupModalActionCreators
// Dependencies: [4839, 14870, 1896, 2]

// Module 14869 (TwoFASetupModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const TWO_FA_SETUP_MODAL_KEY = "TWO_FA_SETUP_MODAL_KEY";
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalActionCreators.tsx");

export default {
  open(initialRouteName) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14870, dependencyMap.paths), { initialRouteName }, TWO_FA_SETUP_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(TWO_FA_SETUP_MODAL_KEY);
  }
};
