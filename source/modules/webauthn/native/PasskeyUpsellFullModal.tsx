// Module ID: 14751
// Function ID: 14752
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14744, 21, 14747, 12058, 2]
// Exports: default

// Module 14751 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 12058 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14747 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14744).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
