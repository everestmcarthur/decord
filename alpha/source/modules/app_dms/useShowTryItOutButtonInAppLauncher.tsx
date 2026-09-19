// Module ID: 12395
// Function ID: 12396
// Name: useShowTryItOutButtonInAppLauncher
// Dependencies: [9600, 12396, 9593, 2]
// Exports: default

// Module 12395 (useShowTryItOutButtonInAppLauncher)
import getPrimaryAppCommand from "getPrimaryAppCommand" /* 9600 */;
import useIsAppDMDefault from "useIsAppDM" /* 12396 */;
import size from "module_2" /* 2 */;

const canLaunchFrame = tmp(9593);
const result = size.fileFinishedImporting("modules/app_dms/useShowTryItOutButtonInAppLauncher.tsx");

export default function useShowTryItOutButtonInAppLauncher(arg0) {
  ({ context, application, botUserId } = arg0);
  let isPrimaryAppCommandUsableInAppDM = getPrimaryAppCommand.useIsPrimaryAppCommandUsableInAppDM({ context, applicationId: application.id, botUserId });
  let channel;
  const obj2 = { context, applicationId: application.id, botUserId };
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const tmp4Result = useIsAppDMDefault(channel);
  const canLaunchFrameResult = canLaunchFrame.canLaunchFrame(application);
  let tmp8 = !canLaunchFrameResult;
  if (!canLaunchFrameResult) {
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = null != botUserId;
    }
    if (isPrimaryAppCommandUsableInAppDM) {
      isPrimaryAppCommandUsableInAppDM = !tmp4Result;
    }
    tmp8 = isPrimaryAppCommandUsableInAppDM;
  }
  return tmp8;
};
