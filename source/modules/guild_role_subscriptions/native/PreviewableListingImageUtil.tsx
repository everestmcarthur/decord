// Module ID: 17837
// Function ID: 17838
// Name: PreviewableListingImageUtil
// Dependencies: [17838, 2]
// Exports: getSource

// Module 17837 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17838 */;
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
