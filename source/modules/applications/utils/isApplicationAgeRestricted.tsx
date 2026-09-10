// Module ID: 9438
// Function ID: 9439
// Name: isApplicationAgeRestricted
// Dependencies: [4802, 9439, 5126, 2]
// Exports: default

// Module 9438 (isApplicationAgeRestricted)
import utils from "utils" /* 5126 */;
import AgeRestrictedApplicationCommandsExperimentDefault from "AgeRestrictedApplicationCommandsExperiment" /* 9439 */;
import ApplicationStore from "ApplicationStore" /* 4802 */;

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
