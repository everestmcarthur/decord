// Module ID: 13983
// Function ID: 13984
// Name: ActivateDeviceUtils
// Dependencies: [1074, 9404, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 13983 (ActivateDeviceUtils)
import Constants from "Constants" /* 1074 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 9404 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
