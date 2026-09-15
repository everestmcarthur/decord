// Module ID: 5259
// Function ID: 5260
// Name: UploadTargets
// Dependencies: [1958, 1074, 5218, 5213, 5260, 5262, 2]
// Exports: getUploadTarget

// Module 5259 (UploadTargets)
import UploadUtils from "UploadUtils" /* 5213 */;
import FileUtilsAll from "FileUtils" /* 5218 */;
import GuildProductAttachmentUploadTargetDefault from "GuildProductAttachmentUploadTarget" /* 5260 */;
import ICYMIAttachmentUploadTargetDefault from "ICYMIAttachmentUploadTarget" /* 5262 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const Constants = fn(1074);
({ Endpoints: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
class MessageAttachmentUploadTarget {
}
const prototype = MessageAttachmentUploadTarget.prototype;
prototype["getCreateAttachmentURL"] = function getCreateAttachmentURL(arg0) {
  return hasOwnProperty.MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0);
};
prototype["getDeleteUploadURL"] = function getDeleteUploadURL(arg0) {
  return hasOwnProperty.MESSAGE_DELETE_UPLOAD(arg0);
};
prototype["getMaxFileSize"] = function getMaxFileSize(arg0) {
  const basicChannel = ChannelStore.getBasicChannel(arg0);
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  return FileUtilsAll.maxFileSize(guild_id);
};
prototype["getMaxAttachmentsCount"] = function getMaxAttachmentsCount() {
  return timestampProducer;
};
prototype["getMaxTotalAttachmentSize"] = function getMaxTotalAttachmentSize() {
  return UploadUtils.getMaxTotalAttachmentSize({ location: "MessageAttachmentUploadTarget" });
};
Object.defineProperty(prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return true;
  },
  set: undefined
});
const UploadTargets = { MESSAGE_ATTACHMENT: 0, [0]: "MESSAGE_ATTACHMENT", GUILD_PRODUCT_ATTACHMENT: 1, [1]: "GUILD_PRODUCT_ATTACHMENT", GRAVITY_ATTACHMENT: 2, [2]: "GRAVITY_ATTACHMENT" };
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/UploadTargets.tsx");

export { UploadTargets };
export const getUploadTarget = function getUploadTarget(target) {
  if (obj.GUILD_PRODUCT_ATTACHMENT === target) {
    const tmp13 = new GuildProductAttachmentUploadTargetDefault();
    return tmp13;
  } else if (tmp.GRAVITY_ATTACHMENT === target) {
    const tmp7 = new ICYMIAttachmentUploadTargetDefault();
    return tmp7;
  } else {
    const MESSAGE_ATTACHMENT = tmp.MESSAGE_ATTACHMENT;
    if (typeof MessageAttachmentUploadTarget === "function") {
      return Object.create(MessageAttachmentUploadTarget.prototype);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
