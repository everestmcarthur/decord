// Module ID: 17807
// Function ID: 17808
// Name: PreviewableListingImageUtil
// Dependencies: [17808, 2]
// Exports: getSource

// Module 17807 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17808 */;
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
