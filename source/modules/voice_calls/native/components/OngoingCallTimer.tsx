// Module ID: 13853
// Function ID: 13854
// Name: OngoingCallTimer
// Dependencies: [19, 5330, 21, 504, 11, 13854, 2]
// Exports: default

// Module 13853 (OngoingCallTimer)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import TimerDefault from "Timer" /* 13854 */;
import noop from "module_19" /* 19 */;
import CallStore from "CallStore" /* 5330 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallTimer.tsx");

export default function OnGoingCallTimer(style) {
  const channelId = style.channelId;
  const items = [CallStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const call = CallStore.getCall(channelId);
    let messageId;
    if (call != null) {
      messageId = call.messageId;
    }
    return messageId;
  }, items1);
  let timestamp = 0;
  if (null != stateFromStores) {
    timestamp = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
  }
  return jsx(TimerDefault, { style: style.style, timestamp });
};
