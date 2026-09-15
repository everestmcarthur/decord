// Module ID: 14762
// Function ID: 14763
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14755, 21, 14758, 12063, 2]
// Exports: default

// Module 14762 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 12063 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14758 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14755).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
