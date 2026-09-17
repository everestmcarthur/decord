// Module ID: 12387
// Function ID: 12388
// Name: useUploadDisabled
// Dependencies: [4981, 4278, 4980, 1074, 504, 7335, 2]
// Exports: default

// Module 12387 (useUploadDisabled)
import DraftStore from "DraftStore" /* 4981 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7335 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4980 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  _require = arg0;
  const items = [PermissionStore, UploadAttachmentStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = UploadAttachmentStore.getUploads(id.id, DraftType.ChannelMessage).length >= hasOwnProperty;
    if (!tmp) {
      let tmp4 = obj.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp4) {
        let isPrivateResult = obj.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(constants.ATTACH_FILES, obj);
        }
        tmp4 = !isPrivateResult;
      }
      tmp = tmp4;
    }
    return tmp;
  });
};
