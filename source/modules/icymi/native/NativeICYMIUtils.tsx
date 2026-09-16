// Module ID: 16595
// Function ID: 16596
// Name: NativeICYMIUtils
// Dependencies: [4841, 16596, 1897, 16597, 2]
// Exports: pushICYMIInfoModal

// Module 16595 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16597 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16596, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
