// Module ID: 5162
// Function ID: 5163
// Name: utils
// Dependencies: [5163, 5165, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5162 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5163 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5165 */;
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
