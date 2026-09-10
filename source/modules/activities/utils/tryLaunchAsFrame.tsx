// Module ID: 9593
// Function ID: 9594
// Name: tryLaunchAsFrame
// Dependencies: [4833, 9581, 9576, 9577, 2]
// Exports: tryLaunchAsFrame

// Module 9593 (tryLaunchAsFrame)
import canLaunchFrame from "canLaunchFrame" /* 9576 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9577 */;
import ApplicationStore from "ApplicationStore" /* 4833 */;

require = fn;
const MAIN_SURFACE = fn(9581).MAIN_SURFACE;
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
