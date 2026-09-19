// Module ID: 16798
// Function ID: 16799
// Name: NativeICYMIUtils
// Dependencies: [4959, 16799, 1980, 16800, 2]
// Exports: pushICYMIInfoModal

// Module 16798 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16799, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
