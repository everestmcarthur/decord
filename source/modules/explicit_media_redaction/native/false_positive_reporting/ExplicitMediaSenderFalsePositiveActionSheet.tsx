// Module ID: 9403
// Function ID: 9404
// Name: ExplicitMediaObscuredFalsePositiveActionSheet
// Dependencies: [19, 7293, 7601, 21, 563, 9404, 9405, 9402, 7610, 4527, 7600, 2]
// Exports: default

// Module 9403 (ExplicitMediaObscuredFalsePositiveActionSheet)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getFpMessageInfo" /* 7293 */;
import { EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_5 } from "USER_SETTING_ACTION_SHEET_KEY" /* 7601 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaSenderFalsePositiveActionSheet.tsx");

export default function ExplicitMediaObscuredFalsePositiveActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  dependencyMap = undefined;
  let React;
  let reportFalsePositive;
  let obj = channelId(563);
  const items = [reportFalsePositive];
  const stateFromStores = obj.useStateFromStores(items, () => reportFalsePositive.getFpMessageInfo(messageId));
  const attachments = stateFromStores.attachments;
  dependencyMap = attachments.map((id) => id.id);
  const attachments1 = stateFromStores.attachments;
  React = attachments1.map((filename) => filename.filename);
  obj = {
    onSuccess() {
      channelId(9405).handleSuccess(closure_1_5);
      const obj = channelId(9405);
      const result = messageId(9402).disableFalsePositiveButton(channelId, messageId);
    },
    onError() {
      return channelId(9405).handleError();
    },
    report() {
      return channelId(7610).reportFailedSendFalsePositive(channelId, messageId, dependencyMap, closure_3);
    }
  };
  const explicitMediaActions = channelId(9404).useExplicitMediaActions(obj);
  reportFalsePositive = explicitMediaActions.reportFalsePositive;
  if (stateFromStores.attachments.length <= 0) {
    messageId(4527).hideActionSheet();
    const obj4 = messageId(4527);
  }
  const items1 = [reportFalsePositive];
  const callback = React.useCallback(() => {
    reportFalsePositive();
  }, items1);
  obj = { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(7600).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW };
  return jsx(channelId(9405).ExplicitMediaFalsePositiveActionSheet, { channelId, messageId, isReportFalsePositiveLoading: explicitMediaActions.isReportFalsePositiveLoading, onConfirmPress: callback, analyticsContext: tmp(7600).TrackMediaRedactionContext.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW });
};
