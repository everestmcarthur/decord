// Module ID: 5197
// Function ID: 5198
// Name: utils
// Dependencies: [5198, 5200, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5197 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5198 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5200 */;
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
