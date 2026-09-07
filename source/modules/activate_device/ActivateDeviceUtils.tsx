// Module ID: 13880
// Function ID: 13881
// Name: clientIdToActivateDevicePlatform
// Dependencies: [1074, 9266, 2]
// Exports: clientIdToActivateDevicePlatform

// Module 13880 (clientIdToActivateDevicePlatform)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import set2 from "set" /* 9266 */;

const PlatformTypes = ME.PlatformTypes;
const result = set.fileFinishedImporting("modules/activate_device/ActivateDeviceUtils.tsx");

export const clientIdToActivateDevicePlatform = function clientIdToActivateDevicePlatform(clientId) {
  if (clientId === set2.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID) {
    let PLAYSTATION = PlatformTypes.PLAYSTATION;
  } else {
    PLAYSTATION = null;
    if (clientId === set2.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) {
      PLAYSTATION = PlatformTypes.PLAYSTATION_STAGING;
    }
  }
  return PLAYSTATION;
};
