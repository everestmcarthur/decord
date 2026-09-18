// Module ID: 16247
// Function ID: 16248
// Name: showPushNotificationPromptModal
// Dependencies: [12652, 12947, 4925, 16248, 1897, 12655, 2]
// Exports: showPushNotificationPromptModal

// Module 16247 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12652 */;
import NUFConstants from "NUFConstants" /* 12947 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1897)(16248, dependencyMap.paths), {
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
  const result = onComplete(12655).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
