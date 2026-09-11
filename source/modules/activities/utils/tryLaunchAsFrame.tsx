// Module ID: 9614
// Function ID: 9615
// Name: tryLaunchAsFrame
// Dependencies: [4834, 9602, 9597, 9598, 2]
// Exports: tryLaunchAsFrame

// Module 9614 (tryLaunchAsFrame)
import canLaunchFrame from "canLaunchFrame" /* 9597 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9598 */;
import ApplicationStore from "ApplicationStore" /* 4834 */;

require = fn;
const MAIN_SURFACE = fn(9602).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    tmp2 = !canLaunchFrame.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    FramesActionCreatorsDefault.launchFrame(obj3);
    flag = true;
  }
  return flag;
};
