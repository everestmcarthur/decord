// Module ID: 16356
// Function ID: 16357
// Name: VoiceSubtitle
// Dependencies: [19, 21, 4570, 1114, 4726, 2]
// Exports: default

// Module 16356 (VoiceSubtitle)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4726 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/VoiceSubtitle.tsx");

export default function VoiceSubtitle(arg0) {
  ({ guildId: require, voiceUsers } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null };
  const intl = util.intl;
  const obj2 = { users: null, overflowCount: null };
  const substr = voiceUsers.slice(0, 2);
  const mapped = substr.map((item) => NicknameUtilsDefault.getName(require, null, item));
  obj2.users = mapped.join(", ");
  obj2.overflowCount = Math.max(voiceUsers.length - 2, 0);
  obj.children = intl.format(util.t.r1Vkoc, obj2);
  return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-voice-connected", lineClamp: 1, children: null });
};
