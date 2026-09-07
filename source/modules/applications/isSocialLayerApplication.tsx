// Module ID: 11537
// Function ID: 11538
// Name: isSocialLayerApplication
// Dependencies: [1074, 8861, 9243, 2]
// Exports: default, isSocialLayerSDKAuthorization

// Module 11537 (isSocialLayerApplication)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getApplicationFlags from "getApplicationFlags" /* 8861 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = set.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = getApplicationFlags;
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = getApplicationFlags.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = getApplicationFlags;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((arg0) => callback(table[2]).isSocialLayerUmbrellaScope(arg0));
  }
  return hasApplicationFlagResult;
};
