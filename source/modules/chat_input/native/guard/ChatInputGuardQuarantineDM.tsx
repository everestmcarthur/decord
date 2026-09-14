// Module ID: 12581
// Function ID: 12582
// Name: ChatInputGuardQuarantineDM
// Dependencies: [19, 12582, 21, 12578, 12583, 1114, 2]

// Module 12581 (ChatInputGuardQuarantineDM)
import util from "util" /* 1114 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12578 */;
import ChatWarningIcon from "ChatWarningIcon" /* 12583 */;
import noop from "module_19" /* 19 */;

require = fn;
const QUARANTINE_APPEAL_LINK = fn(12582).QUARANTINE_APPEAL_LINK;
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
