// Module ID: 11343
// Function ID: 11344
// Name: usePreviewCollectiblesProduct
// Dependencies: [32, 19, 8390, 7743, 1888, 7744, 7745, 8401, 11342, 1890, 8394, 2]
// Exports: usePreviewCollectibleProduct

// Module 11343 (usePreviewCollectiblesProduct)
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8394 */;
import CollectiblePreviewSession from "CollectiblePreviewSession" /* 11342 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8390 */;

const require = globalThis.__r;

require = fn;
const isAvatarDecorationRecord = fn(7743).isAvatarDecorationRecord;
const isNameplateRecord = fn(1888).isNameplateRecord;
const isProfileEffectRecord = fn(7744).isProfileEffectRecord;
const isProfileFrameRecord = fn(7745).isProfileFrameRecord;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = function usePreviewCollectibleProduct(product, arg1, arg2) {
  _require = product;
  dependencyMap = arg1;
  closure_2 = arg2;
  const shopProductItems = require("useShopProductItems").useShopProductItems(product);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const items = [product, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = firstProfileEffect.useEffect(() => {
    let obj = product;
    product = product(11342).currentPreviewGeneration();
    const pendingChanges = firstAvatarDecoration.getPendingChanges();
    dependencyMap = { avatarDecoration: pendingChanges.pendingAvatarDecoration, profileEffect: pendingChanges.pendingProfileEffect, nameplate: pendingChanges.pendingNameplate, profileFrame: pendingChanges.pendingProfileFrame };
    if (product.type === product(1890).CollectiblesItemType.BUNDLE) {
      const obj3 = {};
      if (null != firstAvatarDecoration) {
        obj3.avatarDecoration = firstAvatarDecoration;
      }
      if (null != firstProfileEffect) {
        obj3.profileEffect = firstProfileEffect;
      }
      if (null != firstNameplate) {
        obj3.nameplate = firstNameplate;
      }
      if (null != firstProfileFrame) {
        obj3.profileFrame = firstProfileFrame;
      }
      if (null != closure_2) {
        if (firstNameplate(tmp12)) {
          obj3.avatarDecoration = tmp12;
        } else {
          if (isProfileEffectRecord(tmp12)) {
            obj3.profileEffect = tmp12;
          } else if (!firstProfileFrame(tmp12)) {
            if (isProfileFrameRecord(tmp12)) {
              obj3.profileFrame = tmp12;
            }
          }
          obj3.nameplate = tmp12;
        }
      }
      obj = obj(8394);
      obj.setPendingChanges(obj3);
    } else {
      const first = closure_2(product.items, 1)[0];
      if (firstNameplate(first)) {
        const obj4 = { avatarDecoration: first };
        obj(8394).setPendingChanges(obj4);
        const objResult = obj(8394);
      } else if (isProfileEffectRecord(first)) {
        const obj5 = { profileEffect: first };
        obj(8394).setPendingChanges(obj5);
        const objResult4 = obj(8394);
      } else if (firstProfileFrame(first)) {
        const obj6 = { nameplate: first };
        obj(8394).setPendingChanges(obj6);
        const objResult5 = obj(8394);
      } else if (isProfileFrameRecord(first)) {
        const obj7 = { profileFrame: first };
        obj(8394).setPendingChanges(obj7);
        const objResult6 = obj(8394);
      }
      return () => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = closure_0 === CollectiblePreviewSession.currentPreviewGeneration();
        }
        if (tmp) {
          UserProfileSettingsActionCreators.setPendingChanges(closure_1);
        }
      };
    }
  }, items);
};
