// Module ID: 17757
// Function ID: 17758
// Name: PreviewableListingImageUtil
// Dependencies: [17758, 2]
// Exports: getSource

// Module 17757 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17758 */;
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
