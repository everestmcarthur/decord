// Module ID: 5199
// Function ID: 5200
// Name: utils
// Dependencies: [5200, 5202, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5199 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5200 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5202 */;
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
