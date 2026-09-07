// Module ID: 13417
// Function ID: 13418
// Name: zustandStore
// Dependencies: [4429, 2]

// Module 13417 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4429 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ scrollToSectionId: "Array" }));
const result = set.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
