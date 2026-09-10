// Module ID: 13440
// Function ID: 13441
// Name: PremiumNitroNavigationStore
// Dependencies: [4443, 2]

// Module 13440 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4443 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "disabled" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
