// Module ID: 16722
// Function ID: 16723
// Name: NativeICYMIUtils
// Dependencies: [4925, 16723, 1897, 16724, 2]
// Exports: pushICYMIInfoModal

// Module 16722 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16723, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};
