// Module ID: 17876
// Function ID: 17877
// Name: PreviewableListingImageUtil
// Dependencies: [17877, 2]
// Exports: getSource

// Module 17876 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17877 */;
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
