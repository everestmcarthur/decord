// Module ID: 13480
// Function ID: 13481
// Name: PremiumNitroNavigationStore
// Dependencies: [4506, 2]

// Module 13480 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4506 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
