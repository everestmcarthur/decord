// Module ID: 9497
// Function ID: 9498
// Name: isApplicationAgeRestricted
// Dependencies: [4834, 9498, 5163, 2]
// Exports: default

// Module 9497 (isApplicationAgeRestricted)
import utils from "utils" /* 5163 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9498 */;
import ApplicationStore from "ApplicationStore" /* 4834 */;

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
