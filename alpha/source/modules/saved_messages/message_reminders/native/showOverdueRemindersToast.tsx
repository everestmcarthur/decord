// Module ID: 17793
// Function ID: 17794
// Name: showOverdueRemindersToast
// Dependencies: [11900, 8058, 8065, 4420, 4684, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17793 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4420 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11900 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(8065).markRemindersSeen();
        const tmpResult2 = tmp(8065);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4684).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(8065);
    }
    obj2 = SavedMessagesStore;
  }
};
