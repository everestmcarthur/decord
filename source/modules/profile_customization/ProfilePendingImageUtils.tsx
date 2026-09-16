// Module ID: 14707
// Function ID: 14708
// Name: ProfilePendingImageUtils
// Dependencies: [7099, 1370, 2]
// Exports: createPendingImage

// Module 14707 (ProfilePendingImageUtils)
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export const createPendingImage = function createPendingImage(assetOrigin) {
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    const obj = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset: "Array", originalMd5 };
    return obj;
  } else if (tmp3(7099).AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    const obj2 = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset, originalMd5 };
    return obj2;
  } else if (tmp3(7099).AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj3 = { assetOrigin: NEW_ASSET, imageUri, description: "Array", originalAsset };
    return obj3;
  } else {
    tmp3(1370).assertNever(NEW_ASSET);
  }
};
