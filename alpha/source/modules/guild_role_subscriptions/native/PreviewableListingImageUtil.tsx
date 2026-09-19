// Module ID: 18169
// Function ID: 18170
// Name: PreviewableListingImageUtil
// Dependencies: [18170, 2]
// Exports: getSource

// Module 18169 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18170 */;
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
