// Module ID: 5163
// Function ID: 5164
// Name: utils
// Dependencies: [5164, 5166, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5163 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5164 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5166 */;
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
