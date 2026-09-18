// Module ID: 5112
// Function ID: 5113
// Name: utils
// Dependencies: [5113, 5115, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5112 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5113 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5115 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj2 = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction(obj2);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
