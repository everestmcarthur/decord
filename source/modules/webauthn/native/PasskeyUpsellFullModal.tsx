// Module ID: 14693
// Function ID: 14694
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14686, 21, 14689, 11959, 2]
// Exports: default

// Module 14693 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11959 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14689 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14686).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
