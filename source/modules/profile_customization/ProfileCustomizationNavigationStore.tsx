// Module ID: 9213
// Function ID: 9214
// Name: zustandStore
// Dependencies: [4429, 1084, 2]

// Module 9213 (zustandStore)
import set from "set" /* 2 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 1084 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4429 */;

let closure_0 = MAX_FAVORITES.ProfileCustomizationSubsection;
const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = set.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
