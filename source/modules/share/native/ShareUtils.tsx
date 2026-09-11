// Module ID: 13955
// Function ID: 13956
// Name: ShareUtils
// Dependencies: [5, 4947, 4599, 4305, 11347, 9397, 7849, 5179, 5178, 7754, 9383, 7529, 2]
// Exports: sendShareMessage, showInformationToast

// Module 13955 (ShareUtils)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef11347 from "module_11347" /* 11347 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_6 = async function _sendShareMessage() {
  ({ attachments: closure_130_0, channel: closure_130_1, comment: closure_130_2 } = closure_0);
  await "PX_16";
  const id = closure_130_1.id;
  closure_130_4 = closure_130_0.map((uri) => {
    const size = { uri: uri.uri, originalUri: uri.uri, mimeType: uri.mimeType, filename: uri.name, platform: closure_0(5179).UploadPlatform.REACT_NATIVE, width: uri.width, height: uri.height };
    const cloudUpload = new closure_0(5178).CloudUpload(size, closure_1_1.id);
    return cloudUpload;
  });
  c1 = closure_130_2;
  if (closure_130_2 == null) {
    c1 = "";
  }
  closure_130_5 = closure_131_1(closure_131_2[9]).parse(closure_130_1, c1);
  if (closure_130_4.length > 0) {
    closure_131_1(closure_131_2[5]).clearAll(id, closure_131_4.ChannelMessage);
    closure_131_1(closure_131_2[5]);
  }
  const future = new closure_131_0(closure_131_2[10]).Future();
  closure_130_6 = future;
  await closure_131_1(closure_131_2[11]).sendMessage(closure_130_1.id, closure_130_5, false, {
    location: closure_131_5.SHARE_MODAL,
    doNotNotifyOnError: true,
    attachmentsToUpload: closure_130_4,
    onAttachmentUploadError() {
      closure_1_6.reject(undefined);
      c1(9397).setUploads({ channelId, uploads, draftType: uploads.ChannelMessage, resetState: true });
      const obj = c1(9397);
      const obj2 = { channelId, uploads, draftType: uploads.ChannelMessage, resetState: true };
      c1(7849).saveDraft(channelId, dependencyMap, uploads.ChannelMessage);
    }
  });
  closure_130_6.resolve(undefined);
  return closure_130_6.promise;
};
const DraftType = fn(4947).DraftType;
const MessageSendLocation = fn(4599).MessageSendLocation;
let size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareUtils.tsx");

export const showInformationToast = function showInformationToast(intl3) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "INFORMATION_TOAST-" + intl3, content: intl3, icon: _modDef11347 });
};
export const sendShareMessage = function sendShareMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
