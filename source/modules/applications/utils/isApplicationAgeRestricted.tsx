// Module ID: 9411
// Function ID: 9412
// Name: isApplicationAgeRestricted
// Dependencies: [4788, 9412, 5112, 2]
// Exports: default

// Module 9411 (isApplicationAgeRestricted)
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5112 */;
import getUnitIdDefault from "getUnitId" /* 9412 */;
import closure_3 from "addApplication" /* 4788 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/applications/utils/isApplicationAgeRestricted.tsx");

export default function isApplicationAgeRestricted(arg0) {
  if (obj.getConfig({ location: "isApplicationAgeRestricted" }).enabled) {
    application = application.getApplication(arg0);
    let prop;
    if (application != null) {
      prop = application.contentClassification;
    }
    return isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(prop);
  } else {
    return false;
  }
  obj = getUnitIdDefault;
};
