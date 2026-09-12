// Module ID: 12580
// Function ID: 12581
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 12581, 21, 12577, 12582, 1114, 2]

// Module 12580 (ChatInputGuardQuarantineDM)
import util from "util" /* 1114 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12577 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12582 */;
import noop from "module_19" /* 19 */;

require = fn;
const QUARANTINE_APPEAL_LINK = fn(12581).QUARANTINE_APPEAL_LINK;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardQuarantineDM.tsx");

export default noop.memo(function ChatInputGuardQuarantineDM() {
  const obj = { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.EouHwv);
  const intl2 = util.intl;
  obj.subtext = intl2.format(util.t.PThBel, { appealLink: QUARANTINE_APPEAL_LINK });
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: jsx(ChatWarningIcon.ChatWarningIcon, {}), message: null, subtext: null });
});
