// Module ID: 13308
// Function ID: 13309
// Name: getCoverImageFromActivity
// Dependencies: [1920, 8202, 2]
// Exports: default

// Module 13308 (getCoverImageFromActivity)
import Constants from "Constants" /* 1920 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8202 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
const result = size.fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        assetImage = ApplicationAssetUtils.getAssetImage(application_id, assets.assets.large_image, items);
      }
    }
  }
  return assetImage;
};
