// Module ID: 11178
// Function ID: 11179
// Name: useHandleUseNow
// Dependencies: [19, 11179, 4573, 4809, 4465, 4305, 1114, 11180, 11183, 9297, 2]
// Exports: useHandleUseNow

// Module 11178 (useHandleUseNow)
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import CollectiblePreviewSession from "CollectiblePreviewSession" /* 11183 */;
import noop from "module_19" /* 19 */;

require = fn;
const RootNavigatorScreen = fn(11179).RootNavigatorScreen;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(analyticsLocations) {
  const product = analyticsLocations.product;
  require = product;
  const stageCollectibleChangeForEditProfile = analyticsLocations.stageCollectibleChangeForEditProfile;
  let onSuccess;
  const items = [onSuccess, stageCollectibleChangeForEditProfile];
  onSuccess = onSuccess.useCallback(() => {
    if (null == onSuccess) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      ModalActionCreatorsDefault.popAll();
      if (null == stageCollectibleChangeForEditProfile) {
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (tmp9) {
          rootNavigationRef.navigate(RootNavigatorScreen.YOU);
        }
        tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
      }
    } else {
      tmp();
    }
  }, items);
  const callback1 = onSuccess.useCallback(() => {
    const obj2 = { key: "collectible shop apply error", content: null };
    const intl = product(stageCollectibleChangeForEditProfile[6]).intl;
    obj2.content = intl.string(product(stageCollectibleChangeForEditProfile[6]).t.CKsXk3);
    onSuccess(stageCollectibleChangeForEditProfile[5]).open(obj2);
  }, []);
  const handleUseNow1 = require("hooks/useHandleUseNow").useHandleUseNow({ product, onSuccess, onError: callback1 });
  const handleUseNow = handleUseNow1.handleUseNow;
  const items1 = [stageCollectibleChangeForEditProfile, product, onSuccess, handleUseNow];
  ({ isApplying, canUseNow } = handleUseNow1);
  const callback2 = onSuccess.useCallback(() => {
    if (null != stageCollectibleChangeForEditProfile) {
      const result = CollectiblePreviewSession.commitCollectiblePreview();
      tmp(product);
      callback();
    } else {
      handleUseNow();
    }
  }, items1);
  const tmp5 = onSuccess(stageCollectibleChangeForEditProfile[9])({ analyticsLocations: analyticsLocations.analyticsLocations });
  closure_5 = tmp5;
  let obj2 = { handleUseNow: callback2, isApplying, canUseNow, handleEditProfile: null };
  const items2 = [tmp5, onSuccess];
  obj2.handleEditProfile = onSuccess.useCallback(() => {
    closure_5();
    if (null == onSuccess) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      ModalActionCreatorsDefault.popAll();
    } else {
      tmp2();
    }
  }, items2);
  return obj2;
};
