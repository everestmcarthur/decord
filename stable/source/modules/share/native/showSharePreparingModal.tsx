// Module ID: 8367
// Function ID: 8368
// Name: showSharePreparingModal
// Dependencies: [8365, 4763, 8368, 1896, 2]
// Exports: showSharePreparingModal

// Module 8367 (showSharePreparingModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8365 */;
import size from "module_2" /* 2 */;

const SHARE_PREPARING_MODAL_KEY = SharePreparingModalConstants.SHARE_PREPARING_MODAL_KEY;
const result = size.fileFinishedImporting("modules/share/native/showSharePreparingModal.tsx");

export const showSharePreparingModal = function showSharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  c1 = false;
  const timeout = setTimeout(() => {
    const obj2 = {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(4763).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4763);
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8368, dependencyMap.paths), {
      onCancel() {
        if (!_true) {
          _true = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(dependencyMap);
          _true(4763).popWithKey(SHARE_PREPARING_MODAL_KEY);
          onCancel();
          const obj = _true(4763);
        }
      }
    }, SHARE_PREPARING_MODAL_KEY, { animation: "fade", presentation: "transparentModal" }).then(() => {
      if (_true) {
        _true(4763).popWithKey(SHARE_PREPARING_MODAL_KEY);
        const obj = _true(4763);
      }
    });
  }, 1000);
  return () => {
    if (!c1) {
      c1 = true;
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_2);
      ModalActionCreatorsDefault.popWithKey(SHARE_PREPARING_MODAL_KEY);
    }
  };
};
