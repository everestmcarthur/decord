// Module ID: 17563
// Function ID: 17564
// Name: showOverdueRemindersToast
// Dependencies: [11753, 7927, 7934, 4305, 4569, 1114, 2]
// Exports: showOverdueRemindersToast

// Module 17563 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11753 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7934).markRemindersSeen();
        const tmpResult2 = tmp(7934);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4569).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1114).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1114).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7934);
    }
    obj2 = SavedMessagesStore;
  }
};
