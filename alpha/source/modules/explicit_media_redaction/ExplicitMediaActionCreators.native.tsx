// Module ID: 9509
// Function ID: 9510
// Name: ExplicitMediaActionCreators
// Dependencies: [7533, 7841, 7840, 5109, 1115, 9510, 4723, 9511, 1980, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9509 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7840 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7533 */;

require = fn;
let closure_4 = fn(7841).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4723).openLazy(tmp(1980)(9511, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1115).intl;
    obj4.title = intl.string(tmp(1115).t["iS/eFN"]);
    const intl2 = tmp(1115).intl;
    obj4.body = intl2.string(tmp(1115).t.YrjcgR);
    const intl3 = tmp(1115).intl;
    obj4.confirmText = intl3.string(tmp(1115).t.BddRzS);
    tmp4(5109).show(obj4);
    const tmp4Result3 = tmp4(5109);
    const result1 = tmp4(9510).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
