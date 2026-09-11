// Module ID: 12546
// Function ID: 12547
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 12547, 21, 12543, 12548, 1114, 2]

// Module 12546 (ChatInputGuardQuarantineDM)
import util from "util" /* 1114 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12543 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12548 */;
import noop from "module_19" /* 19 */;

require = fn;
const QUARANTINE_APPEAL_LINK = fn(12547).QUARANTINE_APPEAL_LINK;
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
