// Module ID: 9489
// Function ID: 9490
// Name: ExplicitMediaActionCreators
// Dependencies: [7367, 7674, 7673, 4952, 1114, 9490, 4574, 9491, 1896, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9489 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7673 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7367 */;

require = fn;
let closure_4 = fn(7674).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4574).openLazy(tmp(1896)(9491, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1114).intl;
    obj4.title = intl.string(tmp(1114).t["iS/eFN"]);
    const intl2 = tmp(1114).intl;
    obj4.body = intl2.string(tmp(1114).t.YrjcgR);
    const intl3 = tmp(1114).intl;
    obj4.confirmText = intl3.string(tmp(1114).t.BddRzS);
    tmp4(4952).show(obj4);
    const tmp4Result3 = tmp4(4952);
    const result1 = tmp4(9490).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
