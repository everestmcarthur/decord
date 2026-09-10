// Module ID: 16080
// Function ID: 16081
// Name: showPushNotificationPromptModal
// Dependencies: [12479, 12775, 4808, 16081, 1896, 12482, 2]
// Exports: showPushNotificationPromptModal

// Module 16080 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12479 */;
import NUFConstants from "NUFConstants" /* 12775 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1896)(16081, dependencyMap.paths), {
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
  const result = onComplete(12482).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
