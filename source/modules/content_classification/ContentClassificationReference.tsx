// Module ID: 9634
// Function ID: 9635
// Name: ContentClassificationReference
// Dependencies: [5199, 2]
// Exports: isAgeRestrictedClassificationReference

// Module 9634 (ContentClassificationReference)
import utils from "utils" /* 5199 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.data);
  }
  return result;
};
