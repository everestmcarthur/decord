// Module ID: 11756
// Function ID: 11757
// Name: PushFeedbackActions
// Dependencies: [573, 2]
// Exports: handleSurveyCleanup, receivedNotification

// Module 11756 (PushFeedbackActions)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/push_feedback/PushFeedbackActions.tsx");

export const receivedNotification = function receivedNotification(messageId, channelId, tracking_type) {
  DispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_RECEIVED_NOTIFICATION", messageId, channelId, notificationType: tracking_type });
};
export const handleSurveyCleanup = function handleSurveyCleanup() {
  DispatcherDefault.dispatch({ type: "PUSH_FEEDBACK_CLEANUP" });
};
