// Module ID: 15731
// Function ID: 15732
// Name: mfa/MFAActionCreators
// Dependencies: [15732, 15733, 15742, 2]
// Exports: openMFAModal

// Module 15731 (mfa/MFAActionCreators)
import MFAConstants from "MFAConstants" /* 15732 */;
import MFA from "MFA" /* 15742 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const SELECT_NAMES = MFAConstants.SELECT_NAMES;
const result = size.fileFinishedImporting("modules/mfa/MFAActionCreators.tsx");

export const openMFAModal = function openMFAModal(methods, arg1, arg2) {
  _require = arg1;
  methods = methods.methods;
  methods.methods = methods.filter((type) => Object.hasOwn(SELECT_NAMES, type.type));
  require("MFAModal").openMFAModal(methods, (arg0) => MFA.trySubmit(arg0, closure_0), arg2);
};
