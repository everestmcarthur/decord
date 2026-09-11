// Module ID: 16445
// Function ID: 16446
// Name: openManageAccountsModal
// Dependencies: [12509, 4574, 4810, 16446, 1896, 2]
// Exports: default

// Module 16445 (openManageAccountsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import Constants from "Constants" /* 12509 */;
import size from "module_2" /* 2 */;

const SWITCH_ACCOUNTS_MODAL_KEY = Constants.SWITCH_ACCOUNTS_MODAL_KEY;
const result = size.fileFinishedImporting("modules/multi_account/native/openManageAccountsModal.tsx");

export default function openManageAccountsModal(initialRouteName) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16446, dependencyMap.paths), { initialRouteName }, SWITCH_ACCOUNTS_MODAL_KEY);
};
