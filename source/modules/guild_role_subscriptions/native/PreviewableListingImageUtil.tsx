// Module ID: 18090
// Function ID: 18091
// Name: PreviewableListingImageUtil
// Dependencies: [18091, 2]
// Exports: getSource

// Module 18090 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18091 */;
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
