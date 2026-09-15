// Module ID: 17632
// Function ID: 17633
// Name: showOverdueRemindersToast
// Dependencies: [11794, 7960, 7967, 4338, 4602, 1115, 2]
// Exports: showOverdueRemindersToast

// Module 17632 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11794 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7967).markRemindersSeen();
        const tmpResult2 = tmp(7967);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4602).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1115).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1115).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7967);
    }
    obj2 = SavedMessagesStore;
  }
};
