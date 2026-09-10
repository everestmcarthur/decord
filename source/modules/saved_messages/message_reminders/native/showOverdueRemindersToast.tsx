// Module ID: 17572
// Function ID: 17573
// Name: showOverdueRemindersToast
// Dependencies: [11731, 7906, 7912, 4303, 4568, 1114, 2]
// Exports: showOverdueRemindersToast

// Module 17572 (showOverdueRemindersToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4303 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11731 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/message_reminders/native/showOverdueRemindersToast.tsx");

export const showOverdueRemindersToast = function showOverdueRemindersToast() {
  if (obj.isForLaterExperimentOn("showOverdueRemindersToast")) {
    const overdueMessageReminderCount = SavedMessagesStore.getOverdueMessageReminderCount();
    if (0 !== overdueMessageReminderCount) {
      const mostRecentOverdueDueAt = obj2.getMostRecentOverdueDueAt();
      if (mostRecentOverdueDueAt > tmpResult.getRemindersLastSeenAt()) {
        tmp(7912).markRemindersSeen();
        const tmpResult2 = tmp(7912);
        const obj3 = { key: "overdue-message-reminders", IconComponent: tmp(4568).ClockIcon, content: null, position: "bottom", toastDurationMs: 5000 };
        const intl = tmp(1114).intl;
        const obj4 = { count: overdueMessageReminderCount };
        obj3.content = intl.formatToPlainString(tmp(1114).t.yBmFPA, obj4);
        ToastActionCreatorsDefault.open(obj3);
      }
      tmpResult = tmp(7912);
    }
    obj2 = SavedMessagesStore;
  }
};
