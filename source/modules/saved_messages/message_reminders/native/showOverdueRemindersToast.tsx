// Module ID: 17729
// Function ID: 17730
// Name: showOverdueRemindersToast
// Dependencies: [11810, 7975, 7982, 4338, 4602, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17729 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11810 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7982).markRemindersSeen();
        const tmpResult2 = tmp(7982);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4602).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7982);
    }
    obj2 = SavedMessagesStore;
  }
};
