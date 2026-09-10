// Module ID: 17816
// Function ID: 17817
// Name: PreviewableListingImageUtil
// Dependencies: [17817, 2]
// Exports: getSource

// Module 17816 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17817 */;
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
