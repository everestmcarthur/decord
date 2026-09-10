// Module ID: 11161
// Function ID: 11162
// Name: usePreviewCollectiblesProduct
// Dependencies: [32, 19, 8223, 7599, 1887, 7600, 7601, 8234, 11160, 1889, 8227, 2]
// Exports: usePreviewCollectibleProduct

// Module 11161 (usePreviewCollectiblesProduct)
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8227 */;
import CollectiblePreviewSession from "CollectiblePreviewSession" /* 11160 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8223 */;

const require = globalThis.__r;

require = fn;
const isAvatarDecorationRecord = fn(7599).isAvatarDecorationRecord;
const isNameplateRecord = fn(1887).isNameplateRecord;
const isProfileEffectRecord = fn(7600).isProfileEffectRecord;
const isProfileFrameRecord = fn(7601).isProfileFrameRecord;
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
    product = product(11160).currentPreviewGeneration();
    const pendingChanges = firstAvatarDecoration.getPendingChanges();
    dependencyMap = { avatarDecoration: pendingChanges.pendingAvatarDecoration, profileEffect: pendingChanges.pendingProfileEffect, nameplate: pendingChanges.pendingNameplate, profileFrame: pendingChanges.pendingProfileFrame };
    if (product.type === product(1889).CollectiblesItemType.BUNDLE) {
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
      obj = obj(8227);
      obj.setPendingChanges(obj3);
    } else {
      const first = closure_2(product.items, 1)[0];
      if (firstNameplate(first)) {
        const obj4 = { avatarDecoration: first };
        obj(8227).setPendingChanges(obj4);
        const objResult = obj(8227);
      } else if (isProfileEffectRecord(first)) {
        const obj5 = { profileEffect: first };
        obj(8227).setPendingChanges(obj5);
        const objResult4 = obj(8227);
      } else if (firstProfileFrame(first)) {
        const obj6 = { nameplate: first };
        obj(8227).setPendingChanges(obj6);
        const objResult5 = obj(8227);
      } else if (isProfileFrameRecord(first)) {
        const obj7 = { profileFrame: first };
        obj(8227).setPendingChanges(obj7);
        const objResult6 = obj(8227);
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
