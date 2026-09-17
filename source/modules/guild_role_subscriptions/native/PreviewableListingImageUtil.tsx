// Module ID: 17996
// Function ID: 17997
// Name: PreviewableListingImageUtil
// Dependencies: [17997, 2]
// Exports: getSource

// Module 17996 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17997 */;
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
