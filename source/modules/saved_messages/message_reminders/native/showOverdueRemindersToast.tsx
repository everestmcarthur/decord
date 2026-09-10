// Module ID: 17513
// Function ID: 17514
// Name: showOverdueRemindersToast
// Dependencies: [11691, 7869, 7875, 4272, 4537, 1114, 2]
// Exports: showOverdueRemindersToast

// Module 17513 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4272 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11691 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7875).markRemindersSeen();
        const tmpResult2 = tmp(7875);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4537).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1114).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1114).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7875);
    }
    obj2 = SavedMessagesStore;
  }
};
