// Module ID: 17853
// Function ID: 17854
// Name: ParentalConsentManager
// Dependencies: [7358, 17854, 2]

// Module 17853 (ParentalConsentManager)
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 17854 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7358 */;

require = fn;
const prototype = function ParentalConsentManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    CONNECTION_OPEN_SUPPLEMENTAL() {
      return AppStoreAgeSignalReport.beginAppStoreAgeSignalReport();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default prototype1;
