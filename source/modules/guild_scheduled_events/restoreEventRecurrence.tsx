// Module ID: 9902
// Function ID: 9903
// Name: restoreEventRecurrence
// Dependencies: [9708, 2]
// Exports: default

// Module 9902 (restoreEventRecurrence)
import set from "set" /* 2 */;
import _modDef9708 from "module_9708" /* 9708 */;

let result = set.fileFinishedImporting("modules/guild_scheduled_events/restoreEventRecurrence.tsx");

export default function restoreEventRecurrence(arg0, guild_id, id, event_exception_id) {
  ({ scheduled_start_time, scheduled_end_time } = arg0);
  if (null == scheduled_start_time) {
    if (null == scheduled_end_time) {
      let result = _modDef9708.deleteGuildEventException(guild_id, id, event_exception_id);
      const obj3 = _modDef9708;
    }
    return result;
  }
  let obj = _modDef9708;
  obj = { scheduled_start_time, scheduled_end_time, is_canceled: false };
  result = obj.updateGuildEventException(obj, guild_id, id, event_exception_id);
};
