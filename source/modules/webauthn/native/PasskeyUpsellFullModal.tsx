// Module ID: 14720
// Function ID: 14721
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14713, 21, 14716, 12024, 2]
// Exports: default

// Module 14720 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 12024 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14716 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14713).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
