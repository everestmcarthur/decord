// Module ID: 14838
// Function ID: 14839
// Name: updateDmSafetyAlertsSetting
// Dependencies: [1940, 1218, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 14838 (updateDmSafetyAlertsSetting)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1940).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(closure_1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _require(1940).UserSettingsDelay.INFREQUENT_USER_ACTION);
};
