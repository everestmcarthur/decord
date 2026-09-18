// Module ID: 17724
// Function ID: 17725
// Name: PreviewableListingImageUtil
// Dependencies: [17725, 2]
// Exports: getSource

// Module 17724 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17725 */;
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
