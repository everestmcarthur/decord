// Module ID: 16093
// Function ID: 16094
// Name: showPushNotificationPromptModal
// Dependencies: [12538, 12834, 4839, 16094, 1896, 12541, 2]
// Exports: showPushNotificationPromptModal

// Module 16093 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12538 */;
import NUFConstants from "NUFConstants" /* 12834 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1896)(16094, dependencyMap.paths), {
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
  const result = onComplete(12541).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
