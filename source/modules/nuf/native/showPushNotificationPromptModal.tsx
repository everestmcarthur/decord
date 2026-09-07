// Module ID: 16001
// Function ID: 16002
// Name: showPushNotificationPromptModal
// Dependencies: [12413, 12709, 4763, 16002, 1896, 12416, 2]
// Exports: showPushNotificationPromptModal

// Module 16001 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4763 from "module_4763" /* 4763 */;
import set2 from "set" /* 12413 */;
import NewUserTypes from "NewUserTypes" /* 12709 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4763;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1896)(16002, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12416).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
