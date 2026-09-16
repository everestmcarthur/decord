// Module ID: 17932
// Function ID: 17933
// Name: PreviewableListingImageUtil
// Dependencies: [17933, 2]
// Exports: getSource

// Module 17932 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = ListingImageUtilAll.getSource(imageLocal);
  }
  return imageLocal;
};
