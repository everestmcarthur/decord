// Module ID: 14777
// Function ID: 14778
// Name: PasskeyUpsellActionCreators
// Dependencies: [4458, 1944, 1946, 4841, 14778, 1897, 4605, 14779, 14781, 2]

// Module 14777 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(1946).requestMarkDismissibleContentAsShown(tmp(1944).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(1946);
    }
  },
  openPasskeyUpsellModal() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14778, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    ModalActionCreatorsDefault.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14779, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14781, dependencyMap.paths), merged, PASSKEY_UPSELL_KEY);
  }
};
