// Module ID: 16069
// Function ID: 16070
// Name: showPushNotificationPromptModal
// Dependencies: [12504, 12800, 4810, 16070, 1896, 12507, 2]
// Exports: showPushNotificationPromptModal

// Module 16069 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12504 */;
import NUFConstants from "NUFConstants" /* 12800 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1896)(16070, dependencyMap.paths), {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  }, closure_4);
  const obj2 = {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  };
  const result = onComplete(12507).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
