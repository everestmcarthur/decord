// Module ID: 5320
// Function ID: 5321
// Name: ImagePickerUtils
// Dependencies: [1609, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5320 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
