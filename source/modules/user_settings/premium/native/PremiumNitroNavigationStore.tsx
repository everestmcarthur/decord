// Module ID: 13505
// Function ID: 13506
// Name: PremiumNitroNavigationStore
// Dependencies: [4510, 2]

// Module 13505 (PremiumNitroNavigationStore)
import ZustandStore from "ZustandStore" /* 4510 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ scrollToSectionId: "r" }));
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroNavigationStore.tsx");

export default zustandStore;
export const NitroHomeSectionId = { REFERRAL_PROGRAM: "referralProgram" };
