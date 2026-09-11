// Module ID: 9499
// Function ID: 9500
// Name: isApplicationAgeRestricted
// Dependencies: [4835, 9500, 5164, 2]
// Exports: default

// Module 9499 (isApplicationAgeRestricted)
import utils from "utils" /* 5164 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9500 */;
import ApplicationStore from "ApplicationStore" /* 4835 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    const application = ApplicationStore.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return utils.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = AgeRestrictedApplicationCommandsExperimentDefault;
};
