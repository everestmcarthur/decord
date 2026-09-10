// Module ID: 9428
// Function ID: 9429
// Name: ExplicitMediaActionCreators
// Dependencies: [7307, 7615, 7614, 4919, 1114, 9429, 4541, 9430, 1896, 2]
// Exports: handleSenderFalsePositiveFlow

// Module 9428 (ExplicitMediaActionCreators)
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7614 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7307 */;

require = fn;
let closure_4 = fn(7615).EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_ACTION_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaActionCreators.native.tsx");

export const handleSenderFalsePositiveFlow = function handleSenderFalsePositiveFlow(channelId, messageId) {
  const obj = ExplicitMediaRedactionUtils;
  const tmp2 = dependencyMap;
  const result = obj.trackMediaRedactionAction({ action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId });
  if (ExplicitMediaStore.canSubmitFpReport(messageId)) {
    const obj3 = { channelId, messageId };
    tmp4(4541).openLazy(tmp(1896)(9430, tmp2.paths), closure_4, obj3);
  } else {
    const obj4 = { title: null, body: null, confirmText: null };
    const intl = tmp(1114).intl;
    obj4.title = intl.string(tmp(1114).t["iS/eFN"]);
    const intl2 = tmp(1114).intl;
    obj4.body = intl2.string(tmp(1114).t.YrjcgR);
    const intl3 = tmp(1114).intl;
    obj4.confirmText = intl3.string(tmp(1114).t.BddRzS);
    tmp4(4919).show(obj4);
    const tmp4Result3 = tmp4(4919);
    const result1 = tmp4(9429).disableFalsePositiveButton(channelId, messageId);
  }
  const obj2 = { action: ExplicitMediaRedactionUtils.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED, messageId, channelId };
};
