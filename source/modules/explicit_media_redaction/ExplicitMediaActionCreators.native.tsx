// Module ID: 9487
// Function ID: 9488
// Name: ExplicitMediaActionCreators
// Dependencies: [7366, 7673, 7672, 4951, 1114, 9488, 4573, 9489, 1896, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9487 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7672 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7366 */;

require = fn;
let closure_4 = fn(7673).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4573).openLazy(tmp(1896)(9489, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1114).intl;
    obj4.title = intl.string(tmp(1114).t["iS/eFN"]);
    const intl2 = tmp(1114).intl;
    obj4.body = intl2.string(tmp(1114).t.YrjcgR);
    const intl3 = tmp(1114).intl;
    obj4.confirmText = intl3.string(tmp(1114).t.BddRzS);
    tmp4(4951).show(obj4);
    const tmp4Result3 = tmp4(4951);
    const result1 = tmp4(9488).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
