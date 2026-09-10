// Module ID: 14742
// Function ID: 14743
// Name: PasskeyUpsellFullModal
// Dependencies: [19, 14735, 21, 14738, 11999, 2]
// Exports: default

// Module 14742 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11999 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14738 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14735).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};
