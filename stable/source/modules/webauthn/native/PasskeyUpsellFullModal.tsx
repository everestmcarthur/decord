// Module ID: 14667
// Function ID: 14668
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14660, 21, 14663, 11933, 2]
// Exports: default

// Module 14667 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11933 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14663 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14660).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
