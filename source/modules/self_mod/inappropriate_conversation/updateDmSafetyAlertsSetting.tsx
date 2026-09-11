// Module ID: 14890
// Function ID: 14891
// Name: updateDmSafetyAlertsSetting
// Dependencies: [1940, 1218, 2]
// Exports: updateDmSafetyAlertsSetting

// Module 14890 (updateDmSafetyAlertsSetting)
import wrappers from "wrappers" /* 1218 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", async (arg0) => {
    const BoolValue = wrappers.BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value });
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
