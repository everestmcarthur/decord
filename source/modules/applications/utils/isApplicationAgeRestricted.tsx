// Module ID: 9538
// Function ID: 9539
// Name: isApplicationAgeRestricted
// Dependencies: [4867, 9539, 5196, 2]
// Exports: default

// Module 9538 (isApplicationAgeRestricted)
import utils from "utils" /* 5196 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9539 */;
import ApplicationStore from "ApplicationStore" /* 4867 */;

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
