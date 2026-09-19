// Module ID: 12485
// Function ID: 12486
// Name: ChatInputImageCarousel
// Dependencies: [19, 8020, 5105, 5104, 9653, 21, 504, 10890, 2]

// Module 12485 (ChatInputImageCarousel)
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8020 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5104 */;

const require = fn;
const DraftType = fn(5105).DraftType;
let closure_6 = fn(9653).useChatShowingAutoComplete;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default noop.memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let tmp = closure_6(canUpload.screenIndex);
  dependencyMap = tmp;
  const items = [UploadAttachmentStore, ApplicationCommandStore];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = canUpload(504).useStateFromStores(items, () => {
    let tmp = null;
    if (!closure_2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == ApplicationCommandStore.getActiveCommand(channelId)) {
          uploads = UploadAttachmentStore.getUploads(tmp5, DraftType.ChannelMessage);
        }
        tmp5 = channelId;
      }
      tmp = uploads;
    }
    return tmp;
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { attachments: stateFromStores, channelId };
    tmp4 = jsx(channelId(10890), { attachments: stateFromStores, channelId });
  }
  return tmp4;
});
