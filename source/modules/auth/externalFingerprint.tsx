// Module ID: 17933
// Function ID: 17934
// Name: externalFingerprint
// Dependencies: [502, 5470, 573, 2]
// Exports: default

// Module 17933 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 573 */;
import keysSorter from "keysSorter" /* 5470 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const obj = keysSorter;
    const fingerprint = obj.parse(keysSorter.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj4 = { type: "FINGERPRINT", fingerprint };
      DispatcherDefault.dispatch(obj4);
    }
  }
};
