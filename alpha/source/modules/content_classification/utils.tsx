// Module ID: 5323
// Function ID: 5324
// Name: utils
// Dependencies: [5324, 5326, 2]
// Exports: isAgeRestrictedContentClassification

// Module 5323 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5324 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5326 */;
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
