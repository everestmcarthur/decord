// Module ID: 16001
// Function ID: 16002
// Name: showPushNotificationPromptModal
// Dependencies: [12413, 12709, 4763, 16002, 1896, 12416, 2]
// Exports: showPushNotificationPromptModal

// Module 16001 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12413 */;
import NUFConstants from "NUFConstants" /* 12709 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1896)(16002, dependencyMap.paths), {
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
  const result = onComplete(12416).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
