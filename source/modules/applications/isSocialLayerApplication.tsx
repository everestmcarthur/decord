// Module ID: 11627
// Function ID: 11628
// Name: isSocialLayerApplication
// Dependencies: [1074, 8948, 9330, 2]
// Exports: default, isSocialLayerSDKAuthorization

// Module 11627 (isSocialLayerApplication)
import Constants from "Constants" /* 1074 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8948 */;
import scopes2 from "scopes" /* 9330 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/applications/isSocialLayerApplication.tsx");

export default function isSocialLayerApplication(application) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = ApplicationFlagUtils;
  }
  return hasApplicationFlagResult;
};
export const isSocialLayerSDKAuthorization = function isSocialLayerSDKAuthorization(application, scopes) {
  let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION_LIMITED);
  if (!hasApplicationFlagResult) {
    hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.SOCIAL_LAYER_INTEGRATION);
    const tmpResult = ApplicationFlagUtils;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = scopes.some((item) => scopes2.isSocialLayerUmbrellaScope(item));
  }
  return hasApplicationFlagResult;
};
