// Module ID: 5126
// Function ID: 5127
// Name: utils
// Dependencies: [5127, 5129, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5126 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5127 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5129 */;
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
