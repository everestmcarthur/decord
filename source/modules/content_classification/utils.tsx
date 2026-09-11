// Module ID: 5164
// Function ID: 5165
// Name: utils
// Dependencies: [5165, 5167, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5164 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5165 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5167 */;
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
