// Module ID: 9402
// Function ID: 9403
// Name: disableFalsePositiveButton
// Dependencies: [573, 2]
// Exports: disableFalsePositiveButton

// Module 9402 (disableFalsePositiveButton)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

function disableFalsePositiveButton(channelId, messageId) {
  let obj = dispatcherDefault;
  obj = { type: "MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT", messageId, channelId };
  obj.dispatch(obj);
}
const result = set.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaFalsePositiveActionCreators.tsx");

export default { disableFalsePositiveButton };
export { disableFalsePositiveButton };
