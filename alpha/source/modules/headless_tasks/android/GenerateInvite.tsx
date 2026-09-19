// Module ID: 18383
// Function ID: 18384
// Name: GenerateInvite
// Dependencies: [17, 18375, 8648, 7999, 2]

// Module 18383 (GenerateInvite)
import _mod17 from "module_17" /* 17 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8648 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/headless_tasks/android/GenerateInvite.tsx");

export default (channelId) => {
  channelId = channelId.channelId;
  return new Promise((arg0) => {
    closure_0 = arg0;
    channelId(18375).awaitStorage(() => {
      const invite = InstantInviteActionCreatorsDefault.createInvite(channelId, {}, "Mobile Voice Overlay");
      invite.then((code) => {
        RNCClipboard = RNCClipboard.RNCClipboard;
        RNCClipboard.setString(channelId(7999)(code.code));
        closure_1_0(true);
      });
    });
  });
};
