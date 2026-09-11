// Module ID: 12549
// Function ID: 12550
// Name: ChatInputGuardReturnToGameProfile
// Dependencies: [19, 17, 21, 4607, 576, 12543, 1396, 1114, 9672, 2]

// Module 12549 (ChatInputGuardReturnToGameProfile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import ArrowSmallLeftIcon from "ArrowSmallLeftIcon" /* 9672 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12543 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let obj = { icon: null };
let size = { height: 40, width: 40, resizeMode: "contain", borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_5 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReturnToGameProfile.tsx");

export default noop.memo(function ChatInputGuardReturnToGameProfile(pendingGameProfileReturn) {
  let tmp2Result;
  const tmp = closure_5();
  if (null != pendingGameProfileReturn.pendingGameProfileReturn.gameIconUrl) {
    const obj = { style: tmp.icon, source: AvatarUtils.makeSource(pendingGameProfileReturn.gameIconUrl) };
    tmp2Result = tmp2(Image, obj);
  }
  const obj3 = { type: "simple-action", icon: tmp2Result, message: null, actionLabel: null, actionIcon: null, actionOnPress: null };
  const intl = util.intl;
  obj3.message = intl.format(util.t.HRHaSF, { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName });
  const intl2 = util.intl;
  obj3.actionLabel = intl2.string(util.t.DjifDP);
  const obj4 = { gameName: pendingGameProfileReturn.pendingGameProfileReturn.gameName };
  obj3.actionIcon = jsx(ArrowSmallLeftIcon.ArrowSmallLeftIcon, { color: nativeDefault.colors.WHITE });
  obj3.actionOnPress = pendingGameProfileReturn.pendingGameProfileReturn.onReturnToGameProfile;
  return <tmp5 type="simple-action" icon={tmp2Result} message={null} actionLabel={null} actionIcon={null} actionOnPress={null} />;
});
